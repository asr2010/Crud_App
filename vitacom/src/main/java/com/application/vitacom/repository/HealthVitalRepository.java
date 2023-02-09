package com.application.vitacom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HealthVitalRepository extends JpaRepository<HealthVital, Long> {
    List<HealthVital> findByUsername(String username);

    Optional<HealthVital> findByUsernameAndId(String username, Long id);
}
