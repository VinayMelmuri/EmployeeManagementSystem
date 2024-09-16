package emsBackend.Dto;

public class EmployeeDto {

	private String employeeName;
	private String contact;
	private String place;
	
	
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


	public EmployeeDto(String employeeName, String contact, String place) {
		super();
		this.employeeName = employeeName;
		this.contact = contact;
		this.place = place;
	}
	
	@Override
	public String toString() {
		return "Employee [ EmployeeName" + employeeName + ", Contact" + contact + ", place " + place + "]";
		
	}
	
}
