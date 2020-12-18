package com.example.cssfont;

import com.google.api.gax.longrunning.OperationFuture;
import com.google.cloud.speech.v1.*;
import com.google.protobuf.ByteString;
import com.microsoft.cognitiveservices.speech.SpeechConfig;
import com.microsoft.cognitiveservices.speech.SpeechRecognizer;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLDecoder;
import java.nio.file.Files;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import java.io.File;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;



@Controller
public class GreetingController {

    @GetMapping("/font1")
    public String font1(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "font1";
    }

    @GetMapping("/font2")
    public String font2(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "font2";
    }

    @GetMapping("/calculator")
    public String calculator(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "calculator";
    }

    @GetMapping("/AIForThai")
    public String aiForThai(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "AIForThai";
    }
    @GetMapping("/google")
    public String google(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "google";
    }
    @GetMapping("/azure")
    public String azure(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "azure";
    }

    @PostMapping("/aiForThai") // //new annotation since 4.3
    public String singleFileUpload(@RequestParam(value = "file", required = false) File file,
                                   RedirectAttributes redirectAttributes) throws IOException {



        File waveFile = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/Recording.wav");

        String url = "https://api.aiforthai.in.th/partii-webapi";
        String charset = "UTF-8";
        String boundary = Long.toHexString(System.currentTimeMillis());
        String CRLF = "\r\n"; // Line separator required by multipart/form-data.

        URLConnection connection = new URL(url).openConnection();
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
        connection.setRequestProperty("Apikey", "GTyea2aX3RaNHMyXwZqsdkdJpSU5We05");
        connection.setRequestProperty("Cache-Control", "no-cache");
        connection.setRequestProperty("Connection", "keep-alive");

        try (
                OutputStream output = connection.getOutputStream();
                PrintWriter writer = new PrintWriter(new OutputStreamWriter(output, charset), true);
        ) {
            // send binary content
            writer.append("--" + boundary).append(CRLF);
            writer.append("Content-Disposition: form-data; name=\"wavfile\"; filename=\"" + waveFile.getName() + "\"").append(CRLF);
            writer.append("Content-Type: " + URLConnection.guessContentTypeFromName(waveFile.getName())).append(CRLF);
            writer.append("Content-Transfer-Encoding: binary").append(CRLF);
            writer.append(CRLF).flush();
            Files.copy(waveFile.toPath(), output);
            output.flush(); // Important before continuing with writer!
            writer.append(CRLF).flush(); // CRLF is important! It indicates end of boundary.

            // Send normal param.
            writer.append("--" + boundary).append(CRLF);
            writer.append("Content-Disposition: form-data; name=\"outputlevel\"").append(CRLF);
            writer.append("Content-Type: text/plain; charset=" + charset).append(CRLF);
            writer.append(CRLF).append("--uttlevel").append(CRLF).flush();

            writer.append("--" + boundary).append(CRLF);
            writer.append("Content-Disposition: form-data; name=\"outputformat\"").append(CRLF);
            writer.append("Content-Type: text/plain; charset=" + charset).append(CRLF);
            writer.append(CRLF).append("--txt").append(CRLF).flush();

            // End of multipart/form-data.
            writer.append("--" + boundary + "--").append(CRLF).flush();
        }
        System.out.println("Waiting for response...");
        // read output
        InputStream response = connection.getInputStream();
        StringWriter writer = new StringWriter();
        IOUtils.copy(response, writer, "UTF-8");
        String results = writer.toString();
//        System.out.println("result = " + results);
        String str[] = results.split(",");
        List<String> message = new ArrayList<String>();
        message = Arrays.asList(str);
        String thai = message.get(1);
        String str2[] = thai.split(":");
        List<String> message2 = new ArrayList<String>();
        message2 = Arrays.asList(str2);
        String thai2 = message2.get(1);
        String test = URLDecoder.decode(thai2, "UTF-8");
//        System.out.println("Thai" + test);
        String sJava= test;
        System.out.println("Result :" + StringEscapeUtils.unescapeJava(sJava));

            //************write text in text file**************
//        try {
//            FileWriter myWriter = new FileWriter("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/file.txt");
//            myWriter.write(URLDecoder.decode(test.substring(1, 138), "UTF-8"));
//            myWriter.close();
//            System.out.println("Successfully wrote to the file.");
//        } catch (IOException e) {
//            System.out.println("An error occurred.");
//            e.printStackTrace();
//        }
//        try {
//            BufferedReader br = new BufferedReader(new FileReader("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/file.txt"));
//            String line;
//            while ((line = br.readLine()) != null) {
//                System.out.println(line);
//            }
//            br.close();
//        } catch (IOException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        }
        // ****************************************************************
        return "showText";

    }

    @PostMapping("/google") // //new annotation since 4.3
    public String google(@RequestParam(value = "file", required = false) File file,
                         RedirectAttributes redirectAttributes) throws IOException {
        // Instantiates a client
        try (SpeechClient speech = SpeechClient.create()) {

            Path path = Paths.get("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/Recording.wav");
            // call getFileName() and get FileName path object
            Path fileName = path.getFileName();

            // print FileName
            System.out.println("FileName: "
                    + fileName.toString());

            byte[] data = Files.readAllBytes(path);
            ByteString audioBytes = ByteString.copyFrom(data);

            // Configure request with local raw PCM audio
            RecognitionConfig config =
                    RecognitionConfig.newBuilder()
                            .setEncoding(RecognitionConfig.AudioEncoding.LINEAR16)
                            .setLanguageCode("th-TH")
                            .setSampleRateHertz(16000)
                            .build();
            RecognitionAudio audio = RecognitionAudio.newBuilder().setContent(audioBytes).build();

            // Use non-blocking call for getting file transcription
            OperationFuture<LongRunningRecognizeResponse, LongRunningRecognizeMetadata> response =
                    speech.longRunningRecognizeAsync(config, audio);

            while (!response.isDone()) {
                System.out.println("Waiting for response...");
                Thread.sleep(10000);
            }

            List<SpeechRecognitionResult> results = response.get().getResultsList();

            for (SpeechRecognitionResult result : results) {
                // There can be several alternative transcripts for a given chunk of speech. Just use the
                // first (most likely) one here.
                SpeechRecognitionAlternative alternative = result.getAlternativesList().get(0);
                System.out.printf("Transcription: %s%n", alternative.getTranscript());
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        return "showText";
    }

    @PostMapping("/azure") // //new annotation since 4.3
    public String azure(@RequestParam(value = "file", required = false) File file,
                        RedirectAttributes redirectAttributes) throws IOException, ExecutionException, InterruptedException {
        SpeechConfig speechConfig = SpeechConfig.fromSubscription("fa41670c5d86464a9326c064ebb76e14", "eastus");
        AudioConfig audioConfig = AudioConfig.fromWavFileInput("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/Recording.wav");
        SpeechRecognizer recognizer = new SpeechRecognizer(speechConfig, audioConfig);
//        speechConfig.setSpeechRecognitionLanguage("th-TH");
        Future<com.microsoft.cognitiveservices.speech.SpeechRecognitionResult> task = recognizer.recognizeOnceAsync();
        com.microsoft.cognitiveservices.speech.SpeechRecognitionResult result = task.get();
        System.out.println("RECOGNIZED: Text=" + result.getText());
        return "showText";
    }
}




