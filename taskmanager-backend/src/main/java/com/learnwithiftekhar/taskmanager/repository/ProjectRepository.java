package com.learnwithiftekhar.taskmanager.repository;

import com.learnwithiftekhar.taskmanager.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
