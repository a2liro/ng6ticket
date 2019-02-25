import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './protected.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:ProtectedComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'ticket', 
        loadChildren:'./ticket/ticket.module#TicketModule',
        canActivate:[AuthGuard]
      },
      {
        path:'add-ticket',
        loadChildren:'./ticket-form/ticket-form.module#TicketFormModule',
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
