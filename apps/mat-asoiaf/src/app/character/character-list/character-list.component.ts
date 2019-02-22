import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '@workspace/core-data';

@Component({
  selector: 'workspace-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  @Input() characters: Character[];
  @Output() characterSelected: EventEmitter<Character> = new EventEmitter();
  @Output() pageChange: EventEmitter<number> = new EventEmitter;

  constructor() { }

  selectCharacter(character) {
    this.characterSelected.emit(character);
  }

  changePage(pageChange) {
    this.pageChange.emit(pageChange);
  }
}