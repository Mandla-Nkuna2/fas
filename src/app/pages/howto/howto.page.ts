import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import data from './metadata.json';
@Component({
  selector: 'app-howto',
  templateUrl: './howto.page.html',
  styleUrls: ['./howto.page.scss'],
})
export class HowtoPage implements OnInit {
  vidObjs = data;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.vidObjs.forEach((elm) => {
      elm.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(elm.url);
    });
  }
}
