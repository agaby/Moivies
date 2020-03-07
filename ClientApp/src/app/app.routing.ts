import {Routes, RouterModule} from "@angular/router";
import {MovieSelectionComponent} from './Store/movie-selection/movie-selection.component';
import {CartDetailComponent } from './Store/cart-detail/cart-detail.component';


const routes: Routes=[
    { path: "cart", component: CartDetailComponent},
    { path: "store", component: MovieSelectionComponent},
    { path: "", component: MovieSelectionComponent}
]

export const RoutingConfig = RouterModule.forRoot(routes);