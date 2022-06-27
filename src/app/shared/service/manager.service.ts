import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  addSymbolToList(symbol: string) {
     var listaCorrente = JSON.parse(localStorage.getItem("listSymbolStock") ?? "[]");
    console.log(listaCorrente);


    //vedo se symbol già esiste
    var isExistingId = listaCorrente.indexOf(symbol) > -1;

    if (!isExistingId) {
      listaCorrente.push(symbol);
      localStorage.setItem("listSymbolStock", JSON.stringify(listaCorrente));
    }
  }

  getSymbolList(): string[] {
    return JSON.parse(localStorage.getItem("listSymbolStock") ?? "[]");
  }

}
