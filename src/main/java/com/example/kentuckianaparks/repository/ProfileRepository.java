package com.example.kentuckianaparks.repository;

import com.example.kentuckianaparks.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

}
