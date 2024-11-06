import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpUpdateRoutingModule } from './emp-update-routing.module';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpUpdateComponent } from './emp-update.component';
import { EmpUpdateService } from './emp-update.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule  } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

@NgModule({
  declarations: [EmpUpdateComponent],
  providers: [EmpUpdateService],
  imports: [
    CommonModule,
    EmpUpdateRoutingModule,FormsModule,MatFormFieldModule,ReactiveFormsModule,
    MatCardModule,MatInputModule,
    FlexLayoutModule,HttpClientModule,MatButtonModule
  ]
})
export class EmpUpdateModule { }