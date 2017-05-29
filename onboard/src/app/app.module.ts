import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutesModule } from "./app-routes/app-routes.module";
import { ChromeService } from './services/chrome.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectComponent } from './components/project/project.component';
import { StepComponent } from './components/step/step.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { JourneyComponent } from './components/journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    ProjectComponent,
    StepComponent,
    ProjectEditComponent,
    ProjectCreateComponent,
    FileUploaderComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [ChromeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _chromeSVC: ChromeService) {
    // this._chromeSVC.registerBrowserClick();
  }
}
