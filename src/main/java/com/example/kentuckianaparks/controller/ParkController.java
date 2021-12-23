package com.example.kentuckianaparks.controller;

import com.example.kentuckianaparks.model.Park;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ParkController {
    private static final Logger LOGGER = Logger.getLogger(ParkController.class.getName());

    @GetMapping("/Parks")
    public List<Park> getParks() {
        LOGGER.info("using getParks method to find all categories");
        return parkService.getParks();
    }
}
