package com.example.cssfont;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONException;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class manageFontController {
    @RequestMapping(value = "/processForm", method= RequestMethod.POST)
    public String processForm(@Validated @ModelAttribute(value="textForm") TextForm textForm , Model model) throws JsonProcessingException, JSONException {


        System.out.println("text : "+textForm);

        return "redirect:/";
    }
}
