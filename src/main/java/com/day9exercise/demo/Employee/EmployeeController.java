package com.day9exercise.demo.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@RequestMapping("api/employees")
@RestController
public record EmployeeController(EmployeeService employeeService){

    @Autowired
    public EmployeeController{
    }

    @GetMapping
    public List<Employee> employeesFullList(){
        return employeeService.employeeFullList();
    }

    @GetMapping("/checkEmployee")
    public AtomicBoolean checkEmployee(int id, String username, String password){
        return employeeService.checkEmployeeLogin(id, username, password);
    }

    @PostMapping
    public void insertNewEmployee(Employee newEmployee){
        employeeService.addNewEmployee(newEmployee);
    }
    @PutMapping
    public void updateCurrentEmployees(int id, int employeeUpdate){
        employeeService.updateCurrentEmployee(id, employeeUpdate);
    }
}
