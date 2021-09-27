package com.day9exercise.demo.Flight;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FlightRepositoryPostgres extends JpaRepository<Flight, Integer> {
    Optional<Flight> findFlightByCustomerFlightNumber(String flightNumber);
    List<Flight> findAllByCustomersId(int customersId);
    List<Flight> findAllByCountryId(int countryId);
}
