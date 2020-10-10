import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IClient } from './client';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  pageTitle = 'Client List';
  errorMessage = '';
  clients: IClient[] = [];
  constructor(private clientService: ClientsService,
    private router : Router) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next: clients => {
        this.clients = clients

      },
      error: err => this.errorMessage = err
    })
  }

  VerDetalle(client: IClient){
    console.log('clients/cliente'+client.id)
    this.router.navigate(['clients/cliente/'+client.id]);
  }

}
