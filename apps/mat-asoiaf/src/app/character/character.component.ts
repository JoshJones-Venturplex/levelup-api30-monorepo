import { Component, OnInit } from '@angular/core';
import { CharacterFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Character } from '@workspace/core-data';

@Component({
  selector: 'workspace-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters$: Observable<Character[]> = this.charactersFacade.allCharacters$;
  currentCharacter$: Observable<Character> = this.charactersFacade.currentCharacter$;
  pageNumber: number = 1;

  constructor(private charactersFacade: CharacterFacade) {}

  ngOnInit() {
    this.charactersFacade.loadCharacters(this.pageNumber);
  }

  changePage(number) {
    this.pageNumber += number;
    this.charactersFacade.loadCharacters(this.pageNumber)
  }

  selectCharacter(character) {
    this.charactersFacade.selectCharacter(character.url);
  }
}