import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonProductComponent } from './skeleton-product.component';

describe('SkeletonProductComponent', () => {
  let component: SkeletonProductComponent;
  let fixture: ComponentFixture<SkeletonProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
