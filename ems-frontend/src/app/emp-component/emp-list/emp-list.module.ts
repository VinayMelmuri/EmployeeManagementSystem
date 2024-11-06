import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpListRoutingModule } from './emp-list-routing.module';
import { EmpListComponent } from './emp-list.component';
import { EmpListService } from './emp-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EmpListComponent],
  providers: [EmpListService],
  imports: [
    CommonModule,
    EmpListRoutingModule,
    HttpClientModule,MatPaginatorModule,MatSortModule,ReactiveFormsModule,
    FlexLayoutModule,
    MatTableModule,MatCardModule
  ]
})
export class EmpListModule { }
