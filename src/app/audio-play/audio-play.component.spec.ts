import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayComponent } from './audio-play.component';

describe('AudioPlayComponent', () => {
  let component: AudioPlayComponent;
  let fixture: ComponentFixture<AudioPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
