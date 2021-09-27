package com.day9exercise.demo.Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class EmployeeService {
    Scanner scanner = new Scanner(System.in);
    private final EmployeeRepositoryPostgres employeeRepositoryPostgres;

    @Autowired
    public EmployeeService(EmployeeRepositoryPostgres employeeRepositoryPostgres) {
        this.employeeRepositoryPostgres = employeeRepositoryPostgres;
    }

    //GET REQUEST
    public List<Employee> employeeFullList(){
        Iterator employee = employeeRepositoryPostgres.findAll()
                .iterator();
        while (employee.hasNext()){
            System.out.println(employee.next());
        }
        return employeeRepositoryPostgres.findAll();
    }

    public AtomicBoolean checkEmployeeLogin(int id, String username, String password){
        AtomicBoolean loggingSuccessful = new AtomicBoolean(false);
        employeeRepositoryPostgres.findById(id)
                .ifPresentOrElse(employee -> {
                    if(employee.getUsername().equals(username) && employee.getPassword().equals(password)){
                        System.out.println("Welcome " + employee.getEmployeeFirstName() + "! You have successfully logged in.");
                        loggingSuccessful.set(true);
                    }
                }, () -> {
                    System.out.println("The details you've entered are incorrect.");
                });
        return loggingSuccessful;
    }


    //POST REQUEST
    public void addNewEmployee(Employee newEmployee){
        employeeRepositoryPostgres.save(newEmployee);
    }

    //PUT REQUEST
    public void updateCurrentEmployee(int id, int updateEmployee){
        employeeRepositoryPostgres.findById(id)
                .ifPresentOrElse(employee -> {
                    switch (updateEmployee) {
                        case 1 -> {
                            System.out.println("Your current username is " + employee.getUsername() + "\nDo you want to change it? y/n");
                            String input = scanner.nextLine();
                            if (input.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter your updated username");
                                String updatedUsername = scanner.nextLine();
                                if (updatedUsername != null) {
                                    employee.setUsername(updatedUsername);
                                    employeeRepositoryPostgres.save(employee);
                                    System.out.println("Your userName has been updated to " + employee.getUsername());
                                    System.out.println(employee);
                                } else {
                                    System.out.println("Your username cannot be null.");
                                }
                            }
                        }
                        case 2 -> {
                            System.out.println("Your current password is " + employee.getPassword() + "\nDo you want to change it? y/n");
                            String password = scanner.nextLine();
                            if (password.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter your updated password");
                                String updatedPassword = scanner.nextLine();
                                if (updatedPassword != null) {
                                    employee.setPassword(updatedPassword);
                                    employeeRepositoryPostgres.save(employee);
                                    System.out.println("Your password has been updated to: " + employee.getPassword());
                                    System.out.println(employee);
                                } else {
                                    System.out.println("Password cannot be null");
                                }
                            }
                        }
                        case 3 -> {
                            System.out.println("Your current first name is " + employee.getEmployeeFirstName() + "\nDo you want to change it? y/n");
                            String employeeInput = scanner.nextLine();
                            if (employeeInput.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter your updated first name");
                                String updatedFirstName = scanner.nextLine();
                                if (updatedFirstName != null) {
                                    employee.setEmployeeFirstName(updatedFirstName);
                                    employeeRepositoryPostgres.save(employee);
                                    System.out.println("Your first name has been updated: " + employee.getEmployeeFirstName());
                                    System.out.println(employee);
                                } else {
                                    System.out.println("Your first name cannot be null");
                                }
                            }
                        }
                        case 4 -> {
                            System.out.println("Your current surname is " + employee.getEmployeeLastName() + "\nDo you want to change it? y/n");
                            String userInput = scanner.nextLine();
                            if (userInput.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter your updated password");
                                String updatedLastName = scanner.nextLine();
                                if (updatedLastName != null) {
                                    employee.setEmployeeLastName(updatedLastName);
                                    employeeRepositoryPostgres.save(employee);
                                    System.out.println("Your surname has been updated to: " + employee.getEmployeeLastName());
                                    System.out.println(employee);
                                } else {
                                    System.out.println("Your surname cannot be null");
                                }
                            }
                        }
                        case 5 -> {
                            System.out.println("Your current employee status is " + employee.isCurrentEmployee() + "\nDo you want to change it? y/n");
                            String employInput = scanner.nextLine();
                            if (employInput.toLowerCase().trim().equals("y")) {
                                boolean b = employee.isCurrentEmployee() ? false : true;
                                employee.setCurrentEmployee(b);
                                employeeRepositoryPostgres.save(employee);
                                System.out.println(employee);
                                System.out.println("Your employee status has been updated. Thank you.");
                            }
                        }
                    }
                }, () -> {
                    System.out.println("The user id is not registered in our system.");
                });
    }


}
