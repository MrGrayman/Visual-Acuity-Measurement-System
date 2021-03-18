package com.example.cssfont.service;

import com.example.cssfont.entities.ExaminationResult;
import com.example.cssfont.repository.ExaminationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExaminationResultService {

    @Autowired
    private ExaminationRepository examinationRepository;

    public ExaminationResult getByIdExaminationResult(int id){
        return examinationRepository.findById(id);
    }

    public void saveExaminationResult(ExaminationResult examinationResult){
        examinationRepository.saveAndFlush(examinationResult);
    }
}
