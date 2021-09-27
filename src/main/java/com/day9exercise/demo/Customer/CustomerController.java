package com.day9exercise.demo.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RequestMapping("api/customers")
@RestController
public record CustomerController(CustomerService customerService) {

    @Autowired
    public CustomerController {
    }

    @GetMapping
    public void listAllCustomers() {
        customerService.getFullListCustomer();
    }

    @GetMapping(path = "/customer")
    public Optional<Customer> requestedCustomer(String customerPassport) {
        return customerService.requestedCustomer(customerPassport);
    }

    @GetMapping(path = "/greetCustomer")
    public void greetCustomer(String customerPassport) {
        customerService.greetCustomer(customerPassport);
    }


    @PostMapping
    public void addNewCustomer(Customer newCustomer) {
        customerService.addNewCustomer(newCustomer);
    }


    @PutMapping
    public void updateCustomer(int customerId, int customerUpdateRequired){
        customerService.updateCustomer(customerId, customerUpdateRequired);
    }

    @DeleteMapping
    public void deleteCustomer(String customerPassport){
        customerService.deleteCustomer(customerPassport);
    }

}
