package com.example.cssfont.controller;

import com.example.cssfont.entities.ExaminationResult;
import com.example.cssfont.service.ExaminationResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping(value = "${general.root_uri}")
public class ExaminationResultController {

    @Autowired
    private ExaminationResultService examinationResultService;

    @RequestMapping(value = "/examinationResult/{id}", method = RequestMethod.GET)
    public ExaminationResult getByIdExaminationResult(@PathVariable int id) {
        return examinationResultService.getByIdExaminationResult(id);
    }
    @RequestMapping(value = "/save/examinationResult", method = RequestMethod.POST)
    public void saveExaminationResult(@RequestBody ExaminationResult examinationResult){
        examinationResultService.saveExaminationResult(examinationResult);
    }
}
