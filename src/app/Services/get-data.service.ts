import { baseurl } from "./../../environments/base";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GetDataService {
  constructor(private _http: HttpClient) {}

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
    return this._http.get(baseurl + "calorieItems");
  }
  addDietician(item: any): Observable<JSON> {
    return this._http
      .post<JSON>(
        baseurl + "dietcian/create",
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  addNewCalorieItem(data: any): Observable<JSON> {
    return this._http
      .post<JSON>(baseurl + "calorieItems", data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /***
   * Add Slot
   */

  addSlot(data: any): Observable<JSON> {
    return this._http
      .post<JSON>(baseurl + "dietcian/slotBooking", data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /***
   * Dietcian login
   */
  dietcianLogin(data): Observable<JSON> {
    return this._http
      .post<JSON>(baseurl + "/dietcian/login", data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Get Dietcian Booked Appointmet
   */
  getDietcianAppointment(did: any) {
    return this._http
      .get<JSON>(baseurl + `/dietcian/myAppointment/${did}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /***
   * get premium  User List
   */
  getPremiumUsers(value: any) {
    return this._http
      .get<JSON>(baseurl + `/user/getPremimunUsers/${value}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Get Dietcian List
   */
  getDietcianList(value: any) {
    return this._http
      .get<JSON>(baseurl + `/dietcian/allDietcian/${value}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Assign Dietcian
   */
  assignDietcian(payload: any) {
    return this._http
      .post<JSON>(
        baseurl + "/dietcian/assignDietcian/",
        payload,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * Get Assigned User to Dietcian
   */
  getAssignedClient(value) {
    return this._http
      .get<JSON>(
        baseurl + `/dietcian/getAssignedClient/${value}`,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * Get Client Details By ID
   */
  getClientDataById(value: any) {
    return this._http
      .get<JSON>(baseurl + `/client/${value}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Save Chat
   */
  saveChatDietcianAndCLient(payload: any) {
    return this._http
      .post<JSON>(baseurl + "/chat/save", payload, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /***
   * Get Chat Histroy
   */
  chatHistroyWithDietcian(payload: any) {
    return this._http
      .post<JSON>(baseurl + "/chat/history", payload, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
