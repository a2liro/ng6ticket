import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ModalComponent } from 'src/app/@template/_directives/modal';


@NgModule({
  declarations: [TicketComponent, ModalComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class TicketModule { }
