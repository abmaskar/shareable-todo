package com.abmaskar.todo.auth.model;

import org.springframework.http.ResponseCookie;

import java.util.List;

public record UserInfoResponse(String token, String type, String id, String username, String email, List<String> roles,
                               ResponseCookie responseCookie) {

    public UserInfoResponse( String id, String username, String email, List<String> roles, ResponseCookie responseCookie){
        this(null, null,
                id,username,email,roles, responseCookie);
    }
}
