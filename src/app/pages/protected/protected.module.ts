import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';
import { FooterModule } from 'src/app/@template/footer/footer.module';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';
import { SidebarModule } from 'src/app/@template/sidebar/sidebar.module';

@NgModule({
  declarations: [ProtectedComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
  ]
})
export class ProtectedModule { }
