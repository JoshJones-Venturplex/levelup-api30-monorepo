import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '@workspace/core-data';

@Component({
  selector: 'workspace-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnChanges {
  @Input() selectedItem: Item;
  @Output() saved: EventEmitter<Item> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Item> = new EventEmitter();

  itemForm: FormGroup;

  itemFormErrors = {
    firstName: 'Name is required',
    status: 'Status is required'
  }

  selectOptions = [
    'Stocked',
    'Low',
    'None Available',
    'Ordered'
  ]

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.itemForm = this.formBuilder.group({
      name: [this.selectedItem ? this.selectedItem.name : '', Validators.required],
      status: [this.selectedItem ? this.selectedItem.status : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.itemForm.controls[formControlName].touched && !this.itemForm.controls[formControlName].valid;
  }

  saveItem() {
    this.saved.emit({
      ...this.itemForm.value,
      id: this.selectedItem ? this.selectedItem.id : null
    });
    this.itemForm.reset();
  }

  cancel() {
    this.itemForm.reset();
    this.canceled.emit();
  }
}
