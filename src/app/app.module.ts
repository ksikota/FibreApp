import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {ProductsComponent} from "./products/products.component";
import {FibreService} from "./service/fibre.service";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [BrowserAnimationsModule, BrowserModule, FormsModule, HttpClientModule, MatGridListModule, RouterModule, MatFormFieldModule, MatSelectModule],
  declarations: [ AppComponent, ProductsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FibreService]
})
export class AppModule { }
