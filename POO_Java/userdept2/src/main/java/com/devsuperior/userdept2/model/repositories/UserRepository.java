package com.devsuperior.userdept2.model.repositories;

import com.devsuperior.userdept2.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
