import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedAudioPlayComponent } from './uploaded-audio-play.component';

describe('UploadedAudioPlayComponent', () => {
  let component: UploadedAudioPlayComponent;
  let fixture: ComponentFixture<UploadedAudioPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedAudioPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedAudioPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
