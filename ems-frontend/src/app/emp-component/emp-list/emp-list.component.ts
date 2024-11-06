import { Component } from '@angular/core';
import { EmpListService } from './emp-list.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {
  displayedColumns: string[] = ['id', 'employeeName'];
  employees: any[] = [];

  constructor(private service:EmpListService){

  }

  ngOnInit(): void {
    this.service.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Error fetching employee list:', error);
      }
    });
  }

}
