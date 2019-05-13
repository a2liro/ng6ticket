import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Observable } from 'rxjs';

import { Ticket } from 'src/app/models/ticket';
import { ModalService } from 'src/app/services/util/modal.service';

import * as io from 'socket.io-client';

//import { Socket } from 'ng6-socket-io';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  tickets: Ticket[];
  idOpenModal:any;
  idSelectedTicket:any;
  searchTerm:string='';
  socket:any;

  constructor(
    public ticketService: TicketService,
    public modalService: ModalService,
    //public socketIo: Socket
  ) {

    this.socket = io.connect('https://hotline-ticket.herokuapp.com');

    this.socket.on('reload',() => {
      this.load();
    })
  }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.ticketService.get()
      .subscribe((response) => {
        this.tickets = response;
      })
  }

  public search() {
    console.log('buscando...');
  }

  public startTicket() {
    this.ticketService.start(this.idSelectedTicket.id)
      .subscribe(() => {
        this.modalService.close(this.idOpenModal);
        if (this.idSelectedTicket.phone.length > 14) {
          window.open(this.idSelectedTicket.phone);
        } else {
          window.open(`https://web.whatsapp.com/send?phone=+55${this.idSelectedTicket.phone}`);
        }
        console.log('ticket started');
      })
  }

  public closeTicket() {
    this.ticketService.close(this.idSelectedTicket.id)
      .subscribe(() => {
        this.modalService.close(this.idOpenModal);
        console.log('ticket closed');
      })
  }

  public reopenTicket() {
    this.ticketService.reOpen(this.idSelectedTicket.id)
      .subscribe(() => {
        this.modalService.close(this.idOpenModal);
      })
  }

  public openModal(id:string,ticket:any):void {
    this.idSelectedTicket = ticket;
    this.idOpenModal = id;
    this.modalService.open(id);
  }

  public closeModal(id:string):void {
    this.idOpenModal = id;
    this.modalService.close(id);
  }

}
