import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resale } from '../models/resale';
import { SERVER_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class ResaleService {

  resales:Resale[] = [];

  constructor(public http: HttpClient) { }

  public get():Observable<Resale[]> {
    return this.http.get<Resale[]>(`${SERVER_URL}ticket/getRevendas`);
  }
}
