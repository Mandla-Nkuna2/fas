import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverheadexpenditureComponent } from './overheadexpenditure.component';

describe('OverheadexpenditureComponent', () => {
  let component: OverheadexpenditureComponent;
  let fixture: ComponentFixture<OverheadexpenditureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverheadexpenditureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverheadexpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
