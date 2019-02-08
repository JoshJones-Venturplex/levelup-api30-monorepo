import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../shared/swapi.service';

@Component({
  selector: 'workspace-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.scss']
})
export class SwapiComponent implements OnInit {
  people: any[];
  currentPage: number = 1;
  pageLimit: number = 100;

  selectedPerson;
  films;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.getPeople(0);
  }

  getPeople(pageNum) {
    if (pageNum + this.currentPage <= 0 || pageNum + this.currentPage === this.pageLimit) {
      return;
    } else {
      this.currentPage += pageNum;
      this.swapiService.getPeople(this.currentPage).subscribe(res => {
        if (res.next === null) {
          this.pageLimit = this.currentPage + 1;
        }
        this.people = res.results;
      });
    }
  }

  selectPerson(person) {
    this.selectedPerson = person;
    this.getFilms();
  }

  getFilms() {
    this.films = [];
    this.selectedPerson.films.map(film => {
      const filmId = film.replace(/\D/g, "");
      this.swapiService.getFilm(filmId).subscribe(res => {
        this.films.push(res);
      })
    });
  }

}
