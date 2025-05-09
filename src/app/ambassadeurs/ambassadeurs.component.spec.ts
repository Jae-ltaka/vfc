import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadeursComponent } from './ambassadeurs.component';

describe('AmbassadeursComponent', () => {
  let component: AmbassadeursComponent;
  let fixture: ComponentFixture<AmbassadeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbassadeursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmbassadeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
