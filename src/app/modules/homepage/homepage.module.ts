import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './component/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomepageRoutes } from './homepage.routes';
import { CurrentQuoteComponent } from './component/current-quote/current-quote.component';
import { SentimentComponent } from './component/sentiment/sentiment.component';



@NgModule({
  declarations: [
    HomepageComponent,
    CurrentQuoteComponent,
    SentimentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HomepageRoutes)
  ]
})
export class HomepageModule { }
