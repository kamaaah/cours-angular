import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Subject, Subscription, timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';
import { filter, map, max } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  status = '';
  tab: Array<number> = [];

  constructor() {}

  subscription!: Subscription; /*observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
      1613225682
    );
  } */ /* ngOnInit(): void {
    const observable: Observable<number> = timer(3000, 1000);
    this.subscription = observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  } */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*  Utilise From quand on déclare un tableau */
  ngOnInit(): void {
    const tableau = [1, 2, 3];
    const observable: Observable<number> = from(tableau);
  }

  /*  Utilise Of quand on déclare les valeur directement les nombres en paramètres */
  /* ngOnInit(): void {
    const observable: Observable<number> = of(1,2,3);
 }
*/

  /* ngOnInit(): void {
    const tableau = [1, 2, 3];
    const observable: Observable<number> = from(tableau);
    observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  } */
  /*  ngOnInit(): void {
    const observable: Observable<number> = timer(3000, 1000);
    /* interval(1000) */
  /*  ngOnInit(): void {
    const observable: Observable<number> = interval(1000).pipe(take(10));
    observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  } */

  /* ngOnInit(): void {
    const observable: Observable<number> = interval(1000).pipe(
      take(10),
      map((elt) => elt + 3),
      filter(elt => elt % 2 === 0)
    );
    observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  } */

  /* ******** On peut sélectionner le mlaximum ******** */
  /*   ngOnInit(): void {
    const observable: Observable<number> = interval(1000).pipe(
      take(10),
      max()
    );
    observable.subscribe(
      (value) => {
        this.tab.push(value);
      },
      (error) => {
        this.status = error;
      },
      () => {
        this.status = 'fini';
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  } */

  /* ngOnInit(): void {
    const subject = new Subject<number>();
    subject.subscribe({
      next: (value) => console.log('');

    })

  } */
}
