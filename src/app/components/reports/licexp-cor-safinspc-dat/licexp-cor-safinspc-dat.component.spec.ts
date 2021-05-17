import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicexpCorSafinspcDatComponent } from './licexp-cor-safinspc-dat.component';

describe('LicexpCorSafinspcDatComponent', () => {
  let component: LicexpCorSafinspcDatComponent;
  let fixture: ComponentFixture<LicexpCorSafinspcDatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LicexpCorSafinspcDatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicexpCorSafinspcDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
