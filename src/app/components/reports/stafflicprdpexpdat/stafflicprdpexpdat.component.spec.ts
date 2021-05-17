import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StafflicprdpexpdatComponent } from './stafflicprdpexpdat.component';

describe('StafflicprdpexpdatComponent', () => {
  let component: StafflicprdpexpdatComponent;
  let fixture: ComponentFixture<StafflicprdpexpdatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StafflicprdpexpdatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StafflicprdpexpdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
