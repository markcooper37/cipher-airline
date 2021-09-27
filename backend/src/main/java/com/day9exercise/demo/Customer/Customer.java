package com.day9exercise.demo.Customer;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;
import java.util.Objects;

@Entity(name = "Customer")
@Table(name = "customer", uniqueConstraints = {
        @UniqueConstraint(name = "customer_passport_unique", columnNames = "passport")
})
public class Customer {
    @Id
    @SequenceGenerator(name="customer_sequence",
            sequenceName = "customer_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE, generator = "customer_sequence"
    )
    @Column(name = "id", updatable = false)
    private int id;
    @Column(name = "first_name", nullable = false, columnDefinition = "TEXT")
    private String firstName;
    @Column(name = "last_name", nullable = false,  columnDefinition = "TEXT")
    private String lastName;
    @Column(name = "dob", nullable = false,  columnDefinition = "TEXT")
    private LocalDate dob;
    @Column(name = "age")
    private int age;
    @Column(name = "passport", nullable = false,  columnDefinition = "TEXT")
    private String passport;

    public Customer(@JsonProperty("firstName") String firstName,
                    @JsonProperty("lastName")String lastName,
                    @JsonProperty("dob")LocalDate dob,
                    @JsonProperty("passport")String passport) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.age = Period.between(dob, LocalDate.now()).getYears();
        this.passport = passport;
    }

    public Customer() {
    }

    public int getId() {

        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public int getAge() {
        return age;
    }

    public int setAge(LocalDate dob) {
        return Period.between(dob, LocalDate.now()).getYears();
    }

    public String getPassport() {
        return passport;
    }

    public void setPassport(String passport) {
        this.passport = passport;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Customer customer = (Customer) o;
        return id == customer.id && age == customer.age && Objects.equals(firstName, customer.firstName) && Objects.equals(lastName, customer.lastName) && Objects.equals(dob, customer.dob) && Objects.equals(passport, customer.passport);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, dob, age, passport);
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob=" + dob +
                ", age=" + age +
                ", passport='" + passport + '\'' +
                '}';
    }

}