import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Items2Component } from './items2.component';

describe('Items2Component', () => {
  let component: Items2Component;
  let fixture: ComponentFixture<Items2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Items2Component]
    });
    fixture = TestBed.createComponent(Items2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
