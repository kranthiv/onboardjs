import { Component, OnInit } from '@angular/core';
import { StepModel } from "../step/step.model";

@Component({
  selector: 'onboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  step: StepModel;
  constructor() {
    this.step = new StepModel();
    this.step.content = "test contnet";
    this.step.target = "test Target";
    this.step.placement = "right";
    this.step.title = "Test title";
    this.step.journeyId = "Test jorney";
  }

  ngOnInit() {
  }

}
