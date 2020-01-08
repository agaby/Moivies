import { Component, OnInit } from '@angular/core';
import { Repository } from "../../models/repository";


@Component({
  selector: 'store-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private repo: Repository) { }

  ngOnInit() {
  }

}
