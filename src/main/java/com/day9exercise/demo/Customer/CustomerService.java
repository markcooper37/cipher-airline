package com.day9exercise.demo.Customer;

import com.day9exercise.demo.Flight.Flight;
import com.day9exercise.demo.Flight.FlightRepositoryPostgres;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class CustomerService {

    Scanner scanner = new Scanner(System.in);
    private final CustomerRepositoryPostgres customerRepositoryPostgres;
    private final FlightRepositoryPostgres flightRepositoryPostgres;

    @Autowired
    public CustomerService(CustomerRepositoryPostgres customerRepositoryPostgres, FlightRepositoryPostgres flightRepositoryPostgres){
        this.customerRepositoryPostgres = customerRepositoryPostgres;
        this.flightRepositoryPostgres = flightRepositoryPostgres;
    }

//    public CustomerService(CustomerRepositoryPostgres customerRepositoryPostgres){
//        this.customerRepositoryPostgres = customerRepositoryPostgres;
//    }

    public List<Customer> getFullListCustomer(){
        for (Customer customer : customerRepositoryPostgres.findAll()) {
            System.out.println(customer);
        }
        return customerRepositoryPostgres.findAll();
    }

    public Optional<Customer> requestedCustomer(String customerPassport) {
        customerRepositoryPostgres.findCustomerByPassport(customerPassport)
                .ifPresentOrElse(customer -> {
                    System.out.println("Customer's id: " + customer.getId());
                    System.out.println("Customer's first name: " + customer.getFirstName());
                    System.out.println("Customer's last name: " + customer.getLastName());
                    System.out.println("Customer's passport: " + customer.getPassport());
                    System.out.println("Customer's date of birth: " + customer.getDob());
                    System.out.println("Customer's age: " + customer.getAge());
                    List<Flight> customersFlight = flightRepositoryPostgres.findAllByCustomersId(customer.getId());
                    for(int i=0; i < customersFlight.size(); i++){
                        System.out.println("Customer's flight number, if any: " + customersFlight.get(i).getCustomerFlightNumber());
                    }
                }, () -> {
                    System.out.println("We were unable to find any customer linked to " + customerPassport);
                });
        return customerRepositoryPostgres.findCustomerByPassport(customerPassport);
    }


    public String greetCustomer(String customerPassport){
        AtomicReference<String> result = new AtomicReference<>(new String());
        customerRepositoryPostgres.findCustomerByPassport(customerPassport)
                .ifPresentOrElse(customer -> {
                    result.set("Hello " + customer.getFirstName() + "!");
                    System.out.println("Hello " + customer.getFirstName() + "!");
                }, () -> {
                    System.out.println("Customer with " + customerPassport + "is not within our database.");
                    throw new IllegalStateException("Customer with " + customerPassport + "is not within our database.");
                    });
       return result.get();
    }

    public int addNewCustomer(Customer newCustomer){
        customerRepositoryPostgres.findCustomerByPassport(newCustomer.getPassport())
                        .ifPresentOrElse(customer -> {
                            throw new IllegalStateException("Person with passport number: " + newCustomer.getPassport() + " is already registered.");
                        }, () -> {
                            if(     newCustomer.getFirstName() != null &&
                                    newCustomer.getLastName() != null &&
                                    newCustomer.getDob() != null &&
                                    newCustomer.getPassport() != null
                            ){
                                customerRepositoryPostgres.save(newCustomer);
                            } else {
                                throw new IllegalStateException("Person cannot have the following as empty fields\nFirst name\nLast name\nDate of birth\nPassport\n");
                            }});
        return 1;
    }

    public void updateCustomer(int customerId, int customerUpdateRequired){
            customerRepositoryPostgres.findById(customerId)
                    .ifPresentOrElse(requiredCustomer -> {
                        switch (customerUpdateRequired) {
                            case 1 -> {
                                System.out.println("Currently the customer first name is " + requiredCustomer.getFirstName());
                                System.out.println("Please enter their updated first name");
                                String customerUpdatedFirstName = scanner.nextLine();
                                if (customerUpdatedFirstName != null) {
                                    requiredCustomer.setFirstName(customerUpdatedFirstName);
                                    customerRepositoryPostgres.save(requiredCustomer);
                                    System.out.println("Customer's first name has been updated\n" + requiredCustomer);
                                } else {
                                    System.out.println("Please enter first name");
                                }
                            }
                            case 2 -> {
                                System.out.println("Currently the customer surname is " + requiredCustomer.getLastName());
                                System.out.println("Please enter their updated surname");
                                String customerUpdatedLastName = scanner.nextLine();
                                if (customerUpdatedLastName != null) {
                                    requiredCustomer.setLastName(customerUpdatedLastName);
                                    customerRepositoryPostgres.save(requiredCustomer);
                                    System.out.println("Customer's surname has been updated\n" + requiredCustomer);
                                } else {
                                    System.out.println("Please enter surname");
                                }
                            }
                            case 3 -> {
                                System.out.println("Currently the customer passport is " + requiredCustomer.getPassport());
                                System.out.println("Please enter their updated passport number");
                                String customerUpdatedPassport = scanner.nextLine();
                                if (customerUpdatedPassport != null) {
                                    requiredCustomer.setPassport(customerUpdatedPassport);
                                    customerRepositoryPostgres.save(requiredCustomer);
                                    System.out.println("Customer's passport number has been updated" + requiredCustomer);
                                } else {
                                    System.out.println("Please enter passport");
                                }
                            }
                        }
                    }, () -> {
                        System.out.println("Customer with " + customerId + " is not registered within our system.");
                    });
        }

    public void deleteCustomer(String customerPassport){
        AtomicReference<String> result = new AtomicReference<>(new String());
        customerRepositoryPostgres.findCustomerByPassport(customerPassport)
                .ifPresentOrElse(findCustomer -> {
                    if(flightRepositoryPostgres.findAllByCustomersId(findCustomer.getId()).size() == 0){
                        customerRepositoryPostgres.delete(findCustomer);
                    } else {
                        System.out.println("Customer with passport " + findCustomer.getPassport() + " cannot be deleted as they still have flights.\nTo delete customer, flights associated to them must be cancelled.");
                        result.set("Customer with passport " + findCustomer.getPassport() + " cannot be deleted as they still have flights.\nTo delete customer, flights associated to them must be cancelled.");
                    }
                }, () -> {
                    System.out.println("Customer with passport number " + customerPassport + " does not exist");
                    result.set("Customer with passport number " + customerPassport + " does not exist");
                });
    }

}
