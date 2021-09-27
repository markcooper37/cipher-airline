package com.day9exercise.demo.Country;

import com.day9exercise.demo.Customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CountryRepositoryPostgres extends JpaRepository<Country, Integer> {

    Optional<Country> findCountryByName(String countryName);

}
