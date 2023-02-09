package com.application.vitacom.contoller;

import com.application.vitacom.repository.HealthVital;
import com.application.vitacom.service.HealthVitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HealthVitalController {

    @Autowired
    private HealthVitalService healthVitalService;

    @GetMapping("/users/{username}/vitals")
    public List<HealthVital> getAllHealthVitals(@PathVariable String username) {
        return healthVitalService.getAllHealthVitals(username);
    }

    @GetMapping("/users/{username}/vitals/{id}")
    public HealthVital getHealthVital(@PathVariable String username, @PathVariable Long id) {
        return healthVitalService.getHealthVital(username, id);
    }

    @PostMapping("/users/{username}/vitals")
    public HealthVital createHealthVital(@PathVariable String username, @RequestBody HealthVital healthVital) {
        return healthVitalService.createHealthVital(healthVital);
    }

    @PutMapping("/users/{username}/vitals/{id}")
    public HealthVital updateHealthVital(@PathVariable String username, @PathVariable Long id, @RequestBody HealthVital healthVital) {
        return healthVitalService.updateHealthVital(username, id, healthVital);
    }

    @DeleteMapping("/users/{username}/vitals/{id}")
    public void deleteHealthVital(@PathVariable String username, @PathVariable Long id) {
        healthVitalService.deleteHealthVital(id);
    }
}
