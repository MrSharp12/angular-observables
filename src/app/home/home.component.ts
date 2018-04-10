import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;


  constructor() { }

  ngOnInit() {
    //this should emit a new piece of data every second
    //the maps through and doubles the number
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      );
    //here we are saving the subscriptions 
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    //this observer will be the final observer
    //we pass it into the annoymous function
    //which will make up our observable
    //in order to make observer work
    //you have to define what data it will emit
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');//next pushes the next data package
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); },
    );
  }

  //we are clearing our subscriptions with unsubscribe
  //we can clean up our observable subscriptions
  ngOnDestroy() { 
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
