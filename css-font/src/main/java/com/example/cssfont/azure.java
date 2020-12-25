package com.example.cssfont;

import com.microsoft.cognitiveservices.speech.*;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

public class azure {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        SpeechConfig speechConfig = SpeechConfig.fromSubscription("550233ccdb3040fdb871a7274eb18f66", "eastasia");
        fromFile(speechConfig);
    }

    public static void fromFile(SpeechConfig speechConfig) throws InterruptedException, ExecutionException {
        AudioConfig audioConfig = AudioConfig.fromWavFileInput("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/Recording.wav");
        speechConfig.setSpeechRecognitionLanguage("th-TH");
        SpeechRecognizer recognizer = new SpeechRecognizer(speechConfig, audioConfig);
        Future<SpeechRecognitionResult> task = recognizer.recognizeOnceAsync();
        SpeechRecognitionResult result = task.get();
        System.out.println("RECOGNIZED: Text=" + result.getText());
    }


}