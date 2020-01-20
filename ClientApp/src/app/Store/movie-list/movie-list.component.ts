import { Component, OnInit } from '@angular/core';
import { Repository } from "../../models/repository";
import { Movie } from "../../models/movie.model";

@Component({
  selector: 'store-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private repo: Repository) { }
  
  // using JS array slice method to select a subset of the movie obj available in the repo
  get movies(): Movie[]{
    if (this.repo.movies != null && this.repo.movies.length > 0) {
      let pageIndex = (this.repo.pagination.currentPage - 1)
          * this.repo.pagination.moviesPerPage;
      return this.repo.movies.slice(pageIndex,
          pageIndex + this.repo.pagination.moviesPerPage);
  }  
}

  ngOnInit() {
  }

}
