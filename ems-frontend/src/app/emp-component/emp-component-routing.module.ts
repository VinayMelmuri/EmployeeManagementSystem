import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo: 'emplist', pathMatch: 'full'},
  { path: 'empadd', loadChildren:()=>import('./emp-add/emp-add.module').then((m)=>m.EmpAddModule)},
  { path: 'emplist', loadChildren:()=>import('./emp-list/emp-list.module').then((m)=>m.EmpListModule)},
  { path: 'empdetails', loadChildren:()=> import( './emp-details/emp-details.module').then((m)=>m.EmpDetailsModule)},
  { path: 'empupdate', loadChildren:() => import( './emp-update/emp-update.module').then((m)=>m.EmpUpdateModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpComponentRoutingModule { }
