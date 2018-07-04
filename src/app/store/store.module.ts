import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Form, FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {StoreComponent} from './store.component';
import {CartSummaryComponent} from './cart-summary/cart-summary.component';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})

export class StoreModule {}
