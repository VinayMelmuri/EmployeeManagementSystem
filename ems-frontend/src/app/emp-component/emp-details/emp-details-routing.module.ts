import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailsComponent } from './emp-details.component';

const routes: Routes = [
  {path:'',component:EmpDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpDetailsRoutingModule { }
