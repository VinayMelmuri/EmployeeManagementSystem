package emsBackend.Api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import emsBackend.Dto.EmployeeDto;
import emsBackend.Exception.EmployeeException;
import emsBackend.Service.EmployeeService;
import emsBackend.Service.EmployeeServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/employeeDet")
public class EmployeeApi {
	
	@Autowired
	EmployeeServiceImpl employeeService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value = "/employee")
	public ResponseEntity<String> addEmployee(@RequestBody EmployeeDto employeeDto)throws EmployeeException {
		try {
			System.out.println("inside api class try block");
			Integer savedEmp = employeeService.addEmployee(employeeDto);
			return new ResponseEntity<>("Employee added successfully", HttpStatus.CREATED);
			
		}catch(EmployeeException e){
			return new ResponseEntity<>(e.getMessage(),HttpStatus.CONFLICT);
		}
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getEmployee(@PathVariable Integer id) throws EmployeeException{
		try {
			EmployeeDto employeeDto = new EmployeeDto();
			employeeDto = employeeService.getEmployee(id);
			
			return new ResponseEntity<>(employeeDto,HttpStatus.OK);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		
	}
	
	@GetMapping(value = "/")
	public ResponseEntity<?> getAllEmployee() throws EmployeeException{
		try {
			List<EmployeeDto> employeeDto = employeeService.getAllEmployee();
			return new ResponseEntity<>(employeeDto,HttpStatus.OK);
//			return ResponseEntity.ok(employeeDto);
		}
		catch(Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("An error occurred: " + e.getMessage());
		}
		
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable Integer id) throws EmployeeException{
		employeeService.deleteEmployee(id);
		
		return new ResponseEntity<>("employee id"+id+"deleted successfully",HttpStatus.OK);
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateEmployee(@RequestBody EmployeeDto employeeDto) throws EmployeeException{
		Integer id = employeeDto.getId();
		EmployeeDto employeeDtoreceive =new EmployeeDto();
		
		employeeDtoreceive = employeeService.updateEmployee(id,employeeDto);
		
		return new ResponseEntity<>(employeeDtoreceive,HttpStatus.OK);
	}
}