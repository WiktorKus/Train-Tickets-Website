import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CartComponent} from "./containers";
import {MaterialModule} from "../../material.module";

const COMPONENTS = [CartComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [COMPONENTS]
})
export class CartModule {}
