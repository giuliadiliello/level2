import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader.service';



@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  spinnerActive: boolean = true;


  constructor(public spinnerService: LoaderService) {
    this.spinnerService.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  ngOnInit(): void {
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };

}
