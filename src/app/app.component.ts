import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'stock-tracker-application';
  constructor(private translate: TranslateService) {

  }

  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    this.translate.setDefaultLang('it');
    this.translate.use('it');
  }



}
