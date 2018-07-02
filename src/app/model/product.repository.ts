import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {StaticDataSource} from './static.datasource';

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor( private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data
                .map(item => item.category)
                .filter((c, i, arr) => arr.indexOf(c) === i)
                .sort();
        });
    }

    getProducts(category: string = null): Product[] {
        return this.products.filter(item => category === null || category === item.category);
    }

    getProduct(id: number): Product {
        return this.products.find(item => item.id === id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}