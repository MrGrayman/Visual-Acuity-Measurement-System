package com.example.cssfont.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "examination_result")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ExaminationResult {
    private int id;
    private int patient_id;
    private String re;
    private String le;
    private String re_ph;
    private String le_ph;

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

    @Basic
    @Column(name = "rePh")
    public String getRePh(){ return re_ph; }
    public void setRePh(String re_ph) { this.re_ph = re_ph; }

    @Basic
    @Column(name = "lePh")
    public String getLePh(){ return le_ph; }
    public void setLePh(String le_ph) { this.le_ph = le_ph; }

    public ExaminationResult(){

    }

    public ExaminationResult(String re, String le, String rePh, String lePh){
        this.re = re;
        this.le = le;
        this.re_ph = re_ph;
        this.le_ph = le_ph;
    }
}
