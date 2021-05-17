import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissingdailyopsrecComponent } from './missingdailyopsrec.component';

describe('MissingdailyopsrecComponent', () => {
  let component: MissingdailyopsrecComponent;
  let fixture: ComponentFixture<MissingdailyopsrecComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingdailyopsrecComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissingdailyopsrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
