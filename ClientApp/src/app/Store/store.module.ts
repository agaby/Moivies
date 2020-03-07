import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {CartSummaryComponent} from './cart-summary/cart-summary.component';
import {CategoryFilterComponent} from './category-filter/category-filter.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieSelectionComponent} from './movie-selection/movie-selection.component';
import {PaginationComponent} from './pagination/pagination.component';
import {RatingsComponent} from './ratings/ratings.component';
import {CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartDetailComponent,
    CartSummaryComponent,
    CategoryFilterComponent,
    MovieListComponent,
    PaginationComponent,
    MovieSelectionComponent,
    RatingsComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports: [MovieSelectionComponent]
})
export class StoreModule { }
