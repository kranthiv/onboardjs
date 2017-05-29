import { Component, OnInit, HostBinding, HostListener,Inject } from '@angular/core';
import {Router} from '@angular/router';
import { Journey } from "app/models/journey";

@Component({
  selector: 'onboard-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  providers:[{ provide: Window, useValue: window }]
})
export class FileUploaderComponent implements OnInit {
  journeyCount: number = 0;
  json:string;
  constructor(private _router:Router, @Inject(Window) private _window: Window) { 
  }

  ngOnInit() {
  }

  OnChange($event: any): void {
    let file: File = $event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onloadend = () => {
        this.json = reader.result;
        let journey = JSON.parse(this.json);
        this.journeyCount = journey.steps.length;
      }
    }
  }
  onClick(): boolean {
    this._window.sessionStorage.setItem("journey",this.json);
    this._router.navigate(['journey'],{queryParams:{query:'journey'}});
    return true;
  }
}
