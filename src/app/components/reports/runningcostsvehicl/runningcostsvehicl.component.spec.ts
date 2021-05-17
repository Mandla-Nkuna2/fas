import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RunningcostsvehiclComponent } from './runningcostsvehicl.component';

describe('RunningcostsvehiclComponent', () => {
  let component: RunningcostsvehiclComponent;
  let fixture: ComponentFixture<RunningcostsvehiclComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningcostsvehiclComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunningcostsvehiclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
