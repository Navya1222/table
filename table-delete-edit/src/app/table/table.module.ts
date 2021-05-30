import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', component: TableComponent },
];
@NgModule({
  declarations: [TableComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
})
export class TableModule { }
