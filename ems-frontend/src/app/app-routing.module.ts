import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'empcmp',loadChildren:()=>import('./emp-component/emp-component.module').then((m)=>m.EmpComponentModule)},
  {path:'', redirectTo: '/empcmp/emplist', pathMatch:'full'},
  {path: '**', redirectTo: '/empcmp/emplist'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
