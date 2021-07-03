package com.example.cssfont.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class ImportFontController {

    private static String UPLOADED_FOLDER = "/css/fonts/";

    @RequestMapping(value = "/importFile", method = RequestMethod.POST)
    public String importFont(@RequestParam("myFile") MultipartFile file, RedirectAttributes redirectAttributes){
        System.out.println("file");
        System.out.println(file);
//        File newFile = new ClassPathResource();
        Path resource = Paths.get("src","main","resources","static");
        String a = resource.toFile().getAbsolutePath();
        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "redirect:uploadStatus";
        }

        try {
            FileOutputStream output = new FileOutputStream(a + UPLOADED_FOLDER+file.getOriginalFilename());
            output.write(file.getBytes());
            // Get the file and save it somewhere
//            byte[] bytes = file.getBytes();
//            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
//            Files.write(path, bytes);

            redirectAttributes.addFlashAttribute("message", "You successfully uploaded '" + file.getOriginalFilename() + "'");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return "/font2";
    }
}
