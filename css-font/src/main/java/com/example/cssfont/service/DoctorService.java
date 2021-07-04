package com.example.cssfont.service;

import com.example.cssfont.entities.Doctor;
import com.example.cssfont.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor findByDoctorCode(String doctorCode){
        return doctorRepository.findByDoctorCode(doctorCode);
    }
}
