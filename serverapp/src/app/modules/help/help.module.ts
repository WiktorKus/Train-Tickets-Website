import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import {HelpComponent} from "./containers/help-page/help.component";

const COMPONENTS = [HelpComponent]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS]
})
export class HelpModule {}
