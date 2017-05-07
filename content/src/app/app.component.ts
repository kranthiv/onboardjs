import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { MdDialog, MdDialogConfig } from "@angular/material";
import { CommonService } from "./services/common.service";
import { DownloadService } from "./services/download.service";
import { PouchDBService } from "./services/pouch-db.service";
import { QuerySelectorService } from "./services/query-selector.service";
import { Step } from "./models/step";
import {JourneyDialogComponent}  from './components/journey-dialog/journey-dialog.component';

@Component({
  selector: 'onBoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MdDialog, PouchDBService, DownloadService, CommonService,QuerySelectorService,{provide:Window,useValue:window}]
})
export class AppComponent {
  journeyStep: Step;
  lastDialogResult: string;
  config: MdDialogConfig;

  constructor( @Inject(DOCUMENT) private document: Document,@Inject(Window) private _window: Window, private _dialog: MdDialog, private _pouchDbService: PouchDBService
    , private _downloadService: DownloadService, private _commonService: CommonService, private _docQuerySVC: QuerySelectorService) { }

  private openDialog() {
    let selection = this._window.getSelection();
    this.journeyStep = new Step();
    this.journeyStep.title = selection.toString();
    let range = selection.getRangeAt(0);
    this.journeyStep.target = this._docQuerySVC.generateSelector(range.commonAncestorContainer.parentElement);
    this.config = new MdDialogConfig();
    this.config.data = this.journeyStep;
    let dialogRef = this._dialog.open(JourneyDialogComponent, this.config);
    dialogRef.afterClosed().subscribe((result: Step | string) => {
      if (result !== null && result !== "cancel") {
        let save = this._pouchDbService.put(this.journeyStep.id, this.journeyStep);
        save.then((result) => {
          console.info("saved to the indexdb");
        });
        save.catch((error) => {
          console.error(error);
        });
      } else {
        console.warn("step not added");
      }
    });
  }

  downloadJourney() {
    let name = this._commonService.parseURI(window.location.href);
    let journey = this._pouchDbService.get(this._commonService.parseURI(window.location.href));
    journey.then((result: any) => {
      this._downloadService.downloadJSON<string>(JSON.stringify(result), `${name}.json`);
    });
  }
}
