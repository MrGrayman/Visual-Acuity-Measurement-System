package com.example.cssfont.controller;

import com.example.cssfont.entities.Doctor;
import com.example.cssfont.entities.ExaminationResult;
import com.example.cssfont.exceptions.BadRequestException;
import com.example.cssfont.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @RequestMapping(value = "/doctorCode", method = RequestMethod.GET)
    public Object getByDoctorCode(@RequestParam("doctorCode") String doctorCode, Model model){

        Doctor doctor = doctorService.findByDoctorCode(doctorCode);

        if(doctor == null){
            RedirectView redirectView = new RedirectView();
            redirectView.setUrl("/font3");
            String massage = "Not found the code!!";
            model.addAttribute("massage", massage);
            return redirectView;
        } else {
            RedirectView redirectView = new RedirectView();
            redirectView.setUrl("/font2");
            return redirectView;
        }

    }

    @RequestMapping(value = "/getDoctorCode", method = RequestMethod.GET)
    public Object getDoctorCode(@Validated @ModelAttribute("doctorCode") Doctor doctor,
                                BindingResult bindingResult,
                                Model model){

        if (bindingResult.hasErrors()) {
            System.out.println("There was a error " + bindingResult);
            return "Can't find code!!";
        }
        model.addAttribute("doctorCode", doctor);
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("/font2");
        return redirectView;

    }
}
