package com.example.cssfont.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "examination_result")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ExaminationResult {
    private int id;
    private int patient_id;
    private String va;
    private String re;
    private String le;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "patientId")
    public int getPatientId(){
        return patient_id;
    }
    public void setPatientId(int patient_id){
        this.patient_id = patient_id;
    }

    @Basic
    @Column(name = "va")
    public String getVa(){
        return va;
    }
    public void setVa(String va){
        this.va = va;
    }

    @Basic
    @Column(name = "re")
    public String getRe(){
        return re;
    }
    public void setRe(String re){
        this.re = re;
    }

    @Basic
    @Column(name = "le")
    public String getLe(){
        return le;
    }
    public void setLe(String le){
        this.le = le;
    }

    public ExaminationResult(){

    }

    public ExaminationResult(String va, String re, String le){
        this.va = va;
        this.re = re;
        this.le = le;
    }
}
