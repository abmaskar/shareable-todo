package com.abmaskar.todo.auth.model;

import java.util.List;
import java.util.Set;

public record SignupRequest(String username, String email, String password,
                            List<String> roles) {
}
