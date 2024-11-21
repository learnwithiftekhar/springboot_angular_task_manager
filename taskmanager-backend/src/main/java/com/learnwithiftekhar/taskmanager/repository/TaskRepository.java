package com.learnwithiftekhar.taskmanager.repository;

import com.learnwithiftekhar.taskmanager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
