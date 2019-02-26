import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '@workspace/core-data';

@Component({
  selector: 'workspace-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: Movie[];
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() { }

  searchMovies(searchParams) {
    this.search.emit(searchParams);
  }

  selectMovie(movie) {
    this.movieSelected.emit(movie);
  }
}