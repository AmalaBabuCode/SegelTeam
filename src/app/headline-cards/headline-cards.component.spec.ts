import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineCardsComponent } from './headline-cards.component';

describe('HeadlineCardsComponent', () => {
  let component: HeadlineCardsComponent;
  let fixture: ComponentFixture<HeadlineCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
