package com.day9exercise.demo.Flight;

import com.day9exercise.demo.Country.Country;
import com.day9exercise.demo.Country.CountryRepositoryPostgres;
import com.day9exercise.demo.Customer.Customer;
import jdk.jfr.Enabled;
import org.springframework.data.relational.core.sql.In;

import javax.persistence.*;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Entity(name = "Flight")
@Table(name = "flight")
public class Flight {
    @Id
    @SequenceGenerator(name="flight_sequence",
    sequenceName = "flight_sequence",
    allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE, generator = "flight_sequence"
    )
    @Column(name = "id", updatable = false)
    private int flightId;
    @Column(name = "country_id")
    private int countryId;
    @Column(name = "customer_id")
    private int customersId;
    @Column(name = "return_ticket")
    private boolean withReturnTicket;
    @Column(name = "return_time_departure")
    private LocalDateTime returnTimeDeparture;
    @Column(name = "return_time_arrival")
    private LocalDateTime returnTimeArrival;
    @Column(name = "number_of_passengers")
    private int numberOfPassenger;
    @Column(name="total_price")
    private double totalPrice;
    @Column(name = "customer_flight_number")
    private String customerFlightNumber;

    public Flight(int countryId, int customersId, boolean withReturnTicket, LocalDateTime returnTimeDeparture, LocalDateTime returnTimeArrival, int numberOfPassenger,  double totalPrice, String customerFlightNumber) {
        this.countryId = countryId;
        this.customersId = customersId;
        this.withReturnTicket = withReturnTicket;
        this.returnTimeDeparture = returnTimeDeparture;
        this.returnTimeArrival = returnTimeArrival;
        this.totalPrice = totalPrice;
        this.numberOfPassenger = numberOfPassenger;
        this.customerFlightNumber = customerFlightNumber;
    }

    public Flight(int countryId, int customersId, boolean withReturnTicket, int numberOfPassenger, double totalPrice, String customerFlightNumber) {
        this.countryId = countryId;
        this.customersId = customersId;
        this.withReturnTicket = withReturnTicket;
        this.numberOfPassenger = numberOfPassenger;
        this.totalPrice = totalPrice;
        this.customerFlightNumber = customerFlightNumber;
    }

    public Flight() {
    }

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public int getCountryId() {
        return countryId;
    }

    public void setCountryId(int countryId) {
        this.countryId = countryId;
    }

    public int getCustomersId() {
        return customersId;
    }

    public void setCustomersId(int customersId) {
        this.customersId = customersId;
    }

    public boolean isWithReturnTicket() {
        return withReturnTicket;
    }

    public void setWithReturnTicket(boolean withReturnTicket) {
        this.withReturnTicket = withReturnTicket;
    }

    public LocalDateTime getReturnTimeDeparture() {
        return returnTimeDeparture;
    }

    public void setReturnTimeDeparture(LocalDateTime returnTimeDeparture) {
        this.returnTimeDeparture = returnTimeDeparture;
    }

    public LocalDateTime getReturnTimeArrival() {
        return returnTimeArrival;
    }

    public void setReturnTimeArrival(LocalDateTime returnTimeArrival) {

        this.returnTimeArrival = returnTimeArrival;
    }

    public int getNumberOfPassenger() {
        return numberOfPassenger;
    }

    public void setNumberOfPassenger(int numberOfPassenger) {
        this.numberOfPassenger = numberOfPassenger;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getCustomerFlightNumber() {
        return customerFlightNumber;
    }

    public void setCustomerFlightNumber(String customerFlightNumber) {
        this.customerFlightNumber = customerFlightNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Flight flight = (Flight) o;
        return flightId == flight.flightId && countryId == flight.countryId && customersId == flight.customersId && withReturnTicket == flight.withReturnTicket && numberOfPassenger == flight.numberOfPassenger && Double.compare(flight.totalPrice, totalPrice) == 0 && Objects.equals(returnTimeDeparture, flight.returnTimeDeparture) && Objects.equals(returnTimeArrival, flight.returnTimeArrival) && Objects.equals(customerFlightNumber, flight.customerFlightNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(flightId, countryId, customersId, withReturnTicket, returnTimeDeparture, returnTimeArrival, numberOfPassenger, totalPrice, customerFlightNumber);
    }

    @Override
    public String toString() {
        return "Flight{" +
                "flightId=" + flightId +
                ", countryId=" + countryId +
                ", customersId=" + customersId +
                ", withReturnTicket=" + withReturnTicket +
                ", returnTimeDeparture=" + returnTimeDeparture +
                ", returnTimeArrival=" + returnTimeArrival +
                ", numberOfPassenger=" + numberOfPassenger +
                ", totalPrice=" + totalPrice +
                ", customerFlightNumber='" + customerFlightNumber + '\'' +
                '}';
    }
}
