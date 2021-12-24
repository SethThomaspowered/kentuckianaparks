package com.example.kentuckianaparks.controller;

import com.example.kentuckianaparks.model.Park;
import com.example.kentuckianaparks.service.ParkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ParkController {
    private static final Logger LOGGER = Logger.getLogger(ParkController.class.getName());
    private ParkService parkService;

    @Autowired
    public void setParkService(ParkService parkService){
        this.parkService = parkService;
    }
    @GetMapping("/Parks")
    public List<Park> getParks() {
        LOGGER.info("using getParks method to find all categories");
        return parkService.getParks();
    }
    @GetMapping("/parks/{parkId}")
    public Optional<Park> getPark(@PathVariable(value = "parkId") Long parkId){
        LOGGER.info("using getPark method to find one park");
        return parkService.getPark(parkId);
    }
    @PostMapping("/parks")
    public Park createPark(@RequestBody Park parkObject){
        LOGGER.info("calling createPark method to add park");
        return parkService.createPark(parkObject);
    }
}
