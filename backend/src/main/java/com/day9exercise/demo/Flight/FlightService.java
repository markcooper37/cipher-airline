package com.day9exercise.demo.Flight;

import com.day9exercise.demo.Country.CountryRepositoryPostgres;
import com.day9exercise.demo.Customer.CustomerRepositoryPostgres;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.javatuples.Ennead;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class FlightService {

    private final FlightRepositoryPostgres flightRepositoryPostgres;
    private final CountryRepositoryPostgres countryRepositoryPostgres;
    private final CustomerRepositoryPostgres customerRepositoryPostgres;

    @Autowired
    public FlightService(FlightRepositoryPostgres flightRepositoryPostgres, CountryRepositoryPostgres countryRepositoryPostgres, CustomerRepositoryPostgres customerRepositoryPostgres){
        this.flightRepositoryPostgres = flightRepositoryPostgres;
        this.countryRepositoryPostgres = countryRepositoryPostgres;
        this.customerRepositoryPostgres = customerRepositoryPostgres;
    }

    public List<Flight> getListFlights(){
        return flightRepositoryPostgres.findAll();
    }

    public void addNewFlight(Flight flight){
        flightRepositoryPostgres.save(flight);
    }


    public ArrayList<Ennead<Integer, String, String, LocalDateTime, LocalDateTime, Integer, LocalDateTime, LocalDateTime, Double>> viewCustomerFlight(int customerId){


        /* ArrayList<Ennead<AtomicInteger, AtomicReference, AtomicReference, AtomicReference, AtomicReference,
                  AtomicInteger, AtomicReference, AtomicReference, AtomicReference>> bookedFlightsDetails = new ArrayList<Ennead<AtomicInteger, AtomicReference, AtomicReference, AtomicReference, AtomicReference,
                                                                                                                                 AtomicInteger, AtomicReference, AtomicReference, AtomicReference>>(); */
        ArrayList<Ennead<Integer, String, String, LocalDateTime, LocalDateTime, Integer, LocalDateTime, LocalDateTime, Double>> bookedFlightsDetails = new ArrayList<>();

        /* AtomicInteger flightId = new AtomicInteger();
        AtomicReference<String> customerFlightNumber = new AtomicReference<>();
        AtomicReference<String> countryName = new AtomicReference<>();
        AtomicReference<LocalDateTime> departureTime = new AtomicReference<>();
        AtomicReference<LocalDateTime> arrivalTime = new AtomicReference<>();
        AtomicInteger numberOfPassengers = new AtomicInteger();
        AtomicReference<LocalDateTime> returnArrivalTime = new AtomicReference<>();
        AtomicReference<LocalDateTime> returnDepartureTime = new AtomicReference<>();
        AtomicReference<Double> totalPrice = new AtomicReference<>(); */

        AtomicReference<String> countryName = new AtomicReference<>();
        AtomicReference<LocalDateTime> departureTime = new AtomicReference<>();
        AtomicReference<LocalDateTime> arrivalTime = new AtomicReference<>();

        customerRepositoryPostgres.findById(customerId)
                .ifPresentOrElse(customer -> {
                    System.out.println("First name : " + customer.getFirstName());
                    System.out.println("Last name: " + customer.getLastName());
                    System.out.println("Date of birth: " + customer.getDob());
                    System.out.println("Passport number: " + customer.getPassport() + "\n\n");
                }, () -> {
                    System.out.println("There was an issue finding your customer id in our system.");
                });

        flightRepositoryPostgres.findAllByCustomersId(customerId)
                .stream().allMatch(flight -> {
                    if(flight.getCustomersId() == customerId){
                        Integer flightId = flight.getFlightId();
                        String customerFlightNumber = flight.getCustomerFlightNumber();
                        /* flightId.set(flight.getFlightId());
                        customerFlightNumber.set(flight.getCustomerFlightNumber()); */
                        System.out.println("Your flight id is: " + flight.getFlightId());
                        System.out.println("Your flight number is: " + flight.getCustomerFlightNumber());

                        countryRepositoryPostgres.findById(flight.getCountryId())
                                .ifPresentOrElse(country -> {

                                    countryName.set(country.getName());
                                    departureTime.set(country.getTimeDeparture());
                                    arrivalTime.set(country.getTimeArrival());
                                    /* countryName.set(country.getName());
                                    departureTime.set(country.getTimeDeparture());
                                    arrivalTime.set(country.getTimeArrival()); */
                                    System.out.println("Destination: " + country.getName());
                                    System.out.println("Expected Departure time: " + country.getTimeDeparture());
                                    System.out.println("Expected Arrival time: " + country.getTimeArrival());
                                }, () -> {
                                    System.out.println("Sorry we could not find your country id");
                                });
                        Integer numberOfPassengers = flight.getNumberOfPassenger();
                        LocalDateTime returnTimeDeparture = flight.getReturnTimeDeparture();
                        LocalDateTime returnTimeArrival = flight.getReturnTimeDeparture();
                        Double totalPrice = flight.getTotalPrice();
                        /* numberOfPassengers.set(flight.getNumberOfPassenger());
                        returnDepartureTime.set(flight.getReturnTimeDeparture());
                        returnArrivalTime.set(flight.getReturnTimeArrival());
                        totalPrice.set(flight.getTotalPrice()); */
                        System.out.println("Total amount of passenger: " + flight.getNumberOfPassenger());
                        System.out.println("Return expected departure time: " + flight.getReturnTimeDeparture());
                        System.out.println("Return expected ticket arrival time: " + flight.getReturnTimeArrival());
                        System.out.println("Total price £" + flight.getTotalPrice() + "\n\n");

                        String newCountryName = countryName.get();
                        LocalDateTime newDepartureTime = departureTime.get();
                        LocalDateTime newArrivalTime = arrivalTime.get();

                        Ennead<Integer, String, String, LocalDateTime, LocalDateTime, Integer, LocalDateTime, LocalDateTime, Double> customerFlightDetails = new Ennead<>(flightId, customerFlightNumber, newCountryName, newDepartureTime, newArrivalTime, numberOfPassengers, returnTimeDeparture, returnTimeArrival, totalPrice);
                        bookedFlightsDetails.add(customerFlightDetails);

                    } else {
                        System.out.println("We were unable to find any customer id matches");
                    }

                    /* Ennead<AtomicInteger, AtomicReference, AtomicReference, AtomicReference, AtomicReference,
                            AtomicInteger, AtomicReference, AtomicReference, AtomicReference> customerFlightDetails = new Ennead<AtomicInteger, AtomicReference, AtomicReference, AtomicReference, AtomicReference, AtomicInteger,
                            AtomicReference, AtomicReference, AtomicReference>(flightId, customerFlightNumber, countryName, departureTime, arrivalTime,
                            numberOfPassengers, returnDepartureTime, returnArrivalTime, totalPrice);

                    bookedFlightsDetails.add(customerFlightDetails); */




                    return true;
                }
                );

        return bookedFlightsDetails;
    }


    public void updateFlight(int customerFlightId){
        Scanner scanner = new Scanner(System.in);
        flightRepositoryPostgres.findAll().forEach(flight -> {
            if(flight.getFlightId() == customerFlightId){
                countryRepositoryPostgres.findById(flight.getCountryId())
                        .ifPresentOrElse(country -> {
                            System.out.println("You're about to update " + flight);
                            System.out.println("Do you want to \n1. add/update\n2. remove your return ticket\n3. keep it the same");
                            int userInput = scanner.nextInt();
                            switch(userInput){
                                case 1:
                                    System.out.println("Please select one of the following for return time and date");
                                    LocalDateTime returnTimeDate1 = country.getTimeDeparture().plusDays(2).plusMinutes(90);
                                    LocalDateTime returnTimeDate2 = country.getTimeDeparture().plusDays(7).plusMinutes(150);
                                    LocalDateTime returnTimeDate3 = country.getTimeDeparture().plusDays(15).plusMinutes(45);
                                    LocalDateTime returnTimeDate4 = country.getTimeDeparture().plusDays(30).plusMinutes(210);
                                    System.out.println("Here are the available return dates\n" + "2 days stay " + returnTimeDate1 + "\n7 days stay " + returnTimeDate2 + "\n15 days stay " + returnTimeDate3 + "\n30 days stay " + returnTimeDate4 + "\n");
                                    scanner.nextLine();
                                    String rawUserNewReturn = scanner.nextLine();
                                    LocalDateTime userNewReturn = LocalDateTime.parse(rawUserNewReturn);
                                    flight.setReturnTimeDeparture(userNewReturn);
                                    LocalDateTime userNewReturnArrival = userNewReturn.plusMinutes(country.getEstimatedTravelMinutes());
                                    flight.setReturnTimeArrival(userNewReturnArrival);
                                    flight.setWithReturnTicket(true);
                                    flightRepositoryPostgres.save(flight);
                                    System.out.println("Your flight has been updated, thank you!" + "\n" + flight);
                                    break;
                                case 2:

                                    flight.setReturnTimeDeparture(null);
                                    flight.setReturnTimeArrival(null);
                                    flightRepositoryPostgres.save(flight);
                                    System.out.println("Your flight has been updated" + flight);
                                    break;
                                case 3:
                                    break;
                                    default:
                                            System.out.println("Please select a valid option");
                                            updateFlight(customerFlightId);
                                    }
                                }, () -> {
                                    System.out.println("Unable to find country by id.");
                                });
            }
        });
    };

    public void deleteCustomerFlightByFlightNumber(int customerId, String customerFlightNumber){
        flightRepositoryPostgres.findFlightByCustomerFlightNumber(customerFlightNumber)
                .ifPresentOrElse(flight -> {
                    if(flight.getCustomersId() == customerId){
                        flightRepositoryPostgres.delete(flight);
                        System.out.println("Your flight has been successfully cancelled");
                    } else {
                        System.out.println("There was an issue matching your customer id to your flight number.");
                    }
                }, () -> {
                    System.out.println("We cannot find you flight number in our database");
                });
    }

}
