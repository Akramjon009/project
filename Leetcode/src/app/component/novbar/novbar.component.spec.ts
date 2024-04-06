import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovbarComponent } from './novbar.component';

describe('NovbarComponent', () => {
  let component: NovbarComponent;
  let fixture: ComponentFixture<NovbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
