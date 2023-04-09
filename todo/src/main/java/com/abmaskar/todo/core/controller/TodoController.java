package com.abmaskar.todo.core.controller;

import com.abmaskar.todo.core.data.Todo;
import com.abmaskar.todo.core.data.TodoRepo;
import com.abmaskar.todo.core.model.MessageResponse;
import com.abmaskar.todo.core.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("todo")
public class TodoController {

    private TodoService todoService;
    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }



    @PostMapping
    public ResponseEntity<?> createTodo(@RequestBody Todo todo){

        return ResponseEntity.ok( this.todoService.createTodo(todo));
    }

    @GetMapping
    public ResponseEntity<?> getAllTodo(){

        return ResponseEntity.ok( this.todoService.getAllTodo());
    }


    @PostMapping("update")
    public ResponseEntity<?> updateTodo(@RequestBody Todo todo){

        return ResponseEntity.ok( this.todoService.updateTodo(todo));
    }


    @GetMapping("/owner/{owner}")
    public ResponseEntity<?> getAllTodosByOwner(@PathVariable String owner){

        return ResponseEntity.ok( this.todoService.getAllTodosByOwner(owner));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> removeTodo(@PathVariable String id){

        return ResponseEntity.ok( this.todoService.removeTodo(id));
    }

}
