
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { forkJoin, map, Subject, switchMap, takeUntil } from 'rxjs';
import { Quote, TypeStock } from 'src/app/core/model/quote.interface';
import { ISymbol, ISymbolLookup } from 'src/app/core/model/search.interface';
import { HttpService } from 'src/app/core/service/http.service';




@Component({
  selector: 'app-current-quote',
  templateUrl: './current-quote.component.html',
  styleUrls: ['./current-quote.component.css']
})
export class CurrentQuoteComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  @Input()
  symbol!: ISymbol;

  typeStock: TypeStock = {} as TypeStock;
  isLoad = false;
  constructor(private httpService: HttpService) { }
  

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.isLoad = false;
      this.loadInfo();
  }

 /* ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('this.isSortChanged(changes): ' + this.isListaChanged(changes))
    if (changes['lista'] && changes['lista'].firstChange) {
      this.reloadAllData(this.lista);
    }
    else {
      if (this.isListaChanged(changes)) {
        let elementoAggiunto = changes['lista'].currentValue.filter((x: string) => !changes['lista'].previousValue.includes(x));
        console.log('ELEMENTO AGIUNTO: ' + elementoAggiunto);
        //this.addElement(elementoAggiunto);
      }
    }


  }*/

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
 

 /*isListaChanged(changes: SimpleChanges) {
    return (
      changes['lista'] &&
      changes['lista'].currentValue &&
      changes['lista'].previousValue &&
      (changes['lista'].currentValue.length !== changes['lista'].previousValue.length)
    );
  }*/


 /* reloadAllData(lista: string[]) {
  this.listaQuote = [];
  console.log(lista);

  this.lista?.forEach(symbol => {
    forkJoin(
      [
        this.httpService.getQuote(symbol),
        this.httpService.getSymbolLookup(symbol)
      ]
    ).pipe(
      takeUntil(this.destroy$),
    ).subscribe( result => {
      this.listaQuote?.push(result[0]);
      console.log(result[0]);
    });

   });

    
  }*/

  loadInfo() {
    this.typeStock = {} as TypeStock;

    this.httpService.getQuote(this.symbol.symbol).pipe(
      takeUntil(this.destroy$),
    ).subscribe( result => {
      this.typeStock.quote = result;
      this.typeStock.name = this.symbol.description;
      this.isLoad = true;
    });
  }

}
