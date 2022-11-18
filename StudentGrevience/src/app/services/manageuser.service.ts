import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../connect-db/students';
import { Observable,catchError,throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManageuserService {

  url="http://localhost:3000/students"
  constructor(private http:HttpClient) { }

    getStudents():Observable<student[]>
    {
      return this.http.get<student[]>(this.url);
    }

    addStudents(student: student): Observable<any> 
    {
      const options = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.url, student, { headers: options }).pipe(
        catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse): Observable<any> 
    {
      let errMsg = '';
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
        errMsg = err.error.message;
      } 
      else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}`);
        errMsg = err.error.status;
      }
      return throwError(() => errMsg);
    }

}
