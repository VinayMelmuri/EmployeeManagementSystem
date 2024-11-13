package com.example.emsBackend;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;  // Ensure this import is present

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import emsBackend.EmsBackendApplication;
import emsBackend.Api.EmployeeApi;
import emsBackend.Dto.EmployeeDto;
//import emsBackend.Exception.EmployeeException;
import emsBackend.Repository.EmployeeRepository;
import emsBackend.Service.EmployeeServiceImpl;
import emsBackend.entity.Employee;
//import jakarta.transaction.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
//@Transactional
@ContextConfiguration(classes = {EmsBackendApplication.class})
@ActiveProfiles("test")
public class EmployeeApiTest {

	 @Autowired
	 private MockMvc mockMvc;
	 
	 @Mock
	 private EmployeeServiceImpl employeeService;
	 
	 @Mock
	 private EmployeeRepository employeeRepository;
	 
	 @InjectMocks
	 private EmployeeApi employeeApi;
	 
	 private EmployeeDto employeeDto;
	 private ObjectMapper objectMapper;
	 
	 @BeforeEach
	 public void setUp() {
		 
		 MockitoAnnotations.openMocks(this);
		 objectMapper = new ObjectMapper();
		 employeeDto = new EmployeeDto();
	     employeeDto.setEmployeeName("John Doe");
	     employeeDto.setContact("123456789");
	     employeeDto.setPlace("City");
//	     when(employeeService.addEmployee(any(EmployeeDto.class))).thenReturn(1);
	 }
	 
	 @Test
	 public void testAddEmployee() throws Exception{
		 
		when(employeeService.addEmployee(any(EmployeeDto.class))).thenReturn(1);

		 mockMvc.perform(post("/employeeDet/employee")
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(objectMapper.writeValueAsString(employeeDto)))
	                .andExpect(status().isCreated());
	 }
	 
	 @Test
	 public void testUpdateEmployee() throws Exception{
		 
		    EmployeeDto updateEmployeeDto = new EmployeeDto();
		   		    
		    updateEmployeeDto.setId(1);
		    updateEmployeeDto.setEmployeeName("John Updated");
		    updateEmployeeDto.setContact(null);
		    updateEmployeeDto.setPlace(null);
		    
		    EmployeeDto updatedEmployeeDto = new EmployeeDto();
		    updatedEmployeeDto.setId(1);
		    updatedEmployeeDto.setEmployeeName("John Updated");
		    updatedEmployeeDto.setContact("123456789");
		    updatedEmployeeDto.setPlace("City");
		    
		    Integer id = updateEmployeeDto.getId();
		    
		    // Mock the service to simulate a successful update (no exceptions)
		    when(employeeService.updateEmployee(anyInt(), any(EmployeeDto.class)))
            .thenReturn(updatedEmployeeDto);		    
		    	
		    mockMvc.perform(put("/employeeDet/update")
		            .contentType(MediaType.APPLICATION_JSON)
		            .content(objectMapper.writeValueAsString(updateEmployeeDto)))
		            .andExpect(status().isOk())  // Expecting 200 OK
		            .andExpect(content().json(objectMapper.writeValueAsString(updatedEmployeeDto)));
	   
	 }
}