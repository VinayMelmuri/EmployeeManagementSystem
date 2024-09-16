package emsBackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "empId")
	String employeeId;
	
	@Column(name = "empName")
	String employeeName;
	
	@Column(name = "contact")
	String contact;
	
	@Column (name = "place")
	String place;
	
	
	public String getEmployeeId() {
		return employeeId;
	}

	
	public String getEmployeeName() {
		return employeeName;
	}


	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}


	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
		this.contact = contact;
	}


	public String getPlace() {
		return place;
	}


	public void setPlace(String place) {
		this.place = place;
	}


	@Override 
	public String toString() {
		return "empId" + employeeId + "employeeName" + employeeName + "contact" + contact + "place" +place;
		
	}
}

