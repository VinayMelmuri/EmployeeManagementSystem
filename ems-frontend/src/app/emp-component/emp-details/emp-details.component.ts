import { Component } from '@angular/core';
import { EmpDetailsService } from './emp-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {

  displayedColumns: string[] = ['id', 'employeeName', 'contact', 'place'];
  selectedEmployee:any;
  employeeId!: number;
  errorMessage: string | undefined;
  employeeForm!: FormGroup;
  
  constructor(private service: EmpDetailsService,private formBuilder : FormBuilder,private snackbar:MatSnackBar) {
    this.employeeForm = this.formBuilder.group({
      employeeId:['',[Validators.required,Validators.minLength(1)]]
    });
   }

    findEmployee(){
      this.employeeId = this.employeeForm.get('employeeId')?.value;  // Retrieve the value from the form control
     if(this.employeeId){
      this.service.getEmployeeId(this.employeeId).subscribe(
        (employee) => {
          this.selectedEmployee = employee;
          // this.errorMessage = undefined;
        },
        (error) => {
          this.selectedEmployee = false;
          if(error.status == 404){
            this.snackbar.open('Employee not found','close',{
              duration:3000,
              verticalPosition:'top',
              horizontalPosition:'center',
            })
          }
          // this.selectedEmployee = undefined;
          this.errorMessage = 'Employee not found or error fetching details.';
        }
      );
     }
    }
}