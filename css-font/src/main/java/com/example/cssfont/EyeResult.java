package com.example.cssfont;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.type.TypeReference;
@JsonIgnoreProperties(ignoreUnknown = true)
//@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class EyeResult {
    private String s_wrong;
    private String s_acuity;
    public String getS_wrong() {
        return s_wrong;
    }
    public void setS_wrong(String s_wrong) {
        this.s_wrong = s_wrong;
    }
    public String getS_acuity() {
        return s_acuity;
    }
    public void setS_acuity(String s_acuity) {
        this.s_acuity = s_acuity;
    }

}
