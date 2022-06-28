import { Injectable } from '@angular/core';
import { ISymbol } from 'src/app/core/model/search.interface';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  symbolList: ISymbol[] = [];
  constructor() { }

  //aggiungo il simbolo in testa prima i più nuovi
  addSymbolToList(symbol: ISymbol) {
     var listaCorrente = JSON.parse(localStorage.getItem("listSymbolStock") ?? "[]");
     listaCorrente.unshift(symbol);
     localStorage.setItem("listSymbolStock", JSON.stringify(listaCorrente));
 
  }

  getSymbolList(): ISymbol[] {
    return JSON.parse(localStorage.getItem("listSymbolStock") ?? "[]");
  }

  deleteSymbolToList(symbol: string) {
    var listaCorrente = JSON.parse(localStorage.getItem("listSymbolStock") ?? "[]");
    listaCorrente.forEach((element: ISymbol, index: number)=>{
      if(element.symbol === symbol) {
        console.log(index);
        listaCorrente.splice(index,1);
        console.log(listaCorrente);
      }
       
   });
   if (listaCorrente.length > 0) {
    localStorage.setItem("listSymbolStock", JSON.stringify(listaCorrente));
   }
   else {
    localStorage.removeItem("listSymbolStock");
   }

  }

}
