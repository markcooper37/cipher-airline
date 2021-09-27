package com.day9exercise.demo;
import com.day9exercise.demo.Country.CountryController;
import com.day9exercise.demo.Customer.*;
import com.day9exercise.demo.Employee.EmployeeController;
import com.day9exercise.demo.Flight.FlightController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class DemoApplication {
	private static CustomerController customerController;
	private static CountryController countryController;
	private static EmployeeController employeeController;
	private static FlightController flightController;

	public DemoApplication(CustomerController customerController, CountryController countryController, EmployeeController employeeController, FlightController flightController) {
		DemoApplication.customerController = customerController;
		DemoApplication.countryController = countryController;
		DemoApplication.employeeController = employeeController;
		DemoApplication.flightController = flightController;
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		Start start = new Start();
		start.start(customerController, countryController, employeeController, flightController);
		}
	}
