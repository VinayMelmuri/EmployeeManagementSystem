import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { EmpDetailsRoutingModule } from './emp-details-routing.module';
import { EmpDetailsComponent } from './emp-details.component';
import { EmpDetailsService } from './emp-details.service';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Import ReactiveFormsModule and FormsModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

@NgModule({
  declarations: [EmpDetailsComponent,],
  providers:[EmpDetailsService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmpDetailsRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,
    MatLabel,MatInputModule ,FormsModule,MatButtonModule
  ]
})
export class EmpDetailsModule { }