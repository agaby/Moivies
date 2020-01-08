import { Component, OnInit } from '@angular/core';
import { Repository } from "../../models/repository";

@Component({
  selector: 'store-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  constructor(private repo:Repository) { }

  ngOnInit() {
  }

}
