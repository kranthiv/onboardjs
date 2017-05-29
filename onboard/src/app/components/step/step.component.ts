import { Component, OnInit, Input } from '@angular/core';
import { StepModel } from './step.model';

@Component({
  selector: 'onboard-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() step: StepModel;
  placements:string[];
  constructor() { 
    this.placements = ["right","left","top","bottom"];
  }

  ngOnInit() {
  }

}
