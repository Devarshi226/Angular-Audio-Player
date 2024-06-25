import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-audio-play',
  templateUrl: './audio-play.component.html',
  styleUrls: ['./audio-play.component.scss']
})
export class AudioPlayComponent implements OnInit {
  isInitialized = false;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    // Initial setup if needed
  }

  initializeAudio(): void {

    this.audioService.loadAudio('assets/siren.wav');
    this.audioService.setLoop(true);
    this.isInitialized = true;
    this.checkCondition();
  }

  stopAudio(): void {
    this.audioService.stopAudio();
  }



  checkCondition(): void {
    setInterval(() => {
      if (this.conditionToPlayAudio()) {
        if (!this.audioService.isPlaying()) {
          console.log('Playing audio...');
          this.audioService.playAudio().catch(error => console.error('Audio play failed:', error));
        }
      } else {
        if (this.audioService.isPlaying()) {
          console.log('Stopping audio...');
          this.audioService.stopAudio();
        }
      }
    }, 1000); // Check condition every second
  }

  conditionToPlayAudio(): boolean {
    const currentTime = new Date();
    return currentTime.getMinutes() % 2 === 0; // Example condition: current minute is even
  }
}
