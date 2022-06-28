import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  public numberOfRequests: number = 0;
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  handleRequest = (state: boolean = false): void => {
    this.numberOfRequests = (state) ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showSpinner.next(this.numberOfRequests > 0);
  };
}
