package com.abmaskar.todo.auth.data;

import java.util.Optional;

import com.abmaskar.todo.auth.model.ERole;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}