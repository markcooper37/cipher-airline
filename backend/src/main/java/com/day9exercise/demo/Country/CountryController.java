package com.day9exercise.demo.Country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RequestMapping("api/country")
@RestController
public record CountryController(CountryService countryService) {

    @Autowired
    public CountryController {

    }
    @GetMapping("/explore")
    public ArrayList<Country> listAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/country")
    public Optional<Country> requestedCountry(int countryId){
        return countryService.requestedCountry(countryId);
    }

    @PostMapping
    public void insertNewCountry(Country newCountry){
        countryService.addNewCountry(newCountry);
    }

    @PutMapping
    public void updateCountry(int countryId, int requestedUpdate){
        countryService.updateCountry(countryId, requestedUpdate);
    }

    @DeleteMapping
    public void deleteCountry(int countryId){
        countryService.deleteCountry(countryId);
    }

}

