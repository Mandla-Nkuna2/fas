import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissingmonthlylogsComponent } from './missingmonthlylogs.component';

describe('MissingmonthlylogsComponent', () => {
  let component: MissingmonthlylogsComponent;
  let fixture: ComponentFixture<MissingmonthlylogsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingmonthlylogsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissingmonthlylogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
