import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';
import {Cart} from '../model/cart.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
    selectedCategory = null;
    productsPerPage = 6;
    selectedPage = 1;

    constructor (
            private repository: ProductRepository,
            private cart: Cart,
            private router: Router
        ) {
    }

    get products(): Product[] {
        const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository
            .getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = newSize;
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0).map((item, i) => i + 1);
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl('/cart');
    }

    ngOnInit() {
    }

}
