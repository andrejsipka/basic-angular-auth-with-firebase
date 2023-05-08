import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
    public apiMaps$: Observable<boolean>;

    constructor(httpClient: HttpClient) {
        this.apiMaps$ = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDpF9r7v-GLz3t2Q0ssN7c-dMF8IM-IDAI', 'callback').pipe(
            map(() => true),
            catchError(() => of(false)),
        );
    }
}
