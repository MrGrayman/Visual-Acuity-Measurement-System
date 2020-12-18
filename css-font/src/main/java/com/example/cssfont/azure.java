package com.example.cssfont;

import com.microsoft.cognitiveservices.speech.*;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

public class azure {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        SpeechConfig speechConfig = SpeechConfig.fromSubscription("fa41670c5d86464a9326c064ebb76e14", "eastus");
        fromFile(speechConfig);
    }

    public static void fromFile(SpeechConfig speechConfig) throws InterruptedException, ExecutionException {
        AudioConfig audioConfig = AudioConfig.fromWavFileInput("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/Recording.wav");
        SpeechRecognizer recognizer = new SpeechRecognizer(speechConfig, audioConfig);
//        speechConfig.setSpeechRecognitionLanguage("th-TH");
        Future<SpeechRecognitionResult> task = recognizer.recognizeOnceAsync();
        SpeechRecognitionResult result = task.get();
        System.out.println("RECOGNIZED: Text=" + result.getText());
    }


}