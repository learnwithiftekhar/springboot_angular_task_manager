package com.learnwithiftekhar.taskmanager.service;

import com.learnwithiftekhar.taskmanager.entity.Project;
import com.learnwithiftekhar.taskmanager.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(long id) {
        return projectRepository.findById(id);
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    private void deleteProject(long id) {
        projectRepository.deleteById(id);
    }
}
