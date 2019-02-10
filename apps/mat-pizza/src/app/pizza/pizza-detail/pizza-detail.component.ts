import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnChanges {
  @Input() selectedPizza;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  pizzaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.pizzaForm = this.formBuilder.group({
      name: [this.selectedPizza ? this.selectedPizza.name : ''],
      calories: [this.selectedPizza ? this.selectedPizza.calories : ''],
      mainTopping: [this.selectedPizza ? this.selectedPizza.mainTopping : ''],
      secondaryTopping: [
        this.selectedPizza ? this.selectedPizza.secondaryTopping : ''
      ]
    });
  }

  savePizza() {
    this.saved.emit({
      ...this.pizzaForm.value,
      id: this.selectedPizza ? this.selectedPizza.id : null
    });
  }
}
