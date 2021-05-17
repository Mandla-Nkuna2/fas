import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OilconsumptvehicleComponent } from './oilconsumptvehicle.component';

describe('OilconsumptvehicleComponent', () => {
  let component: OilconsumptvehicleComponent;
  let fixture: ComponentFixture<OilconsumptvehicleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OilconsumptvehicleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OilconsumptvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
