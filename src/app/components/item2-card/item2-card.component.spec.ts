import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item2CardComponent } from './item2-card.component';

describe('Item2CardComponent', () => {
  let component: Item2CardComponent;
  let fixture: ComponentFixture<Item2CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item2CardComponent]
    });
    fixture = TestBed.createComponent(Item2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
