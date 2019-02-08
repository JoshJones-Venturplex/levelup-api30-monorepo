import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-energy-detail',
  templateUrl: './energy-detail.component.html',
  styleUrls: ['./energy-detail.component.scss']
})
export class EnergyDetailComponent implements OnChanges {
  @Input() selectedDrink;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  drinkForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.drinkForm = this.formBuilder.group({
      name: [this.selectedDrink ? this.selectedDrink.name : ''],
      caffeine: [this.selectedDrink ? this.selectedDrink.caffeine : ''],
      sugar: [this.selectedDrink ? this.selectedDrink.sugar : ''],
      founder: [this.selectedDrink ? this.selectedDrink.founder : '']
    })
  }

  saveDrink() {
    this.saved.emit({
      ...this.drinkForm.value,
      id: this.selectedDrink ? this.selectedDrink.id : null
    })
  }
}
