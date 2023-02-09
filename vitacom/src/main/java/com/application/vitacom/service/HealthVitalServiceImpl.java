package com.application.vitacom.service;

import com.application.vitacom.exception.ResourceNotFoundException;
import com.application.vitacom.repository.HealthVital;
import com.application.vitacom.repository.HealthVitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthVitalServiceImpl implements HealthVitalService {

    @Autowired
    private HealthVitalRepository healthVitalRepository;

    @Override
    public List<HealthVital> getAllHealthVitals(String username) {
        return healthVitalRepository.findByUsername(username);
    }

    @Override
    public HealthVital getHealthVital(String username, Long id) {
        return healthVitalRepository.findByUsernameAndId(username, id).orElseThrow(() -> new ResourceNotFoundException("Health Vital not found "));
    }

    @Override
    public HealthVital createHealthVital(HealthVital healthVital) {
        return healthVitalRepository.save(healthVital);
    }

    @Override
    public HealthVital updateHealthVital(String username, Long id, HealthVital healthVital) {
        HealthVital existingHealthVital = healthVitalRepository.findByUsernameAndId(username, id).orElseThrow(() -> new ResourceNotFoundException("Health Vital not found with id " + id));
        existingHealthVital.setHeartRate(healthVital.getHeartRate());
        existingHealthVital.setBloodPressure(healthVital.getBloodPressure());
        existingHealthVital.setWeight(healthVital.getWeight());
        existingHealthVital.setBloodGlucose(healthVital.getBloodGlucose());
        existingHealthVital.setTemperature(healthVital.getTemperature());
        existingHealthVital.setEntryDate(healthVital.getEntryDate());
        return healthVitalRepository.save(existingHealthVital);
    }

    @Override
    public void deleteHealthVital(Long id) {
        healthVitalRepository.deleteById(id);
    }
}