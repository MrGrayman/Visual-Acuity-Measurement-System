package com.example.cssfont.entities.dto;

import javax.persistence.*;

public class ExaminationResultDTO {
    private int id;
    private int patientId;
    private String VA;
    private String RE;
    private String LE;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPatientId(){
        return patientId;
    }
    public void setPatientId(int patientId){
        this.patientId = patientId;
    }

    public String getVA(){
        return VA;
    }
    public void setVA(String VA){
        this.VA = VA;
    }

    public String getRE(){
        return RE;
    }
    public void setRE(String RE){
        this.RE = RE;
    }

    public String getLE(){
        return LE;
    }
    public void setLE(String LE){
        this.LE = LE;
    }
}
