package com.day9exercise.demo.Flight;

import org.javatuples.Ennead;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping(path = "flights")
public record FlightController(FlightService flightService) {

    @Autowired
    public FlightController {
    }

    @GetMapping("/list")
    public List<Flight> getListFlights(){

        return flightService.getListFlights();
    }

    @GetMapping("/userId")
    public ArrayList<Ennead<AtomicInteger, AtomicReference, AtomicReference,
                            AtomicReference, AtomicReference, AtomicInteger,
                            AtomicReference, AtomicReference, AtomicReference>> viewCustomerFlight(@RequestParam int customerId){

        return(flightService.viewCustomerFlight(customerId));
    }

    @PostMapping
    public void addNewFlight(Flight flight){
        flightService.addNewFlight(flight);
    }

    @PutMapping
    public void updatedFlight(int customerFlightId){
        flightService.updateFlight(customerFlightId);
    }

    @DeleteMapping("/byCustomerFlightNumber")
    public void deleteFlightByCustomerFlightNumber(int customerId, String customerFlightNumber){
        flightService.deleteCustomerFlightByFlightNumber(customerId, customerFlightNumber);
    }

}
