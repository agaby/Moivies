import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {CartSummaryComponent} from './cart-summary/cart-summary.component';
import {CategoryFilterComponent} from './category-filter/category-filter.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieSelectionComponent} from './movie-selection/movie-selection.component';
import {PaginationComponent} from './pagination/pagination.component';
import {RatingsComponent} from './ratings/ratings.component';

@NgModule({
  declarations: [
    CartSummaryComponent,
    CategoryFilterComponent,
    MovieListComponent,
    PaginationComponent,
    MovieSelectionComponent,
    RatingsComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [MovieSelectionComponent]
})
export class StoreModule { }
