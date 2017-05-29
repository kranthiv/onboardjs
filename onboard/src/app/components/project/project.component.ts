import { Component, OnInit } from '@angular/core';
import { ProjectModel } from './project.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'onboard-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: ProjectModel;
  constructor() {
    this.project = new ProjectModel();
    this.project.title = "Test Title";
    this.project.journeyCount = 10;
    this.project.Description = "test description";
    this.project.projectId ="1";
   }

  ngOnInit() {
  }

}
