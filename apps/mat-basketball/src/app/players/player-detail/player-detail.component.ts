import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '@workspace/core-data';

@Component({
  selector: 'workspace-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnChanges {
  @Input() selectedPlayer: Player;
  @Output() saved: EventEmitter<Player> = new EventEmitter();
  @Output() canceled: EventEmitter<void> = new EventEmitter();
  @Output() deleted: EventEmitter<Player> = new EventEmitter();

  playerForm: FormGroup;

  playerFormErrors = {
    name: 'Name is required',
    height: 'Height is required',
    position: 'Position is required',
    number: 'Number is required',
    team: 'Team is required'
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.playerForm = this.formBuilder.group({
      name: [this.selectedPlayer ? this.selectedPlayer.name : '', Validators.required],
      height: [this.selectedPlayer ? this.selectedPlayer.height : '', Validators.required],
      position: [this.selectedPlayer ? this.selectedPlayer.position : '', Validators.required],
      number: [this.selectedPlayer ? this.selectedPlayer.number : '', Validators.required],
      team: [this.selectedPlayer ? this.selectedPlayer.team : '', Validators.required]
    });
  }

  formFieldValidator(formControlName) {
    return this.playerForm.controls[formControlName].touched && !this.playerForm.controls[formControlName].valid;
  }

  savePlayer() {
    this.saved.emit({
      ...this.playerForm.value,
      id: this.selectedPlayer ? this.selectedPlayer.id : null
    });
    this.playerForm.reset();
  }

  cancel() {
    this.playerForm.reset();
    this.canceled.emit();
  }
}
