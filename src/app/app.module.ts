import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioPlayComponent } from './audio-play/audio-play.component';
import { UploadedAudioPlayComponent } from './uploaded-audio-play/uploaded-audio-play.component';
// import { NgxAudioPlayerModule } from 'ngx-audio-player';


@NgModule({
  declarations: [
    AppComponent,
    AudioPlayComponent,
    UploadedAudioPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
