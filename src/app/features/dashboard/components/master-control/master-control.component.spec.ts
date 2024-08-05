import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterControlComponent } from './master-control.component';

describe('MasterControlComponent', () => {
  let component: MasterControlComponent;
  let fixture: ComponentFixture<MasterControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
