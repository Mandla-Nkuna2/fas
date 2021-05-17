import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OilstoreledgersummComponent } from './oilstoreledgersumm.component';

describe('OilstoreledgersummComponent', () => {
  let component: OilstoreledgersummComponent;
  let fixture: ComponentFixture<OilstoreledgersummComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OilstoreledgersummComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OilstoreledgersummComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
