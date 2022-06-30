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
    /* Recupero il parametro con il simbolo dalla rotta */
    this.symbol = this.route.snapshot.params['symbol'];
  }
 

  ngOnInit(): void {
    this.loadInfoLastThreeMonth();
  
  }


  /* Funzione che recuper le informazioni di quotazione relative agli ultimi tre mesi a partire
  *  dal mese corrente */
  loadInfoLastThreeMonth() {
    var toDate = new Date();
    var toDateString = this.datepipe.transform(toDate, 'yyyy-MM-dd');
    var fromDate = toDate.setMonth(toDate.getMonth() - 2);
    var fromDateString = this.datepipe.transform(fromDate, 'yyyy-MM-dd');
 
     if (fromDateString && toDateString) {
       this.httpService.getSentiment(this.symbol, fromDateString, toDateString).pipe(
         takeUntil(this.destroy$)
       ).subscribe((res: ISentimentResponse) => {
           this.sentiment = res.data;
           this.stockSelezionato = this.managerService.getSymbolList().find(x => x.symbol==this.symbol.toUpperCase());
           this.isLoad = true;
       },
       error => {
      //   console.log(error);
       });
   
     }
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  /* Metodo che restituisce il nome del mese dato il numero */
  getMonthName = (numeroMese: number): string => {
      const monthNames = [ 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
      'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre' ];
      return monthNames[numeroMese];
  }

  back() {
      this.router.navigate(['']);
  }

}

