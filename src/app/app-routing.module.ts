import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { ProtectedComponent } from './pages/protected/protected.component';

const routes: Routes = [
  { path:'protected', 
    loadChildren:'./pages/protected/protected.module#ProtectedModule', 
    canActivate:[AuthGuard] 
  },
  { path:'login', component:LoginComponent},
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path: '**', redirectTo: 'protected' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
