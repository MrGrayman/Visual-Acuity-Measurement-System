package com.example.cssfont.controller;

import com.example.cssfont.entities.ExaminationResult;
import com.example.cssfont.repository.ExaminationRepository;
import com.example.cssfont.service.ExaminationResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.ParseException;

@RestController
//@RequestMapping(value = "${general.root_uri}")
public class ExaminationResultController {

    @Autowired
    private ExaminationResultService examinationResultService;

    @Autowired
    private ExaminationRepository examinationRepository;

    @RequestMapping(value = "/examinationResult/{id}", method = RequestMethod.GET)
    public ExaminationResult getByIdExaminationResult(@PathVariable int id) {
        return examinationResultService.getByIdExaminationResult(id);
    }

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String indexPage(){
//        return "index";
//    }

//    @GetMapping("/examinationResult")
//    public String examinationResult(Model model) {
//        model.addAttribute("examinationResult", new ExaminationResult());
//        return "examinationResult";
//    }

    @RequestMapping(value = "/examinationResult/save", method = RequestMethod.POST)
    public String processSave(@Validated @ModelAttribute("examinationResult") ExaminationResult examinationResult,
                              BindingResult bindingResult,
                              Model model){
        if (bindingResult.hasErrors()) {
            System.out.println("There was a error " + bindingResult);
            return "/examinationResult/save";
        }
        model.addAttribute("re", examinationResult.getRe());
        model.addAttribute("le", examinationResult.getLe());
        model.addAttribute("re_ph", examinationResult.getRePh());
        model.addAttribute("le_ph", examinationResult.getLePh());
        examinationResultService.saveExaminationResult(examinationResult);
        return "save-examination-successfully";

    }

    @RequestMapping(value = "/examinationResult/saveResult", method = RequestMethod.POST)
    public void ExaminationResult(@RequestBody ExaminationResult examinationResult){
        examinationResultService.saveExaminationResult(examinationResult);
    }
}
