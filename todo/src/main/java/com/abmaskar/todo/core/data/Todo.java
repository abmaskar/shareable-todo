package com.abmaskar.todo.core.data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class Todo {
    @Id
    private String _id;
    private String title;
    private String owner;
    private String status;
    private String priority;
    private Date createdOn;

    public Todo() {
    }

    public Todo(String title, String owner, String status, String priority) {
        this.title = title;
        this.owner = owner;
        this.status = status;
        this.priority = priority;
        this.createdOn = new Date();
    }

    public String get_id() {
        return _id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
}
