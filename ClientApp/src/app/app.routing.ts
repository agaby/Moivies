import {Routes, RouterModule} from "@angular/router";
import {MovieSelectionComponent} from './Store/movie-selection/movie-selection.component';
const routes: Routes=[
    { path: "store", component: MovieSelectionComponent},
    { path: "", component: MovieSelectionComponent}
]

export const RoutingConfig = RouterModule.forRoot(routes);