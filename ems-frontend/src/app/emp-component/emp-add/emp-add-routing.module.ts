import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddComponent } from './emp-add.component';

const routes: Routes = [
  {path:'',component:EmpAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpAddRoutingModule { }
