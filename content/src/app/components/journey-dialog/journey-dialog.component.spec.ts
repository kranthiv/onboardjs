import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyDialogComponent } from './journey-dialog.component';

describe('JourneyDialogComponent', () => {
  let component: JourneyDialogComponent;
  let fixture: ComponentFixture<JourneyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
