import { Component, OnInit } from '@angular/core';
import { Repository } from "../../models/repository";

@Component({
  selector: 'app-catagory-filter',
  templateUrl: './catagory-filter.component.html',
  styleUrls: ['./catagory-filter.component.css']
})
export class CatagoryFilterComponent implements OnInit {
  public romanceCategory = "romance";
  constructor(private repo: Repository) { }
  setCategory(category: string) {
      this.repo.filter.category = category;
      this.repo.getMovies();
  }
  ngOnInit() {
  }

}
