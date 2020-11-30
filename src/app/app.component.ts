import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  public myObservable = new Observable(
    function subscribe(subscriber) {
      subscriber.next(1);
      subscriber.next(10);
      subscriber.complete();
    }
  );

  public mySubject = new Subject<number>();

  ngOnInit() {
    this.myObservable.subscribe(res => console.log(res));
    this.myObservable.subscribe(res => console.log(res));

    this.mySubject.subscribe(res => console.log(res));
    this.mySubject.subscribe(res => console.log(res));

    this.mySubject.next(1);
    this.mySubject.next(2);

    this.mySubject.subscribe(res => console.log(res));
  }
}
