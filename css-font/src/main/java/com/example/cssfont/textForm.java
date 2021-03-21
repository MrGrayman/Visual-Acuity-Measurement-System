package com.example.cssfont;

public class textForm {
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
    public String getText() {
        return passtext;
    }

    public void setText(String passtext) {
        this.passtext = passtext;
    }
    @Override
    public String toString()
    {
        return "User [distance=" + distance + ", optotype=" + optotype + ", passtext=" + passtext + "]";
    }
}
