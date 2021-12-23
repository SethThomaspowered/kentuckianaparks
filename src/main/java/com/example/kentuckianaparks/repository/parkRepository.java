package com.example.kentuckianaparks.repository;

import com.example.kentuckianaparks.model.Park;
import org.springframework.data.jpa.repository.JpaRepository;

public interface parkRepository extends JpaRepository<Park, Long> {
}
