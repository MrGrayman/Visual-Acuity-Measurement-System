package com.example.cssfont.entities.dto;

import javax.persistence.*;

public class PatientDTO {
    private int id;
    private String name;
    private int HN;

    public int getId(){
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public int getHN(){
        return HN;
    }
    public void setHN(int HN){
        this.HN = HN;
    }
}
