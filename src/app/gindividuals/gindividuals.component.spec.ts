import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GindividualsComponent } from './gindividuals.component';

describe('GindividualsComponent', () => {
  let component: GindividualsComponent;
  let fixture: ComponentFixture<GindividualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GindividualsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GindividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
