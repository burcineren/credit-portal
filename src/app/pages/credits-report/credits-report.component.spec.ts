import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsReportComponent } from './credits-report.component';

describe('CreditsReportComponent', () => {
  let component: CreditsReportComponent;
  let fixture: ComponentFixture<CreditsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditsReportComponent]
    });
    fixture = TestBed.createComponent(CreditsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
