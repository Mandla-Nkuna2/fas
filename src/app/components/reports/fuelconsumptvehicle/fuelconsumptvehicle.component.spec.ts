import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuelconsumptvehicleComponent } from './fuelconsumptvehicle.component';

describe('FuelconsumptvehicleComponent', () => {
  let component: FuelconsumptvehicleComponent;
  let fixture: ComponentFixture<FuelconsumptvehicleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelconsumptvehicleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuelconsumptvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
