import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-current-quote',
  templateUrl: './current-quote.component.html',
  styleUrls: ['./current-quote.component.css']
})
export class CurrentQuoteComponent implements OnInit, OnChanges {

  @Input() lista: string[] | undefined;
  constructor() { }
 

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
