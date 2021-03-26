import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuelbrowsenoilctrlPage } from './fuelbrowsenoilctrl.page';

describe('FuelbrowsenoilctrlPage', () => {
  let component: FuelbrowsenoilctrlPage;
  let fixture: ComponentFixture<FuelbrowsenoilctrlPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelbrowsenoilctrlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuelbrowsenoilctrlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
