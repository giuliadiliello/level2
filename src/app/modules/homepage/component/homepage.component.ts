import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ManagerService } from 'src/app/shared/service/manager.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  symbolList: string[] | undefined;

  symbol = new FormControl('', 
  [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern('[a-zA-Z ]*')]);

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    console.log(this.symbol);
    this.symbolList = this.managerService.getSymbolList();
  }

  loadSymbolIntoLocalStorage() {
    let symbol: string = this.symbol.value;
    if (this.symbol.invalid) {
      return;
    }
    else {
      this.managerService.addSymbolToList(symbol.toUpperCase());
      this.symbolList = this.managerService.getSymbolList();
    }
  }

}
