import { Component, OnInit } from '@angular/core';
import { Repository } from "../../models/repository";


@Component({
  selector: 'store-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private repo: Repository) { }

  get current(): number {
    return this.repo.pagination.currentPage;
  }
  //generates a sequence of page numbers which provieds the objects needed to create
  //and configure the buttons that will change the page
  get pages(): number[]{
    if(this.repo.movies != null){
      return Array(Math.ceil(this.repo.movies.length/this.repo.pagination.moviesPerPage))
                    .fill(0).map((x,i) => i+1);
    }
    else{
      return [];
    }
  }
  changePage(newPage: number){
    this.repo.pagination.currentPage = newPage;
  }
  ngOnInit() {
  }

}
