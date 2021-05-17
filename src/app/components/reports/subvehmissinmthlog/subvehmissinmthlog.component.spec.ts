import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubvehmissinmthlogComponent } from './subvehmissinmthlog.component';

describe('SubvehmissinmthlogComponent', () => {
  let component: SubvehmissinmthlogComponent;
  let fixture: ComponentFixture<SubvehmissinmthlogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubvehmissinmthlogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubvehmissinmthlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
