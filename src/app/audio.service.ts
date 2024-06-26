import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio: HTMLAudioElement;
  private audioState: 'playing' | 'paused' | 'stopped';
  audioStateChanged: Subject<'playing' | 'paused' | 'stopped'> = new Subject();

  constructor() {
    this.audio = new Audio();
    this.audioState = 'stopped';
    this.audio.onended = () => {
      this.audioState = 'stopped';
      this.audioStateChanged.next(this.audioState);
    };
    this.audio.onpause = () => {
      if (!this.audio.ended) {
        this.audioState = 'paused';
        this.audioStateChanged.next(this.audioState);
      }
    };
    this.audio.onplay = () => {
      this.audioState = 'playing';
      this.audioStateChanged.next(this.audioState);
    };
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

  pauseAudio(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
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

  setVolume(volume: number): void {
    this.audio.volume = volume;
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
