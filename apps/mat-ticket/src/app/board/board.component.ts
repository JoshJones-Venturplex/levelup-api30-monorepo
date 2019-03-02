import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { TicketsFacade } from '@workspace/core-state';
import { Ticket } from '@workspace/core-data';

@Component({
  selector: 'workspace-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tickets$: Observable<Ticket[]> = this.ticketsFacade.allTickets$;
  currentTicket$: Observable<Ticket> = this.ticketsFacade.currentTicket$;
  ticketsList;
  ticketsDone = [];
  ticketsTodo = [];

  constructor(private ticketsFacade: TicketsFacade) {}

  ngOnInit() {
    this.ticketsFacade.loadTickets();
    this.tickets$.subscribe(res => this.arrangeBoard(res));
    this.ticketsFacade.mutations$.subscribe(_ => this.resetCurrentTicket());
    this.resetCurrentTicket();
  }

  drop(event: CdkDragDrop<any[]>, newStatus) {
    let item = event.previousContainer.data[event.previousIndex];
    this.selectTicket(item);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.saveTicket({
        ...item,
        status: newStatus
      })
      console.log(event);
    }
  }

  resetCurrentTicket() {
    this.selectTicket({ id: null });
  }

  selectTicket(ticket) {
    this.ticketsFacade.selectTicket(ticket.id);
  }

  saveTicket(ticket) {
    if (!ticket.id) {
      this.ticketsFacade.addTicket(ticket);
    } else {
      this.ticketsFacade.updateTicket(ticket);
    }
  }

  deleteTicket(ticket) {
    this.ticketsFacade.deleteTicket(ticket);
  }

  arrangeBoard(tickets) {
    this.ticketsTodo = [];
    this.ticketsDone = [];
    tickets.map(ticket => {
      if (ticket.status === 'done') {
        this.ticketsDone.push(ticket);
      } else {
        this.ticketsTodo.push(ticket);
      }
    });
  }
}
