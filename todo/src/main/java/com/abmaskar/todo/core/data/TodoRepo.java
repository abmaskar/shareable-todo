package com.abmaskar.todo.core.data;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TodoRepo extends MongoRepository<Todo, String> {

    List<Todo> findAllByOwner(String owner);
}
