import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RunningcostsmajequipComponent } from './runningcostsmajequip.component';

describe('RunningcostsmajequipComponent', () => {
  let component: RunningcostsmajequipComponent;
  let fixture: ComponentFixture<RunningcostsmajequipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningcostsmajequipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunningcostsmajequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
