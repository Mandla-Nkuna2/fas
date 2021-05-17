import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OilconsumptmajequipComponent } from './oilconsumptmajequip.component';

describe('OilconsumptmajequipComponent', () => {
  let component: OilconsumptmajequipComponent;
  let fixture: ComponentFixture<OilconsumptmajequipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OilconsumptmajequipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OilconsumptmajequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
