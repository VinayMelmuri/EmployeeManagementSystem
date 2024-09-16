package emsBackend.Api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import emsBackend.Dto.EmployeeDto;
import emsBackend.Exception.EmployeeException;
import emsBackend.Service.EmployeeService;

@RestController
@RequestMapping(value = "/employeeDet")
public class EmployeeApi {
	
	@Autowired
	EmployeeService employeeService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value = "/employee")
	public ResponseEntity<Integer> addCustomer(@RequestBody EmployeeDto employeeDto)throws EmployeeException {
		Integer savedEmp = employeeService.addEmployee(employeeDto);
			return new ResponseEntity<>(savedEmp, HttpStatus.CREATED);
		
	}
}
