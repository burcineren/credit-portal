import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsListComponent } from './credits-list.component';

describe('CreditsListComponent', () => {
  let component: CreditsListComponent;
  let fixture: ComponentFixture<CreditsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditsListComponent]
    });
    fixture = TestBed.createComponent(CreditsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
