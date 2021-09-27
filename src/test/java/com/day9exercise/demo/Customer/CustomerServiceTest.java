package com.day9exercise.demo.Customer;

import com.day9exercise.demo.Flight.FlightRepositoryPostgres;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

class CustomerServiceTest {

    @Mock
    private CustomerRepositoryPostgres customerRepositoryPostgres;
    @Mock
    private FlightRepositoryPostgres flightRepositoryPostgres;

    private CustomerService underTest;

    @BeforeEach
    void setUp(){
        MockitoAnnotations.openMocks(this);
        customerRepositoryPostgres = Mockito.mock(CustomerRepositoryPostgres.class);
        underTest = new CustomerService(customerRepositoryPostgres, flightRepositoryPostgres);
    }

    @Test
    void itCanSaveCustomer(){
        //GIVEN
        Customer customer = new Customer("Cindy", "Cheung", LocalDate.of(2020, 9, 25), "CHEUNG981204");
        Mockito.when(customerRepositoryPostgres.save(customer))
                .thenReturn(customer);
        //WHEN
        int result = underTest.addNewCustomer(customer);
        ArgumentCaptor<Customer> customerArgumentCaptor = ArgumentCaptor.forClass(Customer.class);
        Mockito.verify(customerRepositoryPostgres).save(customerArgumentCaptor.capture());
        Customer expectedCindy = customerArgumentCaptor.getValue();
        //THEN
        assertThat(expectedCindy).isEqualTo(customer);
        assertThat(result).isEqualTo(1);
    }

    @Test
    void throwErrorIfCustomerExist(){
        Customer customer = new Customer("Cindy", "Cheung", LocalDate.of(2020, 9, 25), "CHEUNG981204");
        Mockito.when(customerRepositoryPostgres.findCustomerByPassport(customer.getPassport()))
                .thenReturn(
                        java.util.Optional.of(new Customer("Cindy", "Cheung", LocalDate.of(2020, 9, 25), "CHEUNG981204"))
                        );
        assertThatThrownBy(() -> {
            underTest.addNewCustomer(customer);
            Mockito.when(customerRepositoryPostgres.findCustomerByPassport(customer.getPassport()));
        }).isInstanceOf(IllegalStateException.class)
                .hasMessage("Person with passport number: " + customer.getPassport() + " is already registered.");
        Mockito.verify(customerRepositoryPostgres, Mockito.never()).save(customer);
    }

    @Test
    void shouldThrowErrorIfCustomerIsNull(){
        assertThatThrownBy(() -> {
            underTest.addNewCustomer(null);
        }).isInstanceOf(NullPointerException.class);
        Mockito.verifyNoInteractions(customerRepositoryPostgres);
    }

    @Test
    void shouldThrowErrorIfCustomerFirstNameIsNull(){
        Customer newCustomer = new Customer(null, "Smith", LocalDate.of(1995, 8, 15), "SMITH891734");
        assertThatThrownBy(() -> {
            underTest.addNewCustomer(newCustomer);
        }).isInstanceOf(IllegalStateException.class)
                        .hasMessage("Person cannot have the following as empty fields\nFirst name\nLast name\nDate of birth\nPassport\n");
        Mockito.verify(customerRepositoryPostgres, Mockito.never()).save(newCustomer);
    }

    @Test
    void shouldThrowErrorIfCustomerLastNameIsNull(){
        Customer newCustomer = new Customer("Joe", null, LocalDate.of(1995, 8, 15), "SMITH891734");
        assertThatThrownBy(() -> {
            underTest.addNewCustomer(newCustomer);
        }).isInstanceOf(IllegalStateException.class)
                .hasMessage("Person cannot have the following as empty fields\nFirst name\nLast name\nDate of birth\nPassport\n");
        Mockito.verify(customerRepositoryPostgres, Mockito.never()).save(newCustomer);
    }

    // TODO: DOB NULL CAUSING ISSUES
//    @Test
//    void shouldThrowErrorIfCustomerDobIsNull(){
//        Customer newCustomer = new Customer("Joe", "King", null, "SMITH891734");
//        assertThatThrownBy(() -> {
//            underTest.addNewCustomer(newCustomer);
//        }).isInstanceOf(NullPointerException.class);
//        Mockito.verify(customerRepositoryPostgres, Mockito.never()).save(newCustomer);
//    }

    @Test
    void shouldThrowErrorIfCustomerPassportIsNull(){
        Customer newCustomer = new Customer("Joe", "King", LocalDate.of(1995, 8, 15), null);
        assertThatThrownBy(() -> {
            underTest.addNewCustomer(newCustomer);
        }).isInstanceOf(IllegalStateException.class)
                .hasMessage("Person cannot have the following as empty fields\nFirst name\nLast name\nDate of birth\nPassport\n");
        Mockito.verify(customerRepositoryPostgres, Mockito.never()).save(newCustomer);
    }

    @Test
    void canGetCustomerFromDB(){
        Mockito.when(customerRepositoryPostgres.findAll()).thenReturn(List.of(
                new Customer("Cindy", "Cheung", LocalDate.of(2020, 9, 29), "CHEUNG918041"),
                new Customer("Sara", "Holmes", LocalDate.of(2021, 8, 12), "HOLMES912483"),
                new Customer("James", "Knightly", LocalDate.of(2020, 06, 26), "KNIGHTLY124124")
                ));
        List<Customer> fullList = underTest.getFullListCustomer();
        assertThat(fullList).isEqualTo(customerRepositoryPostgres.findAll());
    }

    @Test
    void canGreetCustomerFromCustomerPassportNumber(){
        Customer customer = new Customer("Cindy", "Cheung", LocalDate.of(2020, 9, 29), "CHEUNG918041");
        Mockito.when(customerRepositoryPostgres.findCustomerByPassport(customer.getPassport()))
                .thenReturn(
                        java.util.Optional.of(new Customer("Cindy", "Cheung", LocalDate.of(2020, 9, 29), "CHEUNG918041"))
                );
        String result = underTest.greetCustomer(customer.getPassport());
        assertThat(result).isEqualTo("Hello " + customer.getFirstName() + "!");
    }

    @Test
    void shouldFailToGreetCustomerAsCustomerDoesNotExist() {
        Customer newCustomer = new Customer("Joe", "King", LocalDate.of(1995, 8, 15), "KING891412");
        assertThatThrownBy(() -> {
            underTest.greetCustomer(newCustomer.getPassport());
                }).isInstanceOf(IllegalStateException.class)
                .hasMessage("Customer with " + newCustomer.getPassport() + "is not within our database.");

    }

}