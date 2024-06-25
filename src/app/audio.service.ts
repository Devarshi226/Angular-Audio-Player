import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  // loadAudio(filePath: string) {
  //   console.log("loadAudio" , filePath)
  //   this.audio.src = filePath;
  //   this.audio.load();
  // }

  loadAudio(filePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.audio.src = filePath;
      this.audio.load();
      this.audio.oncanplaythrough = () => resolve();
      this.audio.onerror = (error) => reject(error);
    });
  }

  playAudio(): Promise<void> {
    this.audio.loop = true;
    return this.audio.play();

  }

  setLoop(loop: boolean) {
    this.audio.loop = loop;
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;

    //max-duration
    if (this.maxDurationTimeout) {
      clearTimeout(this.maxDurationTimeout);
    }
  }



  isPlaying(): boolean {
    return !this.audio.paused;
  }



  //off audio base on time
  private maxDurationTimeout: any;

  setMaxDuration(seconds: number) {
    if (this.maxDurationTimeout) {
      clearTimeout(this.maxDurationTimeout);
    }
    this.maxDurationTimeout = setTimeout(() => {
      this.stopAudio();
    }, seconds * 1000);
  }

}
