import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ISymbol } from 'src/app/core/model/search.interface';
import { ISentiment, ISentimentResponse } from 'src/app/core/model/sentiment.interface';
import { HttpService } from 'src/app/core/service/http.service';
import { ManagerService } from 'src/app/shared/service/manager.service';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  symbol: string;
  sentiment: ISentiment[] = [];
  isLoad: boolean = false;
  stockSelezionato: ISymbol | undefined;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private route: ActivatedRoute, 
    private httpService: HttpService,
    public datepipe: DatePipe,
    private managerService: ManagerService,
    private router:Router) { 
    this.symbol = this.route.snapshot.params['symbol'];
  }
 

  ngOnInit(): void {
   var toDate = new Date();
   var toDateString = this.datepipe.transform(toDate, 'yyyy-MM-dd');
   console.log(toDateString);
    var fromDate = toDate.setMonth(toDate.getMonth() - 2);
    var fromDateString = this.datepipe.transform(fromDate, 'yyyy-MM-dd');
    console.log(fromDateString);

    if (fromDateString && toDateString) {
      this.httpService.getSentiment(this.symbol, fromDateString, toDateString).pipe(
        takeUntil(this.destroy$)
      ).subscribe((res: ISentimentResponse) => {
          console.log(this.symbol);
          this.sentiment = res.data;
          this.stockSelezionato = this.managerService.getSymbolList().find(x => x.symbol==this.symbol.toUpperCase());
          console.log(this.stockSelezionato);
          this.isLoad = true;
      });
  
    }
 
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

getMonthName = (numeroMese: number): string => {
    const monthNames = [ 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre' ];
    return monthNames[numeroMese];
  }

  back() {
    this.router.navigate(['']);
  }

}

