import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl: String = 'https://ticket-api-oioivbffqq.now.sh';

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets/`);
  }

  createTicket(ticket) {
    return this.http.post<Ticket>(`${this.baseUrl}/tickets`, ticket);
  }
  
  updateTicket(ticket) {
    return this.http.patch<Ticket>(`${this.baseUrl}/tickets/${ticket.id}`, ticket);
  }

  deleteTicket(ticket) {
    return this.http.delete<Ticket>(`${this.baseUrl}/tickets/${ticket.id}`);
  }
}
