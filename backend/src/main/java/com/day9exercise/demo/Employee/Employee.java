package com.day9exercise.demo.Employee;

import javax.persistence.*;
import java.util.Objects;

@Entity(name = "Employee")
@Table(name = "employee", uniqueConstraints = {
        @UniqueConstraint(name = "employee_national_insurance_number_unique", columnNames = "national_insurance_number")
})
public class Employee {
    @Id
    @SequenceGenerator(name="employee_sequence",
            sequenceName = "employee_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE, generator = "employee_sequence"
    )
    @Column(name = "id", updatable = false)
    private int id;
    @Column(name = "username", nullable = false, columnDefinition = "TEXT")
    private String username;
    @Column(name = "password", nullable = false, columnDefinition = "TEXT")
    private String password;
    @Column(name = "first_name", nullable = false, columnDefinition = "TEXT")
    private String employeeFirstName;
    @Column(name = "last_name", nullable = false, columnDefinition = "TEXT")
    private String employeeLastName;
    @Column(name = "national_insurance_number", nullable = false, columnDefinition = "TEXT")
    private String nationalInsuranceNumber;
    @Column(name = "current_employee", nullable = false)
    private boolean currentEmployee;

    public Employee(String username, String password, String employeeFirstName, String employeeLastName, String nationalInsuranceNumber, boolean currentEmployee) {
        this.username = username;
        this.password = password;
        this.employeeFirstName = employeeFirstName;
        this.employeeLastName = employeeLastName;
        this.nationalInsuranceNumber = nationalInsuranceNumber;
        this.currentEmployee = currentEmployee;
    }

    public Employee() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmployeeFirstName() {
        return employeeFirstName;
    }

    public void setEmployeeFirstName(String employeeFirstName) {
        this.employeeFirstName = employeeFirstName;
    }

    public String getEmployeeLastName() {
        return employeeLastName;
    }

    public void setEmployeeLastName(String employeeLastName) {
        this.employeeLastName = employeeLastName;
    }

    public String getNationalInsuranceNumber() {
        return nationalInsuranceNumber;
    }

    public void setNationalInsuranceNumber(String nationalInsuranceNumber) {
        this.nationalInsuranceNumber = nationalInsuranceNumber;
    }

    public boolean isCurrentEmployee() {
        return currentEmployee;
    }

    public void setCurrentEmployee(boolean currentEmployee) {
        this.currentEmployee = currentEmployee;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return id == employee.id && currentEmployee == employee.currentEmployee && Objects.equals(username, employee.username) && Objects.equals(password, employee.password) && Objects.equals(employeeFirstName, employee.employeeFirstName) && Objects.equals(employeeLastName, employee.employeeLastName) && Objects.equals(nationalInsuranceNumber, employee.nationalInsuranceNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, employeeFirstName, employeeLastName, nationalInsuranceNumber, currentEmployee);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", employeeFirstName='" + employeeFirstName + '\'' +
                ", employeeLastName='" + employeeLastName + '\'' +
                ", nationalInsuranceNumber='" + nationalInsuranceNumber + '\'' +
                ", currentEmployee=" + currentEmployee +
                '}';
    }
}
