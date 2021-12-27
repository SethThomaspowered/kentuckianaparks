package com.example.kentuckianaparks.repository;

import com.example.kentuckianaparks.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
