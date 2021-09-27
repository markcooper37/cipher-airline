package com.day9exercise.demo.Employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepositoryPostgres extends JpaRepository <Employee, Integer> {
}
