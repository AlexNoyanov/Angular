import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponentComponent } from './b-component.component';

describe('BComponentComponent', () => {
  let component: BComponentComponent;
  let fixture: ComponentFixture<BComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
