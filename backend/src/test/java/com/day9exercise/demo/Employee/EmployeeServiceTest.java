package com.day9exercise.demo.Employee;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicBoolean;
import static org.assertj.core.api.Assertions.assertThat;

class EmployeeServiceTest {

    @Mock
    private EmployeeRepositoryPostgres employeeRepositoryPostgres;

    private EmployeeService underTest;

    @BeforeEach
    void setUp(){
        MockitoAnnotations.openMocks(this);
        employeeRepositoryPostgres = Mockito.mock(EmployeeRepositoryPostgres.class);
        underTest = new EmployeeService(employeeRepositoryPostgres);
    }

    @Test
    void canGetEmployeeFromDB(){
        Mockito.when(employeeRepositoryPostgres.findAll()).thenReturn(
                List.of(
                        new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true),
                        new Employee("TomCat", "TomCatPassword", "Tome", "Cat", "CAT7012412", false)
                ));
        List<Employee> fullList = underTest.employeeFullList();
        assertThat(fullList).isEqualTo(employeeRepositoryPostgres.findAll());
    }

    @Test
    void employeeCanLoginSuccessfully(){
        Employee mockEmployee = new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true);
        Mockito.when(employeeRepositoryPostgres.findById(2))
                .thenReturn(
                        java.util.Optional.of(new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true))
                );
        AtomicBoolean result = underTest.checkEmployeeLogin(2, mockEmployee.getUsername(), mockEmployee.getPassword());
        assertThat(result).isTrue();
    }

    @Test
    void employeeLoginUnsuccessfullyWrongUserName(){
        Employee mockEmployee = new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true);
        Mockito.when(employeeRepositoryPostgres.findById(2))
                .thenReturn(
                        java.util.Optional.of(new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true))
                );
        AtomicBoolean result = underTest.checkEmployeeLogin(2, "cindy14", mockEmployee.getPassword());
        assertThat(result).isFalse();
    }

    @Test
    void employeeLoginUnsuccessfullyWrongPassword(){
        Employee mockEmployee = new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true);
        Mockito.when(employeeRepositoryPostgres.findById(2))
                .thenReturn(
                        java.util.Optional.of(new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true))
                );
        AtomicBoolean result = underTest.checkEmployeeLogin(2, mockEmployee.getUsername(), "WrongPassword");
        assertThat(result).isFalse();
    }

    @Test
    void employeeLoginUnsuccessfullyWrongId(){
        Employee mockEmployee = new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG81924", true);
        Mockito.when(employeeRepositoryPostgres.findById(2)).thenReturn(Optional.empty());
        AtomicBoolean result = underTest.checkEmployeeLogin(2, mockEmployee.getUsername(), mockEmployee.getPassword());
        assertThat(result).isFalse();
    }

    @Test
    void canAddNewEmployee(){
        Employee mockEmployee = new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG90124", true);
        Mockito.when(employeeRepositoryPostgres.save(mockEmployee))
                .thenReturn(mockEmployee);
        underTest.addNewEmployee(mockEmployee);
        ArgumentCaptor<Employee> employeeArgumentCaptor = ArgumentCaptor.forClass(Employee.class);
        Mockito.verify(employeeRepositoryPostgres).save(employeeArgumentCaptor.capture());
        Employee expectedEmployee = employeeArgumentCaptor.getValue();
        assertThat(expectedEmployee).isEqualTo(mockEmployee);
    }

//    @Test
//    void canUpdateEmployeeUserName(){
//        Employee mockEmployee = new Employee("cindy1408", "password", "Cindy", "Cheung", "CHEUNG90124", true);
//        mockEmployee.setId(0);
//        Employee updatedEmployee = new Employee("cindy", "password", "Cindy", "Cheung", "CHEUNG90124", true);
//        Mockito.when(employeeRepositoryPostgres.findById(mockEmployee.getId()))
//                        .thenReturn(Optional.of(mockEmployee))
//                                .thenReturn(Optional.of(updatedEmployee));
//
//        underTest.updateCurrentEmployee(mockEmployee.getId(), 1);
//        employeeRepositoryPostgres.save(updatedEmployee);
//        assertThat(employeeRepositoryPostgres.save(updatedEmployee)).isEqualTo(updatedEmployee);
//    }




}