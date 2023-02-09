package com.application.vitacom.service;

import com.application.vitacom.repository.HealthVital;

import java.util.List;

public interface HealthVitalService {
    List<HealthVital> getAllHealthVitals(String username);
    HealthVital getHealthVital(String username, Long id);
    HealthVital createHealthVital(HealthVital healthVital);
    HealthVital updateHealthVital(String username, Long id, HealthVital healthVital);
    void deleteHealthVital(Long id);
}