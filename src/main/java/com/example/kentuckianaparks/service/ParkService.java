package com.example.kentuckianaparks.service;

import com.example.kentuckianaparks.exception.InformationNotFoundException;
import com.example.kentuckianaparks.model.Park;
import com.example.kentuckianaparks.repository.ParkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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
        LOGGER.info("calling getParks method from service");
        return parkRepository.findAll();
    }
    public Optional<Park> getPark(Long parkId){
        LOGGER.info("calling getPark method from service");
        Optional<Park> park = parkRepository.findById(parkId);
        if (park.isPresent()) {
            return park;
        } else {
            throw new InformationNotFoundException("Park with id " + parkId + " not found");
        }
    }
}
