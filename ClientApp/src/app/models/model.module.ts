import { NgModule } from "@angular/core";
import { Repository } from "./repository";
// import { MovieTableComponent } from '../structure/movieTable/movieTable.component';
// import {CatagoryFilterComponent} from '../structure/catagoryFilter/catagoryFilter.component';
 @NgModule({
	providers: [Repository]
	// declarations: [MovieTableComponent,CatagoryFilterComponent]
})
export class ModelModule { }
