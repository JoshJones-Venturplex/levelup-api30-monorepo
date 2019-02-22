import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from '@workspace/core-data';

@Component({
  selector: 'workspace-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {
  @Input() selectedCharacter: Character;

  constructor() {}
}
