import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
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


  constructor(private managerService: ManagerService, private httpService: HttpService) { }
 

  ngOnInit(): void {
    this.caricaDatiPregressi();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }



  caricaDatiPregressi() {
    this.symbolList = this.managerService.getSymbolList();
  }


  loadSymbolIntoLocalStorage(symbol: string) {
    this.httpService.getSymbolLookup(symbol).pipe(
      takeUntil(this.destroy$),
    ).subscribe ( res => {
        if (res.count > 0) {
          let resultArray = res.result;
          let stockSelezionato = resultArray.filter(x => x.symbol=symbol.toUpperCase());
          if (stockSelezionato) {
            this.managerService.addSymbolToList(stockSelezionato[0]);
            this.symbolList = this.managerService.getSymbolList();
            this.symbolForm.setValue('');
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

  verificaSimbolo() {
    if (this.symbolForm.invalid) {
      this.symbolForm.markAllAsTouched();
      return;
    }
    else {
      let symbol: string = this.symbolForm.value;
       //vedo se symbol già esiste
       var isExistingId = this.symbolList.find(x => x.symbol === symbol.toUpperCase());

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



}
