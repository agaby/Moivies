import { Component, OnInit } from '@angular/core';
import { Repository } from "../../models/repository";
import { Movie } from "../../models/movie.model";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent  {

  constructor(private repo: Repository, router: Router, activeRoute: ActivatedRoute) {
    let id= Number.parseInt(activeRoute.snapshot.params["id"]);
    if(id){
      this.repo.getMovie(id);
    }else{
      router.navigateByUrl("/");
    }
 }
  get movie():Movie {
    return this.repo.movie;
  }
  
 
  
}
