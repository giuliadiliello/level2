import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  text: string = this.translateService.instant('alert');
  constructor(public activeModal: NgbActiveModal,  private translateService: TranslateService) {}

  ngOnInit(): void {
  }

  

}
