package com.example.kentuckianaparks.repository;

import com.example.kentuckianaparks.model.Highlight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HighlightRepository extends JpaRepository<Highlight, Long> {
}
