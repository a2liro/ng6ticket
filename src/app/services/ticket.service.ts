import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

import { Ticket } from '../models/ticket';
import { HttpClient } from '@angular/common/http';

import { SERVER_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class  TicketService {

  constructor(public http: HttpClient) { }

  public get():Observable<Ticket[]> {
    return this.http.get<Ticket[]>(SERVER_URL+'ticket/getAllOpened');
  }

  public search(tickets:Observable<Ticket[]>) {
    return tickets.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.getBySellerName(term))
    );
      
  }

  private getBySellerName(term):Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${SERVER_URL}ticket/getAllOpened/`+term);
  }

  public add(ticket:Ticket):Observable<any> {
    return this.http.post(`${SERVER_URL}ticket/create`,ticket);
  }

  public start(id:number):Observable<any> {
    return this.http.post(`${SERVER_URL}ticket/attend`,{id_ticket:id});
  }

  public close(id:number):Observable<any> {
    return this.http.post(`${SERVER_URL}ticket/check`,{id_ticket:id});
  }

  public reOpen(id:number):Observable<any> {
    return this.http.post(`${SERVER_URL}ticket/reopen`,{id_ticket:id});
  }

}
