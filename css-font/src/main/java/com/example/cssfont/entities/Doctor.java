package com.example.cssfont.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "doctor")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Doctor {
    private int id;
    private String firstname;
    private String lastname;
    private String doctorCode;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "firstname")
    public String getFirstname(){
        return firstname;
    }
    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    @Column(name = "lastname")
    public String getLastname(){
        return lastname;
    }
    public void setLastname(String lastname){
        this.lastname = lastname;
    }

    @Column(name = "doctor_code")
    public String getDoctorCode(){
        return doctorCode;
    }
    public void setDoctorCode(String doctorCode){
        this.doctorCode = doctorCode;
    }

    public Doctor(){

    }

    public Doctor(String doctorCode){
        this.doctorCode = doctorCode;
    }
}
