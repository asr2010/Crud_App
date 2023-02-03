package com.application.vitacom.service;

import com.application.vitacom.repository.HealthVital;

import java.util.List;

public interface HealthVitalService {
    List<HealthVital> getAllHealthVitals();
    HealthVital getHealthVital(Long id);
    HealthVital createHealthVital(HealthVital healthVital);
    HealthVital updateHealthVital(Long id, HealthVital healthVital);
    void deleteHealthVital(Long id);
}