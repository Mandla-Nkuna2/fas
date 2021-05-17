import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RunningcostsmetlesequipComponent } from './runningcostsmetlesequip.component';

describe('RunningcostsmetlesequipComponent', () => {
  let component: RunningcostsmetlesequipComponent;
  let fixture: ComponentFixture<RunningcostsmetlesequipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningcostsmetlesequipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunningcostsmetlesequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
