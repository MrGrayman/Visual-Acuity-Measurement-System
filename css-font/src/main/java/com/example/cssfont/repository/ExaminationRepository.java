package com.example.cssfont.repository;

import com.example.cssfont.entities.ExaminationResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExaminationRepository extends JpaRepository<ExaminationResult, Integer> {
    ExaminationResult findById(int id);
}
