package com.day9exercise.demo.Country;

import com.day9exercise.demo.Flight.FlightRepositoryPostgres;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Scanner;

@Service
public class CountryService {
    private final CountryRepositoryPostgres countryRepositoryPostgres;
    private final FlightRepositoryPostgres flightRepositoryPostgres;
    Scanner scanner = new Scanner(System.in);

    @Autowired
    public CountryService(CountryRepositoryPostgres countryRepositoryPostgres, FlightRepositoryPostgres flightRepositoryPostgres) {
        this.countryRepositoryPostgres = countryRepositoryPostgres;
        this.flightRepositoryPostgres = flightRepositoryPostgres;
    }

    //GET REQUEST
    public void getAllCountries(){
        for (Country value : countryRepositoryPostgres.findAll()) {
            System.out.println(value);
        }
        countryRepositoryPostgres.findAll();
    }

    //GET REQUEST
    public Optional<Country> requestedCountry(int countryId){
        countryRepositoryPostgres.findById(countryId)
                .ifPresentOrElse(country -> {
                    System.out.println("The following details are for country id: " + country.getId());
                    System.out.println("Name: " + country.getName());
                    System.out.println("Estimated travel time: " + country.getEstimatedTravelMinutes());
                    System.out.println("Departure time: " + country.getTimeDeparture());
                    System.out.println("Arrival time: " + country.getTimeArrival());
                    System.out.println("Price per person: " +country.getPrice());
                    System.out.println("Flight number: " + country.getFlightNumber());
                }, () -> {
                    System.out.println("We cannot find the country id you have entered");
                });
        return countryRepositoryPostgres.findById(countryId);
    }

    //POST REQUEST
    public void addNewCountry(Country newCountry){
        countryRepositoryPostgres.save(newCountry);
    }

    //PUT REQUEST
    public void updateCountry(int countryId, int requestedUpdate){
        countryRepositoryPostgres.findById(countryId)
                .ifPresentOrElse(country -> {
                    switch (requestedUpdate) {
                        case 1 -> {
                            System.out.println("Current Country name is " + country.getName() + "\nwould you like to change it? y/n");
                            String ans = scanner.nextLine().toLowerCase().trim();
                            if (ans.equals("y")) {
                                System.out.println("Please enter the updated name of the country");
                                String updatedName = scanner.nextLine();
                                country.setName(updatedName);
                                countryRepositoryPostgres.save(country);
                                System.out.println("Thank you, the country name has been updated to " + country.getName());
                            }
                        }
                        case 2 -> {
                            System.out.println("Current estimated time is " + country.getEstimatedTravelMinutes() + "\nWould you like to change it?y/n");
                            String input = scanner.nextLine();
                            if (input.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter the estimated duration in minutes");
                                int updatedEstimatedDuration = scanner.nextInt();
                                country.setEstimatedTravelMinutes(updatedEstimatedDuration);
                                countryRepositoryPostgres.save(country);
                                System.out.println("Thank you, the country estimated duration has been updated to " + country.getEstimatedTravelMinutes());
                            }
                        }
                        case 3 -> {
                            System.out.println("Current price is " + country.getPrice() + "\nWould you like to change it?y/n");
                            String userInput = scanner.nextLine();
                            if (userInput.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter the updated price");
                                double updatedPrice = scanner.nextDouble();
                                country.setPrice(updatedPrice);
                                countryRepositoryPostgres.save(country);
                                System.out.println("Thank you, the price has been updated to " + country.getPrice());
                            }
                        }
                        case 4 -> {
                            //Change flight number
                            System.out.println("The current flight number is " + country.getFlightNumber() + "\nWould you like to change it? y/n");
                            String userInputs = scanner.nextLine();
                            if (userInputs.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter the updated Flight number");
                                String updatedFlightNumber = scanner.nextLine();
                                country.setFlightNumber(updatedFlightNumber);
                                countryRepositoryPostgres.save(country);
                                System.out.println("Thank you, the flight number has been updated to " + country.getFlightNumber());
                            }
                        }
                        case 5 -> {
                            //Change time departure
                            System.out.println("WARNING - changing the departure time will also change the arrival time!");
                            System.out.println("The current time and date departure is " + country.getTimeDeparture() + "\nWould you like to change it? y/n");
                            String userAns = scanner.nextLine();
                            if (userAns.toLowerCase().trim().equals("y")) {
                                System.out.println("Please enter the updated date and time for this flight in YYYY-MM-DDTHH:MM");
                                String rawUpdatedLocalDateTime = scanner.nextLine();
                                LocalDateTime updatedLocalDateTime = LocalDateTime.parse(rawUpdatedLocalDateTime);
                                country.setTimeDeparture(updatedLocalDateTime);
                                country.setTimeArrival(updatedLocalDateTime);
                                countryRepositoryPostgres.save(country);
                                System.out.println("Thank you, the Departure Date and time has been updated to " + country.getTimeDeparture());
                                System.out.println("The Arrival Date and time has been updated accordingly to " + country.getTimeArrival());
                            }
                        }
                        default -> System.out.println("Please select one of the available options.");
                    }
                }, () -> {
                    System.out.println(countryId + " cannot be found in our database.");
                });
    }

    //DELETE REQUEST
    public void deleteCountry(int countryId){
        countryRepositoryPostgres.findById(countryId)
                .ifPresentOrElse(country -> {
                    System.out.println("Are you sure you want to delete " + country + "?");
                    String ans = scanner.nextLine();
                    if (ans.toLowerCase().trim().equals("y")) {
                        if (flightRepositoryPostgres.findAllByCountryId(countryId).size() == 0) {
                            countryRepositoryPostgres.delete(country);
                            System.out.println(country + " has been successfully deleted.");
                        } else {
                            System.out.println("Cannot delete country as it is tied to active flights.");
                        }
                    }
                }, () -> {
                    System.out.println("Cannot find country id in our database.");
                });
    }
}
