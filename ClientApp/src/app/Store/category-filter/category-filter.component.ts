import { Component, OnInit } from '@angular/core';
import { Repository } from "../../models/repository";

@Component({
  selector: 'store-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  constructor(private repo:Repository) { }
  get categories(): string[]{
    console.log("getting cat...");
    return this.repo.categories;
  }
  get currentCategory(): string{
    return this.repo.filter.category;
  }
  setCurrentCategory( newCategory: string){
    this.repo.filter.category= newCategory;
    this.repo.getMovies();
  }

  ngOnInit() {
  }

}
