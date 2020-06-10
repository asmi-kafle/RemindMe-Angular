import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const localUrl = 'http://localhost:3000/notes';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  noteData: Data[] = [];

  constructor(private http: HttpClient) {}

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
}
