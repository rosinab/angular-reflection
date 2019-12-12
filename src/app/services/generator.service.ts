import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Generator } from '../models/Generator';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  generateUrl:string = 'https://uinames.com/api/?ext';

  constructor(private http:HttpClient) { }

  generateUser():Observable<Generator[]> {
    return this.http.get<Generator[]>(this.generateUrl);
  };
}

