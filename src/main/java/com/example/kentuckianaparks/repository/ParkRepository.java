package com.example.kentuckianaparks.repository;

import com.example.kentuckianaparks.model.Park;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParkRepository extends JpaRepository<Park, Long> {
}
