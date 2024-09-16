import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpAddService } from './emp-add.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrl: './emp-add.component.css'
})
export class EmpAddComponent {

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder,private service:EmpAddService) {
    this.employeeForm = this.fb.group({
      employeeName: ['', [Validators.required, Validators.minLength(2)]],
      phNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      city: ['',[Validators.required,Validators.minLength(2)]]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.service.post(this.employeeForm.value).subscribe({
        next: (response) => {
          console.log('Employee added successfully', response);
          // Optionally reset the form after successful submission
          this.employeeForm.reset();
        },
        error: (error) => {
          console.error('Error occurred while adding employee:', error);
        }

      })
    }

  }

}
