import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppinionAboutMeComponent } from './oppinion-about-me.component';

describe('OppinionAboutMeComponent', () => {
  let component: OppinionAboutMeComponent;
  let fixture: ComponentFixture<OppinionAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OppinionAboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OppinionAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
