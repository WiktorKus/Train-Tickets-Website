import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [RegisterComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [COMPONENTS],
})
export class RegisterModule {}
