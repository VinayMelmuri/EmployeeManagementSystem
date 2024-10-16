package emsBackend.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import emsBackend.Dto.EmployeeDto;
import emsBackend.Exception.EmployeeException;
import emsBackend.Repository.EmployeeRepository;
import emsBackend.entity.Employee;
import jakarta.transaction.Transactional;

@Service(value = "employeeService")
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	public Integer addEmployee(EmployeeDto employeeDto) throws EmployeeException{
		Employee emp = new Employee();
		emp.setEmployeeName(employeeDto.getEmployeeName());
		emp.setContact(employeeDto.getContact());
		emp.setPlace(employeeDto.getPlace());
		
		try {
			return employeeRepository.save(emp).getEmployeeId();
		}catch(DataIntegrityViolationException e){
            if(e.getRootCause() instanceof java.sql.SQLIntegrityConstraintViolationException){
            	java.sql.SQLIntegrityConstraintViolationException sqlException = (java.sql.SQLIntegrityConstraintViolationException) e.getRootCause();
                    
                if (sqlException.getErrorCode() == 1062) {
                        // Handle duplicate entry error
                    throw new EmployeeException("Duplicate entry for contact: " + employeeDto.getContact());
                }
            }
            throw e;
		}	
	}

	@Override
	public List<EmployeeDto> getAllEmployee() throws EmployeeException {
		Iterable<Employee> emlpoyee = employeeRepository.findAll();
		List<EmployeeDto> employeeList = new ArrayList<>();
		
		emlpoyee.forEach(e -> {
			EmployeeDto empDto = new EmployeeDto();
			empDto.setId(e.getEmployeeId());
			empDto.setContact(e.getContact());
			empDto.setEmployeeName(e.getEmployeeName());
			empDto.setPlace(e.getPlace());
			
			employeeList.add(empDto);
		});
		
		if(employeeList.isEmpty())
			throw new EmployeeException("employee list empty");
		return employeeList;
	}


	@Override
	public EmployeeDto getEmployee(String name) throws EmployeeException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteEmployee(Integer id) {
		try {
			if (!employeeRepository.existsById(id)) {
                throw new EmployeeException("Employee not found with ID:" + id);
			}
			employeeRepository.deleteById(id);
		}
		catch(DataIntegrityViolationException e) {
			throw new EmployeeException("error deleting employee with id"+id);
		}
	}

	@Override
	public void updateEmployee(Integer id, EmployeeDto employeeDto) {
		try {
			
			Employee employee = employeeRepository.findById(id).orElse(null);
			
			if(employee == null) {
				throw new EmployeeException("Employee not found with ID:" + id);
			}
			System.out.println("EmployeeDto received: " + employeeDto);

			if(employeeDto.getContact() != null)
				employee.setContact(employeeDto.getContact());
				
			if(employeeDto.getEmployeeName() != null)
				employee.setEmployeeName(employeeDto.getEmployeeName());
				
			if(employeeDto.getPlace() != null)
				employee.setPlace(employeeDto.getPlace());
			
			employeeRepository.save(employee);
		}
		catch(DataIntegrityViolationException e) {
			throw new EmployeeException("error updating employee with id" + id);
		}
	}
}
