import { Component } from '@angular/core';
import { EmpUpdateService } from './emp-update.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrl: './emp-update.component.css'
})
export class EmpUpdateComponent {

  employeeForm!: FormGroup;
  updatedEmployee!:any;

  constructor(private service:EmpUpdateService,private fb:FormBuilder,private snackBar:MatSnackBar){
    this.employeeForm = this.fb.group({
      employeeName:[''],
      contact:[''],
      place:[''],
      id:['',Validators.required]
    })
  }

  updateEmployee(){

    const {...employeeData } = this.employeeForm.value; 
    console.log(employeeData);
    this.service.updateEmployee(employeeData).subscribe((employeeRecieved)=>{
      this.updatedEmployee = employeeRecieved;
      console.log(employeeRecieved);
    })

    // this.service.updateEmployee(employeeId,employeeData).subscribe({
    // })
  }
}
