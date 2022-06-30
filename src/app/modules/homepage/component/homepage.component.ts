import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, Observable, OperatorFunction, Subject, takeUntil } from 'rxjs';
import { ISymbol } from 'src/app/core/model/search.interface';
import { HttpService } from 'src/app/core/service/http.service';
import { ManagerService } from 'src/app/shared/service/manager.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();
  symbolList: ISymbol[] = [];
  symbolForm = new FormControl('', 
  [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern('[a-zA-Z ]*')]);


  constructor(
    private managerService: ManagerService, 
    private httpService: HttpService,
    private toastrService: ToastrService) { }
 

  ngOnInit(): void {
    this.caricaDatiPregressi();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  /* Al reload della pagina se ci sono simboli del localStorage ricarico le quotazioni aggiornate e li faccio
  * vedere nella lista, utilizzando il metodo ngOnChange del componente figlio CurrentQuoteComponent  */
  caricaDatiPregressi() {
    this.symbolList = this.managerService.getSymbolList();
  }




  /* Funzine che verifica che il simbolo inserito dall'utente non sia già presente in localStorage
  * nel caso già esista sarà fatto vedere un messaggio di errore, altrimenti si prosegue con la funzine  loadSymbolIntoLocalStorage*/
  verificaSimbolo() {
    if (this.symbolForm.invalid) {
      this.symbolForm.markAllAsTouched();
      return;
    }
    else {
      let symbol: string = this.symbolForm.value;
       //vedo se symbol già esiste
       var isExistingId = this.symbolList.find(x => x.symbol == symbol.toUpperCase());

       //se non esiste recupero la descrizione e aggiorno la lista
       if (!isExistingId) {
        this.loadSymbolIntoLocalStorage(symbol.toUpperCase());
       }
       else {
        this.symbolForm.setErrors({'isSimbolDuplicated' : true});
        this.symbolForm.markAllAsTouched();
        return;
   
       }
    }
  }


    /* Funzione che fa la chiamata per reperire la descrizione della compagnia. Filtra i risultati ottenuti
  *  cercando esattamente che il simbolo inserito sia uguale al campo symbol. Inserisco quindi nel localStorage
  * direttamente l'oggeto ottenuto dalla chiamata getSymbolLookup così ho già la descrizione della compagnia  */
    loadSymbolIntoLocalStorage(symbol: string) {
      this.httpService.getSymbolLookup(symbol).pipe(
        takeUntil(this.destroy$),
      ).subscribe ( res => {
          if (res.count > 0) {
            let resultArray = res.result;
            let stockSelezionato = resultArray.find(x => x.symbol == symbol.toUpperCase());
            if (stockSelezionato) {
              this.managerService.addSymbolToList(stockSelezionato);
              this.symbolList = this.managerService.getSymbolList();
              this.symbolForm.setValue('');
              this.symbolForm.reset();
              setTimeout(() => {
                this.toastrService.success('Stock added!', 'Success!', { positionClass: 'toast-top-center'});
              }, 500);
           
            }
            else {
              this.symbolForm.setErrors({'isSimbolNotFound' : true});
              this.symbolForm.markAllAsTouched();
              return;
            }
          }
          else {
            this.symbolForm.setErrors({'isSimbolNotFound' : true});
            this.symbolForm.markAllAsTouched();
            return;
          }
      })
    }


  /* Funzione che elimina dal localStorage il simbolo inserito */
  eliminaStock($event: string) {
     this.managerService.deleteSymbolToList($event);
     this.toastrService.success('Stock deleted!', 'Success!', { positionClass: 'toast-top-center'});
     this.caricaDatiPregressi();

  }


  /**Questa è la funzione per l'autocomplete che si potrebbe utilizzare.
   * Ma l'api api/v1/search data è troppo lenta (probabilmente è una like) e non restituisce
   * come dovrebbe la lista. Ad esempio se metto T mi restituisce 45 risultati
   * tra i quali neanche c'è TSLA. Serviebbe una api iniziale più veloce che carica la lista completa dei soli simboli
   * vedi ad esempio https://finance.yahoo.com/quote/AMZN.NE?p=AMZN.NE&.tsrc=fin-srch
   */
  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(res => res.length > 0),
    concatMap(resp => {
      return this.httpService.getSymbolLookup(resp.toUpperCase()).pipe(
        takeUntil(this.destroy$),
        map(resp2 => {
          return resp2.result.map(a => a.symbol)
        })
      )
    })
  )


}
