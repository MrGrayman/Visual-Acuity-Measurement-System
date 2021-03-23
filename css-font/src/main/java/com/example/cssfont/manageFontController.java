//package com.example.cssfont;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.ObjectWriter;
//import org.json.JSONException;
//import org.json.JSONObject;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.io.BufferedReader;
//import java.io.FileReader;
//import java.io.FileWriter;
//import java.io.IOException;
//
//@RestController
//public class manageFontController {
//    @RequestMapping(value = "/processForm", method= RequestMethod.POST)
//    public String processForm(@Validated @ModelAttribute(value="textForm") TextForm textForm , Model model) throws JsonProcessingException, JSONException {
//        System.out.println("text : "+textForm);
//        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
//        String json = ow.writeValueAsString(textForm);
//        JSONObject obj = new JSONObject(json);
//        System.out.println("obj : "+obj.toString());
//        System.out.println("Json"+json);
//        String message = obj.toString();
//        System.out.println("message : "+message);
////        String test = URLDecoder.decode(optotype, "UTF-8");
//
//        //************write text in text file**************
//        try {
//            FileWriter myWriter = new FileWriter("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt",false);
//            myWriter.write(message);
//            myWriter.close();
//            System.out.println("Successfully wrote to the file.");
//        } catch (IOException e) {
//            System.out.println("An error occurred.");
//            e.printStackTrace();
//        }
//        try {
//            BufferedReader br = new BufferedReader(new FileReader("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt"));
//            String line;
//            while ((line = br.readLine()) != null) {
//                System.out.println(line);
//            }
//            br.close();
//        } catch (IOException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        }
//        // ****************************************************************
//
//        return "font2";
//    }
//}
