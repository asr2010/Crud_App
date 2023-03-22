package com.application.vitacom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://vitacom-frontend.s3-website-us-east-1.amazonaws.com")
@SpringBootApplication
public class VitacomApplication {

	public static void main(String[] args) {
		SpringApplication.run(VitacomApplication.class, args);
	}

}
