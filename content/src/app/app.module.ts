import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { JourneyDialogComponent } from './components/journey-dialog/journey-dialog.component';
import {DownloadService} from './services/download.service';

@NgModule({
  declarations: [
    AppComponent,
    JourneyDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  entryComponents:[JourneyDialogComponent],
  providers: [DownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    let rootDiv = document.createElement('onBoard-root');
    rootDiv.textContent = ".....Loading!!!";
    document.body.appendChild(rootDiv);
  }
}
