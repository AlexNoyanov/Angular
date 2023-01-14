import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTestComponent } from './zone-test.component';

describe('ZoneTestComponent', () => {
  let component: ZoneTestComponent;
  let fixture: ComponentFixture<ZoneTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
