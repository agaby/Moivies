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
  
  get movies(): Movie[]{
    return this.repo.movies;
  }

  ngOnInit() {
  }

}
