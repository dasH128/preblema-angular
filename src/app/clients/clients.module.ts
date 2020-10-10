import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component'
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'clients', component: ClientsComponent },
      {
        path: 'clients/cliente/:id',
        component: ClientComponent
      }
    ]),
    // SharedModule
  ]
})
export class ClientsModule { }
