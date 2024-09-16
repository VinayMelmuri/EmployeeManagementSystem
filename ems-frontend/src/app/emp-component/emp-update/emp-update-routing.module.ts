import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpUpdateComponent } from './emp-update.component';

const routes: Routes = [
  {path:'',component:EmpUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpUpdateRoutingModule { }
