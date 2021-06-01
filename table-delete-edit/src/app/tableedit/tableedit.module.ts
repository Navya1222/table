import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableeditRoutingModule } from './tableedit-routing.module';
import { TableeditComponent } from './tableedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './tableedit';
@NgModule({
  declarations: [TableeditComponent],
  imports: [
    CommonModule,
    TableeditRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers:[FormService]
})
export class TableeditModule { }
