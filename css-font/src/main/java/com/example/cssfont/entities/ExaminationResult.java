package com.example.cssfont.entities;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "examination_result")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ExaminationResult {
    private int id;
    private int patient_id;
    private String VA;
    private String RE;
    private String LE;

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
    public String getVA(){
        return VA;
    }
    public void setVA(String VA){
        this.VA = VA;
    }

    @Basic
    @Column(name = "re")
    public String getRE(){
        return RE;
    }
    public void setRE(String RE){
        this.RE = RE;
    }

    @Basic
    @Column(name = "le")
    public String getLE(){
        return LE;
    }
    public void setLE(String LE){
        this.LE = LE;
    }
}
