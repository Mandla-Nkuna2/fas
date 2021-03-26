import { Component, OnInit } from '@angular/core';
import {JobCard} from '../../models/JobCard.model';
@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
})
export class JobcardPage implements OnInit {
  jobCard: JobCard;
  constructor() { 
    this.jobCard = new JobCard();
  }

  ngOnInit() {
    
    console.log()
  }
  onchange()  {
    console.log("date")
    console.log(this.jobCard.reportedDate);
  }

}
