import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { EmpAddRoutingModule } from './emp-add-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'; // Corrected import to MatCardModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { HttpClientModule } from '@angular/common/http';
import { EmpAddComponent } from './emp-add.component'; // Import your component
import { EmpAddService } from './emp-add.service';

@NgModule({
  declarations: [
    EmpAddComponent,
    // Declare your component here
  ],
  providers: [EmpAddService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmpAddRoutingModule,HttpClientModule,
    FlexLayoutModule,
    MatCardModule, // Use MatCardModule instead of MatCard
    MatInputModule, // Add MatInputModule for input fields
    MatButtonModule, // Add MatButtonModule for buttons
    MatSelectModule 
  ]
})
export class EmpAddModule { }
