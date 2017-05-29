import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { MdDialog, MdDialogConfig } from "@angular/material";
import { CommonService } from "./services/common.service";
import { DownloadService } from "./services/download.service";
import { PouchDBService } from "./services/pouch-db.service";
import { QuerySelectorService } from "./services/query-selector.service";
import { Step } from "./models/step";
import { JourneyDialogComponent } from './components/journey-dialog/journey-dialog.component';
import { MessagingService } from "./services/messaging.service";
declare let chrome: any;
@Component({
  selector: 'onBoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MdDialog, PouchDBService, DownloadService, CommonService, QuerySelectorService, { provide: Window, useValue: window }, MessagingService]
})
export class AppComponent implements OnInit {

  journeyStep: Step;
  lastDialogResult: string;
  config: MdDialogConfig;
  msgPort: any;

  constructor( @Inject(DOCUMENT) private document: Document, @Inject(Window) private _window: Window, private _dialog: MdDialog, private _pouchDbService: PouchDBService
    , private _downloadService: DownloadService, private _commonService: CommonService, private _docQuerySVC: QuerySelectorService, private _msgSVC: MessagingService) { }

  ngOnInit(): void {
    let msg = this._msgSVC.receiveMessage();
    msg.then((port)=>{
      console.log("successfully connected to background from conent",port);
    });
    msg.catch(error=>console.error("unable to connect the background",error));
  }

  private openDialog() {
    let selection = this._window.getSelection();
    this.journeyStep = new Step();
    this.journeyStep.title = selection.toString();
    let range = selection.getRangeAt(0);
    this.journeyStep.target = this._docQuerySVC.generateSelector(range.commonAncestorContainer.parentElement);
    this.config = new MdDialogConfig();
    this.config.data = this.journeyStep;
    this.config.disableClose = true;
    let dialogRef = this._dialog.open(JourneyDialogComponent, this.config);
    dialogRef.afterClosed().subscribe((result: Step | string) => {
      if (result !== null && result !== "cancel") {
        let response = this._msgSVC.sendMessage<Step>("newJourney", this.journeyStep);
        response.then((result) => {
          console.log("response received from background as save to db ", result);
        });
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
