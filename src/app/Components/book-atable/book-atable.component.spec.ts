import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAtableComponent } from './book-atable.component';

describe('BookAtableComponent', () => {
  let component: BookAtableComponent;
  let fixture: ComponentFixture<BookAtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
