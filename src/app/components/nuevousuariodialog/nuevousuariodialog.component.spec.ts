import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevousuariodialogComponent } from './nuevousuariodialog.component';

describe('NuevousuariodialogComponent', () => {
  let component: NuevousuariodialogComponent;
  let fixture: ComponentFixture<NuevousuariodialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevousuariodialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevousuariodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
