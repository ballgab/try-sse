import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    someStrings: string[] = [];
    zone: NgZone;
    title = 'app works!';
    urlToChangeStream = 'http://gps.gistda.org:8080/api/locations/change-stream?_format=event-source&access_token=dEXqdm5wkPSG0wlbKIqbQFH79BDOjQJx46qv6UcWiWVpevcXWciZkNXa5vZn1pBV';

    constructor() {
        this.zone = new NgZone({ enableLongStackTrace: false });
    }

    ngOnInit() {
        // const observable = Observable.create(observer => {
        //     const eventSource = new EventSource(this.urlToChangeStream);
        //     eventSource.onmessage = x => observer.next(x.data);
        //     eventSource.onerror = x => observer.error(x);
        //
        //     return () => {
        //         eventSource.close();
        //     };
        // });
        //
        // observable.subscribe({
        //     next: guid => {
        //         console.log("xx");
        //         this.zone.run(() => this.someStrings.push(guid));
        //     },
        //     error: err => console.error('something wrong occurred: ' + err)
        // });

        console.log("xxx");
        // this.getIndicatorsStream().subscribe(() => {
        //     console.log("xx");
        // });

        let serverConnection = new EventSource(this.urlToChangeStream);
        serverConnection.addEventListener("data", this.handleMessage);
        serverConnection.addEventListener("error", this.handleError);
        serverConnection.addEventListener("open", this.handleOpen);
    }

    // getIndicatorsStream(): Observable {
    //     return Observable.create((observer) => {
    //         let eventSource = new EventSource(this.urlToChangeStream);
    //         eventSource.onmessage = (event) => {
    //             this.zone.run(() => observer.next(JSON.parse(event.data)));
    //         };
    //
    //         eventSource.on('data') = (event) => {
    //             this.zone.run(() => observer.next(JSON.parse(event.data)));
    //         };
    //
    //         eventSource.onerror = (error) => observer.error(error);
    //     });
    // }

    private handleMessage(event) {
      JSON.parse(event.data);
    }

    private handleError(event) {
      console.error("An error happened on the EventSource: ", event.data);
    }

    private handleOpen(event) {
      console.log("The connection is now open.");
    }
}
