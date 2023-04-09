package com.abmaskar.todo.core.service;

import com.abmaskar.todo.core.data.Todo;
import com.abmaskar.todo.core.data.TodoRepo;
import com.abmaskar.todo.core.model.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private TodoRepo todoRepo;

    @Autowired
    public TodoService(TodoRepo todoRepo) {
        this.todoRepo = todoRepo;
    }

    public MessageResponse createTodo(Todo todo){
        todo.setCreatedOn(todo.getCreatedOn() != null? todo.getCreatedOn(): new Date());
        this.todoRepo.save(todo);
        return new MessageResponse("Success");
    }

    public MessageResponse updateTodo(Todo todo){
        this.todoRepo.save(todo);
        return new MessageResponse("Success");
    }

    public List<Todo> getAllTodo(){
        return this.todoRepo.findAll();
    }
    public List<Todo> getAllTodosByOwner(String owner){
        return this.todoRepo.findAllByOwner(owner);
    }

    public MessageResponse removeTodo(String id){
        this.todoRepo.deleteById(id);
        return new MessageResponse("Success");
    }
}
