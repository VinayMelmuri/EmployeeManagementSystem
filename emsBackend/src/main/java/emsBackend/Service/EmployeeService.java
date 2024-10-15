package emsBackend.Service;

import java.util.List;

import emsBackend.Dto.EmployeeDto;
import emsBackend.Exception.EmployeeException;

public interface EmployeeService {
	public Integer addEmployee(EmployeeDto employeeDto) throws EmployeeException ;
	public List<EmployeeDto> getAllEmployee() throws EmployeeException ;
	public EmployeeDto getEmployee(String name) throws EmployeeException ; 
	public void deleteEmployee(Integer id) throws EmployeeException ;
}
