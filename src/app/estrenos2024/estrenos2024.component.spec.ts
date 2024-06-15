import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estrenos2024Component } from './estrenos2024.component';

describe('Estrenos2024Component', () => {
  let component: Estrenos2024Component;
  let fixture: ComponentFixture<Estrenos2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estrenos2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Estrenos2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
