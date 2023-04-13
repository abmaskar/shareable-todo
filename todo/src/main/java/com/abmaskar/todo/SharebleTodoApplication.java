package com.abmaskar.todo;

import com.abmaskar.todo.auth.data.Role;
import com.abmaskar.todo.auth.data.RoleRepository;
import com.abmaskar.todo.auth.model.ERole;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Optional;

@SpringBootApplication
public class SharebleTodoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SharebleTodoApplication.class, args);
	}


	@Bean
	public CommandLineRunner runner(RoleRepository roleRepository){
		return args -> {

			Optional<Role> role = roleRepository.findByName(ERole.ROLE_ADMIN);
			if(role.isEmpty()){
				roleRepository.save(new Role(ERole.ROLE_ADMIN));
				roleRepository.save(new Role(ERole.ROLE_USER));
				roleRepository.save(new Role(ERole.ROLE_MODERATOR));
				roleRepository.save(new Role(ERole.ROLE_GUST));
			}


		};
	}
}
