import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const localUrl = 'https://localhost:44361/api/notes'; //URL where the API listens to calls

@Injectable({
  providedIn: 'root',
})
export class DataService {
  noteData: Data[] = [];

  constructor(private http: HttpClient) {}

  // HTTP Get Request
  // sends a request and received an observable of HTTPResponse from the backend API.
  // the HTTPResponse has a header and a body.
  // The header stores the error code and message and the body stores the data gotten back from the get request
  getData(): Observable<HttpResponse<Data[]>> {
    return this.http.get<Data[]>(localUrl, { observe: 'response' });
  }

  //subscribes to the response's body and loops until the new row of data is received and returns those data
  getNotesData(): Data[] {
    this.getData().subscribe((resp) => {
      console.log(resp);

      for (const data of resp.body) {
        this.noteData.push(data);
      }
    });
    console.log(this.noteData);
    return this.noteData;
  }

  // HTTP Delete Request
  //sends the uri pointing to a specific entity and removes that row from the database
  deleteData(id: number): Observable<HttpResponse<Data[]>> {
    console.log('DeleteData was called.');
    return this.http.delete<Data[]>(localUrl + '/' + id, {
      observe: 'response',
    });
  }

  deleteNotesData(id: number) {
    this.deleteData(id).subscribe((resp) => {
      console.log(resp);
    });
    location.reload();
    console.log(this.noteData);
  }

  // HTTP Put Request
  //sends uri pointing to a specific entity in the database and updates it with the information sent
  putData(data: Data) {
    console.log('putData from service was called');
    var response = this.http.put(localUrl + '/' + data.id, data);
    console.log(response);
    console.log(
      response.subscribe((resp) => {
        console.log(resp);
      })
    );
    location.reload();
  }

  // HTTP Post Request
  //sends the data, of the type defined in the Data interface, to be added in the database in a new row
  postData(data: Data) {
    console.log('Post data was called inside DataService');
    var response = this.http.post(localUrl, data);
    console.log(response);
    console.log(
      response.subscribe((resp) => {
        console.log(resp);
      })
    );
    location.reload();
  }
}
