package com.example.kentuckianaparks.service;

import com.example.kentuckianaparks.model.Park;
import com.example.kentuckianaparks.repository.ParkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
public class ParkService {
    private static final Logger LOGGER = Logger.getLogger(ParkService.class.getName());
    private ParkRepository parkRepository;

    @Autowired
    public void setParkRepository(ParkRepository parkRepository){
        this.parkRepository = parkRepository;
    }
    public List<Park> getParks(){
        LOGGER.info("calling getCategories method from service");
        return parkRepository.findAll();
    }
}
