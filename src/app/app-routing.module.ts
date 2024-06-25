import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioPlayComponent } from './audio-play/audio-play.component';
import { UploadedAudioPlayComponent } from './uploaded-audio-play/uploaded-audio-play.component';

const routes: Routes = [
  {path: 'audio', component : AudioPlayComponent},
  {path: 'file', component: UploadedAudioPlayComponent},
  {path:'', redirectTo: 'file', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
