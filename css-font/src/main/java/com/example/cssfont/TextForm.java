package com.example.cssfont;

public class TextForm {
    private String distance;
    private String optotype;
    private String passtext;
    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }
    public String getOptotype() {
        return optotype;
    }

    public void setOptotype(String optotype) {
        this.optotype = optotype;
    }
    public String getPasstext() {
        return passtext;
    }

    public void setPasstext(String passtext) {
        this.passtext = passtext;
    }

    public TextForm(){

    }
    @Override
    public String toString()
    {
        return "User [distance=" + distance + ", optotype=" + optotype + ", passtext=" + passtext + "]";
    }
}
