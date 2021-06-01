import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableeditComponent } from './tableedit.component';

const routes: Routes = [
  { path: '', component: TableeditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableeditRoutingModule { }
