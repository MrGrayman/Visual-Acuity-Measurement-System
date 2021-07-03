package com.example.cssfont;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.type.TypeReference;
@JsonIgnoreProperties(ignoreUnknown = true)
//@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class EyeResult {
    private String left_s_wrong;
    private String left_s_acuity;
    private String left_pin_s_wrong;
    private String left_pin_s_acuity;

    private  String right_s_wrong;
    private  String right_s_acuity;
    private  String right_pin_s_wrong;
    private  String right_pin_s_acuity;



    public String getLeft_s_wrong() {
        return left_s_wrong;
    }
    public void setLeft_s_wrong(String left_s_wrong) {
        this.left_s_wrong = left_s_wrong;
    }
    public String getLeft_s_acuity() {
        return left_s_acuity;
    }
    public void setLeft_s_acuity(String left_s_acuity) {
        this.left_s_acuity = left_s_acuity;
    }
    public String getLeft_pin_s_wrong() {
        return left_pin_s_wrong;
    }
    public void setLeft_pin_s_wrong(String left_pin_s_wrong) {
        this.left_pin_s_wrong = left_pin_s_wrong;
    }
    public String getLeft_pin_s_acuity() {return left_pin_s_acuity;}
    public void setLeft_pin_s_acuity(String left_pin_s_acuity) {this.left_pin_s_acuity = left_pin_s_acuity;}


    public String getRight_s_wrong() {
        return right_s_wrong;
    }
    public void setRight_s_wrong(String right_s_wrong) {
        this.right_s_wrong = right_s_wrong;
    }
    public String getRight_s_acuity() {
        return right_s_acuity;
    }
    public void setRight_s_acuity(String right_s_acuity) {
        this.right_s_acuity = right_s_acuity;
    }
    public String getRight_pin_s_wrong() {
        return right_pin_s_wrong;
    }
    public void setRight_pin_s_wrong(String right_pin_s_wrong) {
        this.right_pin_s_wrong = right_pin_s_wrong;
    }
    public String getRight_pin_s_acuity() {return right_pin_s_acuity;}
    public void setRight_pin_s_acuity(String right_pin_s_acuity) {this.right_pin_s_acuity = right_pin_s_acuity;}

}
