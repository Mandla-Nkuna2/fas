import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubvehlocDrvComponent } from './subvehloc-drv.component';

describe('SubvehlocDrvComponent', () => {
  let component: SubvehlocDrvComponent;
  let fixture: ComponentFixture<SubvehlocDrvComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubvehlocDrvComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubvehlocDrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
