package emsBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emsBackend.Dto.EmployeeDto;
import emsBackend.Exception.EmployeeException;
import emsBackend.Repository.EmployeeRepository;
import emsBackend.entity.Employee;
import jakarta.transaction.Transactional;

@Service(value = "employeeService")
@Transactional
public class EmployeeServiceImpl {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	public Integer addEmployee(EmployeeDto employeeDto) throws EmployeeException{
		Employee emp = new Employee();
		emp.setEmployeeName(employeeDto.getEmployeeName());
		emp.setContact(employeeDto.getContact());
		emp.setPlace(employeeDto.getPlace());
		employeeRepository.save(emp);
		
		return 1 ;		
	}
	
}
