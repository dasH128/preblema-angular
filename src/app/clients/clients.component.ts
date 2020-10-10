import { Component, OnInit } from '@angular/core';
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
  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next: clients => {
        this.clients = clients

      },
      error: err => this.errorMessage = err
    })
  }

}
