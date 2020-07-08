import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const localUrl = 'https://localhost:44361/api/notes';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  noteData: Data[] = [];

  constructor(private http: HttpClient) {}

  // HTTP Get Request

  getData(): Observable<HttpResponse<Data[]>> {
    return this.http.get<Data[]>(localUrl, { observe: 'response' });
  }

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
    console.log(this.noteData);
  }

  // HTTP Put Request

  putData(data: Data) {
    console.log('putData from service was called');
    var response = this.http.put(localUrl + '/' + data.id, data);
    console.log(response);
    console.log(
      response.subscribe((resp) => {
        console.log(resp);
      })
    );
  }

  postData(data: Data) {
    console.log('Post data was called inside DataService');
    var response = this.http.post(localUrl, data);
    console.log(response);
    console.log(
      response.subscribe((resp) => {
        console.log(resp);
      })
    );
  }
}
