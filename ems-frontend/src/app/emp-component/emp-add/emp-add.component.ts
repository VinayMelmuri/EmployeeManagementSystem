import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpAddService } from './emp-add.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrl: './emp-add.component.css'
})
export class EmpAddComponent {

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:EmpAddService,private snackbar:MatSnackBar) {
    this.employeeForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.minLength(2)]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      place: ['',[Validators.required,Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.service.post(this.employeeForm.value).subscribe({
        
        next: (response) => {
          // Optionally reset the form after successful submission
          this.employeeForm.reset();

          this.snackbar.open('Employee added successfully','close',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'center',
          })
        },
        error: (error) => {

          if(error.status == 409){
            this.snackbar.open('Error:Duplicate contact number. Please use a different contact','close',{
              duration:3000,
              verticalPosition:'top',
              horizontalPosition:'center',
            });
          } else {
            // Handle other errors
            this.snackbar.open('Error adding employee', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          }
        }
      })
    }
  }
}