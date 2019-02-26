import { Component, OnInit } from '@angular/core';
import { MovieFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { Movie, MovieInfo } from '@workspace/core-data';

@Component({
  selector: 'workspace-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies$: Observable<Movie[]> = this.moviesFacade.allMovies$;
  currentMovie$: Observable<Movie> = this.moviesFacade.currentMovie$;

  constructor(private moviesFacade: MovieFacade) {}

  ngOnInit() {
    this.searchMovies('star');
  }

  searchMovies(search) {
    this.moviesFacade.loadMovies(search);
  }

  selectMovie(movie) {
    this.moviesFacade.loadMovieInfo(movie.imdbID);
    this.moviesFacade.selectMovie(movie.imdbID);
  }
}