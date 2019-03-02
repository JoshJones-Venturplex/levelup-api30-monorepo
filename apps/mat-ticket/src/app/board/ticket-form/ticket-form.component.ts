import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '@workspace/core-data';

@Component({
  selector: 'workspace-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnChanges {
  @Input() selectedTicket: Ticket;
  @Output() saved: EventEmitter<Ticket> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Ticket> = new EventEmitter();

  ticketForm: FormGroup;

  ticketFormErrors = {
    name: 'Name is required',
    description: 'Description is required',
    status: 'Status is required'
  }

  selectOptions = [
    'todo',
    'done',
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.ticketForm = this.formBuilder.group({
      name: [this.selectedTicket ? this.selectedTicket.name : '', Validators.required],
      description: [this.selectedTicket ? this.selectedTicket.description : '', Validators.required],
      status: [this.selectedTicket ? this.selectedTicket.status : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.ticketForm.controls[formControlName].touched && !this.ticketForm.controls[formControlName].valid;
  }

  saveTicket() {
    this.saved.emit({
      ...this.ticketForm.value,
      id: this.selectedTicket ? this.selectedTicket.id : null
    });
    this.ticketForm.reset();
  }

  cancel() {
    this.ticketForm.reset();
    this.canceled.emit();
  }
}
