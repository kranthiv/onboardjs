import { Component, OnInit, Inject, Optional } from '@angular/core';
import { Step } from "../../models/step";
import { PlacementDirection } from "../../models/placement-direction";
import { MdDialogRef,MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-journey-dialog',
  templateUrl: './journey-dialog.component.html',
  styleUrls: ['./journey-dialog.component.scss']
})
export class JourneyDialogComponent implements OnInit {

  journeyStep: Step;
  placements: Array<PlacementDirection>;
  selectedPlacement: PlacementDirection;

  constructor( @Optional() public dialogRef: MdDialogRef<JourneyDialogComponent>,@Inject(MD_DIALOG_DATA) public data:any){

  }

  ngOnInit() {
    this.placements = new Array<PlacementDirection>();
    this.placements.push("right");
    this.placements.push("left");
    this.placements.push("top");
    this.placements.push("bottom");
  }
}
