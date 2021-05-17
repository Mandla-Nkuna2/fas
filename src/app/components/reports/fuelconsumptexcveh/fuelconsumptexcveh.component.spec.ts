import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuelconsumptexcvehComponent } from './fuelconsumptexcveh.component';

describe('FuelconsumptexcvehComponent', () => {
  let component: FuelconsumptexcvehComponent;
  let fixture: ComponentFixture<FuelconsumptexcvehComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelconsumptexcvehComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuelconsumptexcvehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
