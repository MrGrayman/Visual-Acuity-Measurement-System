package com.example.cssfont.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "patient")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Patient {
    private int id;
    private String name;
    private int HN;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public int getId(){
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    @Basic
    @Column(name = "HN")
    public int getHN(){
        return HN;
    }
    public void setHN(int HN){
        this.HN = HN;
    }
}
