package emsBackend.Repository;

import org.springframework.data.repository.CrudRepository;

import emsBackend.entity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer>{

}