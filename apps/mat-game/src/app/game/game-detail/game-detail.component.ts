import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnChanges {
  @Input() selectedGame;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.gameForm = this.formBuilder.group({
      name: [this.selectedGame ? this.selectedGame.name : ''],
      publisher: [this.selectedGame ? this.selectedGame.publisher : ''],
      released: [this.selectedGame ? this.selectedGame.released : '']
    });
  }

  saveGame() {
    this.saved.emit({
      ...this.gameForm.value,
      id: this.selectedGame ? this.selectedGame.id : null
    });
    this.gameForm.reset();
  }

  cancel() {
    this.gameForm.reset();
    this.canceled.emit()
  }
}
