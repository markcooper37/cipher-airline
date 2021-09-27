package com.day9exercise.demo.Country;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity(name = "Country")
@Table(name = "country", uniqueConstraints = {
        @UniqueConstraint(name = "country_flightNumber_unique", columnNames = "flight_number")})
public class Country {
    @Id
    @SequenceGenerator(name="country_sequence",
            sequenceName = "country_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE, generator = "country_sequence"
    )
    @Column(name = "id", updatable = false)
    private int id;
    @Column(name = "country_name", nullable = false, columnDefinition = "TEXT")
    private String name;
    @Column(name = "estimated_travel", nullable = false)
    private int estimatedTravelMinutes;
    @Column(name = "price", nullable = false)
    private double price;
    @Column(name = "time_departure", nullable = false)
    private LocalDateTime timeDeparture;
    @Column(name = "time_arrival", nullable = false)
    private LocalDateTime timeArrival;
    @Column(name = "flight_number", nullable = false)
    private String flightNumber;

    public Country(@JsonProperty("country_name") String name,
                   @JsonProperty("estimated_travel") int estimatedTravelMinutes,
                   @JsonProperty("price") double price,
                   @JsonProperty("time_departure") LocalDateTime timeDeparture,
                   @JsonProperty("time_arrival") LocalDateTime timeArrival,
                   @JsonProperty("flight_number") String flightNumber) {
        this.name = name;
        this.estimatedTravelMinutes = estimatedTravelMinutes;
        this.price = price;
        this.timeArrival = timeArrival;
        this.timeDeparture = timeDeparture;
        this.flightNumber = flightNumber;
    }

    public Country() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getEstimatedTravelMinutes() {
        return estimatedTravelMinutes;
    }

    public void setEstimatedTravelMinutes(int estimatedTravelMinutes) {
        this.estimatedTravelMinutes = estimatedTravelMinutes;
    }
    public double getPrice(){
        return price;
    }
    public void setPrice(double price){
        this.price = price;
    }

    public LocalDateTime getTimeArrival() {
        return timeArrival;
    }

    public void setTimeArrival(LocalDateTime timeDeparture) {
        this.timeArrival = timeDeparture.plusMinutes(this.estimatedTravelMinutes);
    }

    public LocalDateTime getTimeDeparture() {
        return timeDeparture;
    }

    public void setTimeDeparture(LocalDateTime timeDeparture) {
        this.timeDeparture = timeDeparture;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Country country = (Country) o;
        return id == country.id && estimatedTravelMinutes == country.estimatedTravelMinutes && Double.compare(country.price, price) == 0 && Objects.equals(name, country.name) && Objects.equals(timeDeparture, country.timeDeparture) && Objects.equals(timeArrival, country.timeArrival);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, estimatedTravelMinutes, price, timeDeparture, timeArrival);
    }

    @Override
    public String toString() {
        return "Country{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", estimatedTravelMinutes=" + estimatedTravelMinutes +
                ", price=" + price +
                ", timeDeparture=" + timeDeparture +
                ", timeArrival=" + timeArrival +
                '}';
    }

}
