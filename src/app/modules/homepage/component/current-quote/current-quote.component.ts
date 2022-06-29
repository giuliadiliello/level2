
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TypeStock } from 'src/app/core/model/quote.interface';
import { ISymbol } from 'src/app/core/model/search.interface';
import { HttpService } from 'src/app/core/service/http.service';
import { faArrowDown, faArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-current-quote',
  templateUrl: './current-quote.component.html',
  styleUrls: ['./current-quote.component.css']
})
export class CurrentQuoteComponent implements OnInit, OnDestroy {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faXmark = faXmark;
  private destroy$ = new Subject();

  @Input()
  symbol!: ISymbol;

  @Output()
  eliminaEvento: EventEmitter<string> = new EventEmitter<string>();


  typeStock: TypeStock = {} as TypeStock;
  isLoad = false;
  constructor(
    private httpService: HttpService,
    private modalService: NgbModal,
    private router:Router
   ) { }
  

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    /* quando aggiungo un simbolo riaggiorno anche le vecchie quotazioni */
      this.isLoad = false;
      this.loadInfo();
  }



  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
 


  loadInfo() {
    this.typeStock = {} as TypeStock;

    this.httpService.getQuote(this.symbol.symbol).pipe(
      takeUntil(this.destroy$),
    ).subscribe( result => {
      this.typeStock.quote = result;
      this.typeStock.name = this.symbol.description;
      this.typeStock.symbol = this.symbol.symbol;
      this.isLoad = true;
    });
  }

  confermaEliminaElemento(typeStock: TypeStock) {

    const modalRef = this.modalService.open(ModalComponent).result.then(result => {
      if (result === 'OK') {
        this.eliminaEvento.emit(typeStock.symbol);
      }
    });
    console.log(modalRef);

  }

  gotoSentimentPage(typeStock: TypeStock) {
    this.router.navigate(['sentiment', typeStock.symbol]);

  }



}
