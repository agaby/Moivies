import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import {Cart} from "./cart.model";
// import { MovieTableComponent } from '../structure/movieTable/movieTable.component';
// import {CatagoryFilterComponent} from '../structure/catagoryFilter/catagoryFilter.component';
 @NgModule({
	providers: [Repository, Cart]
	// declarations: [MovieTableComponent,CatagoryFilterComponent]
})
export class ModelModule { }
