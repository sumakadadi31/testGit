import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewFormComponent } from './product-review-form.component';

describe('ProductReviewFormComponent', () => {
  let component: ProductReviewFormComponent;
  let fixture: ComponentFixture<ProductReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
