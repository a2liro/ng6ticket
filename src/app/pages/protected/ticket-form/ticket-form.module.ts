import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketFormRoutingModule } from './ticket-form-routing.module';
import { TicketFormComponent } from './ticket-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import {NgxMaskModule} from 'ngx-mask'

@NgModule({
  declarations: [TicketFormComponent],
  imports: [
    CommonModule,
    TicketFormRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class TicketFormModule { }
