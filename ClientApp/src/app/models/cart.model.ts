import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";

@Injectable()
export class Cart {
    selections: MovieSelection[] = [];
    itemCount: number = 0;
    totalPrice: number = 0;
    // add movie to cart 
    addMovie(movie: Movie) {
        let selection = this.selections
            .find(ps => ps.movieId == movie.movieId);
        if (selection) {
            selection.quantity++;
        } else {
            this.selections.push(new MovieSelection(this,
                movie.movieId, movie.name,
                movie.price, 1));
        }
        this.update();
        console.log("adding movie to cart: "+ movie.name);
    }
    //keep track of movies in the cart
    updateQuantity(movieId: number, quantity: number) {
        if (quantity > 0) {
            let selection = this.selections.find(ps => ps.movieId == movieId);
            if (selection) {
                selection.quantity = quantity;
            }
        } else {
            let index = this.selections.findIndex(ps => ps.movieId == movieId);
            if (index != -1) {
                this.selections.splice(index, 1);
            }
            this.update();
        }
    }
    //---------------------------------------------------
    clear() {
        this.selections = [];
        this.update();
    }
    //keep track of item count and total price  
    update() {
        this.itemCount = this.selections.map(ps => ps.quantity)
            .reduce((prev, curr) => prev + curr, 0);
        this.totalPrice = this.selections.map(ps => ps.price * ps.quantity)
            .reduce((prev, curr) => prev + curr, 0);
        // console.log("Item count: "+this.itemCount);
        // console.log("Total Price: "+this.totalPrice);
    }
}
//---------------------------------------------------
export class MovieSelection {
    constructor(public cart: Cart,
        public movieId?: number,
        public name?: string,
        public price?: number,
        private quantityValue?: number) { }
    get quantity() {
        return this.quantityValue;
    }
    set quantity(newQuantity: number) {
        this.quantityValue = newQuantity;
        this.cart.update();
    }
}