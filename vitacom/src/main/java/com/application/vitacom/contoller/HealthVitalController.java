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

    @GetMapping("/healthvitals")
    public List<HealthVital> getAllHealthVitals() {
        return healthVitalService.getAllHealthVitals();
    }

    @GetMapping("/healthvitals/{id}")
    public HealthVital getHealthVital(@PathVariable Long id) {
        return healthVitalService.getHealthVital(id);
    }

    @PostMapping("/healthvitals")
    public HealthVital createHealthVital(@RequestBody HealthVital healthVital) {
        return healthVitalService.createHealthVital(healthVital);
    }

    @PutMapping("/healthvitals/{id}")
    public HealthVital updateHealthVital(@PathVariable Long id, @RequestBody HealthVital healthVital) {
        return healthVitalService.updateHealthVital(id, healthVital);
    }

    @DeleteMapping("/healthvitals/{id}")
    public void deleteHealthVital(@PathVariable Long id) {
        healthVitalService.deleteHealthVital(id);
    }
}
