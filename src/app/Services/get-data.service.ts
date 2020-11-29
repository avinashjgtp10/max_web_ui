import { baseurl } from './../../environments/base';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private _http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    alert(error.error.data);
    // console.log(error);

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`

      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  getData() {
    return this._http.get("https://pristine-lake-clark-35296.herokuapp.com/api/v1/calorieItems");
  }
  addDietician(item: any): Observable<JSON> {
    return this._http.post<JSON>(baseurl + "dietcian/create", JSON.stringify(item), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
