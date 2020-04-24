import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForBookComponent } from './search-for-book.component';

describe('SearchForBookComponent', () => {
  let component: SearchForBookComponent;
  let fixture: ComponentFixture<SearchForBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
