import { Component, OnInit } from '@angular/core';
import { SodaService } from '../shared/soda.service';
import { Soda } from '../shared/soda';

@Component({
  selector: 'workspace-soda',
  templateUrl: './soda.component.html',
  styleUrls: ['./soda.component.scss']
})
export class SodaComponent implements OnInit {
  sodas: Soda[];
  selectedSoda: Soda;

  constructor(private sodaService: SodaService) {}

  ngOnInit() {
    this.getSodas();
  }

  reset() {
    this.selectedSoda = null;
  }

  getSodas() {
    this.sodaService.getSodas().subscribe(res => {
      this.sodas = res;
    });
  }

  selectSoda(soda) {
    this.selectedSoda = soda;
  }

  saveSoda(soda) {
    soda.id ? this.updateSoda(soda) : this.createSoda(soda);
  }

  createSoda(soda) {
    this.sodaService.createSoda(soda)
      .subscribe(res => {
        this.getSodas();
        this.reset();
      })
  }
  
  updateSoda(soda) {
    this.sodaService.updateSoda(soda)
      .subscribe(res => {
        this.getSodas();
        this.reset();
      })
  }

  deleteSoda(soda) {
    this.sodaService.deleteSoda(soda)
      .subscribe(res => {
        this.getSodas();
        this.reset();
      })
  }
}
