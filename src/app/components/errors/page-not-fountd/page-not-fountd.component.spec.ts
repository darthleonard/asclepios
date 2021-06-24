import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFountdComponent } from './page-not-fountd.component';

describe('PageNotFountdComponent', () => {
  let component: PageNotFountdComponent;
  let fixture: ComponentFixture<PageNotFountdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFountdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFountdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
