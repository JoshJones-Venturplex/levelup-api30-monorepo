import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Amiibo } from '@workspace/core-data';

@Component({
  selector: 'workspace-amiibo-detail',
  templateUrl: './amiibo-detail.component.html',
  styleUrls: ['./amiibo-detail.component.scss']
})
export class AmiiboDetailComponent {
  @Input() selectedAmiibo: Amiibo;

  constructor() {}
}
