import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from './store/store.module';
import { CounterDirective } from './store/counter.directive';

@NgModule({
    declarations: [
        AppComponent,
        CounterDirective
    ],
    imports: [
        BrowserModule,
        StoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
