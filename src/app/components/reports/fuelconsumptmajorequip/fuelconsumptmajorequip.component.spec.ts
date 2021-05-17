import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuelconsumptmajorequipComponent } from './fuelconsumptmajorequip.component';

describe('FuelconsumptmajorequipComponent', () => {
  let component: FuelconsumptmajorequipComponent;
  let fixture: ComponentFixture<FuelconsumptmajorequipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelconsumptmajorequipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuelconsumptmajorequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
