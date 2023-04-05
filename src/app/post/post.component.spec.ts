import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTComponent } from './post.component';

describe('PostComponent', () => {
  let component: POSTComponent;
  let fixture: ComponentFixture<POSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
