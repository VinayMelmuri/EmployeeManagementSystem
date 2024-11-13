package emsBackend.Service;

import java.util.List;

import emsBackend.Dto.EmployeeDto;
import emsBackend.Exception.EmployeeException;

public interface EmployeeService {
	public Integer addEmployee(EmployeeDto employeeDto) throws EmployeeException ;
	public List<EmployeeDto> getAllEmployee() throws EmployeeException ;
	public EmployeeDto getEmployee(Integer id) throws EmployeeException ; 
	public void deleteEmployee(Integer id) throws EmployeeException ;
	public EmployeeDto updateEmployee(Integer id,EmployeeDto employeeDto) throws EmployeeException;
}