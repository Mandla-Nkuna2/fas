import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuelconsumptexcmajeqComponent } from './fuelconsumptexcmajeq.component';

describe('FuelconsumptexcmajeqComponent', () => {
  let component: FuelconsumptexcmajeqComponent;
  let fixture: ComponentFixture<FuelconsumptexcmajeqComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelconsumptexcmajeqComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuelconsumptexcmajeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
