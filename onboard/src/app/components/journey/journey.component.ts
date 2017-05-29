import { Component, OnInit,Inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Journey } from "app/models/journey";

@Component({
  selector: 'onboard-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss'],
  providers:[{ provide: Window, useValue: window }]
})
export class JourneyComponent implements OnInit {
  json:string;
  journey:Journey;
  constructor(private _route:ActivatedRoute, @Inject(Window) private _window: Window) { 
    this._route.queryParams.subscribe(params=>{
      let query = params['query'] as string;
      this.json = this._window.sessionStorage.getItem(query);
      this.journey = JSON.parse(this.json);
      console.log("journey",this.journey);
    });
  }

  ngOnInit() {
  }

}
