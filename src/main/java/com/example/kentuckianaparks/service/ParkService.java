package com.example.kentuckianaparks.service;

import com.example.kentuckianaparks.exception.InformationExistsException;
import com.example.kentuckianaparks.exception.InformationNotFoundException;
import com.example.kentuckianaparks.model.Park;
import com.example.kentuckianaparks.repository.ParkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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
    public Park createPark(@RequestBody Park parkObject){
        LOGGER.info("calling createPark method from service");
        Park park = parkRepository.findByName(parkObject.getName());
        if (park !=null){
            throw new InformationExistsException("park with name " + park.getName() + "already exists");
        }else{
            return parkRepository.save(parkObject);
        }
    }
    public Park updatePark(Long parkId, @RequestBody Park parkObject) {
        LOGGER.info("calling parkCategory method from service");
        Optional<Park> park = parkRepository.findById(parkId);
        // findById
        if (park.isPresent()) {
            // check the park name match with the park name in the DB
            if (parkObject.getName().equals(park.get().getName())) {
                LOGGER.warning("park name is equal to database object name");
                throw new InformationExistsException("park " + park.get().getName() + " is already exists");
            } else {
                // find the park and update with new information
                Park updatePark = parkRepository.findById(parkId).get();
                updatePark.setName(parkObject.getName());
                updatePark.setAddress(parkObject.getAddress());
                updatePark.setCity(parkObject.getCity());
                updatePark.setCounty(parkObject.getCounty());
                updatePark.setState(parkObject.getState());
                updatePark.setZipCode(parkObject.getZipCode());
                return parkRepository.save(updatePark);
            }
        } else {
            throw new InformationNotFoundException("Park with id " + parkId + " not found");
        }
    }
    public Optional<Park> deletePark(Long parkId) {
        LOGGER.info("calling deletePark method from service");
        Optional<Park> park = parkRepository.findById(parkId);
        if (park.isPresent()) {
            parkRepository.deleteById(parkId);
            return park;
        } else {
            throw new InformationNotFoundException("park with id " + parkId + " not found");
        }
    }
}
