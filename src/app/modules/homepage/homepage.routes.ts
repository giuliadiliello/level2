import { Route } from "@angular/router";
import { HomepageComponent } from "./component/homepage.component";
import { SentimentComponent } from "./component/sentiment/sentiment.component";



export const HomepageRoutes: Route[] = [
    {
      path: '',
      component: HomepageComponent
    },
    {
      path: 'sentiment/:symbol',
      component: SentimentComponent
    }
  ];
  