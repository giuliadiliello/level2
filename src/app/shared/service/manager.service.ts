import { Injectable } from '@angular/core';
import { ISymbol } from 'src/app/core/model/search.interface';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  addSymbolToList(symbol: ISymbol) {
     var listaCorrente = JSON.parse(localStorage.getItem("listSymbolStock") ?? "[]");
     listaCorrente.push(symbol);
     localStorage.setItem("listSymbolStock", JSON.stringify(listaCorrente));
 
  }

  getSymbolList(): ISymbol[] {
    return JSON.parse(localStorage.getItem("listSymbolStock") ?? "[]");
  }

}
