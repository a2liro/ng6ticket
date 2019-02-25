import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketFormComponent } from './ticket-form.component';

const routes: Routes = [
  { path:'', component:TicketFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketFormRoutingModule { }
