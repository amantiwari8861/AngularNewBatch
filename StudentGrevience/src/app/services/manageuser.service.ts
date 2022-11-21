import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../connect-db/students';
import { Observable,catchError,throwError, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManageuserService {

  url="http://localhost:3000/students";
  options = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http:HttpClient) { }

    getStudents():Observable<student[]>
    {
      return this.http.get<student[]>(this.url);
    }

    addStudents(student: student): Observable<any> 
    {
      // const options = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.url, student, { headers: this.options }).pipe(
        catchError(this.handleError));
    }

    updateStudent(student: student): Observable<student> {
      // const options = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.put<student>(this.url+"/"+student.id, student, { headers: this.options }).pipe(
        tap((_: any) => console.log(`updated student id=${student.id}`)),
        catchError(this.handleError)
      );
    }

    deleteStudent(stId: number): Observable<any> {
      const url = `${this.url}/${stId}`;
      return this.http.delete(url).pipe(catchError(this.handleError));
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
