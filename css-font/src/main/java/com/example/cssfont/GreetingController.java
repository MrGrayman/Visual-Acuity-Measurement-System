package com.example.cssfont;

import com.example.cssfont.entities.ExaminationResult;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.google.api.gax.longrunning.OperationFuture;
import com.google.cloud.speech.v1.*;
import com.google.protobuf.ByteString;
import com.microsoft.cognitiveservices.speech.SpeechConfig;
import com.microsoft.cognitiveservices.speech.SpeechRecognizer;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import org.apache.commons.io.IOUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
import java.text.ParseException;
import java.util.*;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Paths;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@EnableAutoConfiguration
@Controller

public class GreetingController {
    public String s_wrong ;
    public String s_acuity ;
    public String left_s_wrong;
    public String left_s_acuity;
    public String left_pin_s_wrong;
    public String left_pin_s_acuity;
    public  String right_s_wrong;
    public  String right_s_acuity;
    public  String right_pin_s_wrong;
    public  String right_pin_s_acuity;
    public static String uploadDirectory = System.getProperty("user.dir")+"/";

    // The Environment object will be used to read parameters from the
    // application.properties configuration file
    @Autowired
    private Environment env;

    @GetMapping("/home")
    public String home(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "home";
    }

    @GetMapping("/font1")
    public String font1(Model model) {
        return "font1";
    }

    @GetMapping("/font2")
    public String font2(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("textForm",new TextForm());
        return "font2";
    }

    @GetMapping("/font3")
    public String font3(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//        model.addAttribute("textForm",new TextForm());
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
//                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("passtext");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("passtext",pass_text);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        return "font3";
    }
    @GetMapping("/selectInputTextLeftEye")
    public String selectInputTextLeftEye(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//        model.addAttribute("textForm",new TextForm());
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
//                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("passtext");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("passtext",pass_text);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        model.addAttribute("right_s_wrong",right_s_wrong);
        model.addAttribute("right_s_acuity",right_s_acuity);
        model.addAttribute("right_pin_s_wrong",right_pin_s_wrong);
        model.addAttribute("right_pin_s_acuity",right_pin_s_acuity);
        return "selectInputTextLeftEye";
    }
    @GetMapping("/selectInputTextRightEye")
    public String selectInputTextRightEye(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//        model.addAttribute("textForm",new TextForm());
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
//                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("passtext");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("passtext",pass_text);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        return "selectInputTextRightEye";
    }
    @GetMapping("/selectInputVoiceRightEye")
    public String selectInputVoiceRightEye(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//        model.addAttribute("textForm",new TextForm());
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
//                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("passtext");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("passtext",pass_text);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        return "selectInputVoiceRightEye";
    }
    @GetMapping("/selectInputVoiceLeftEye")
    public String selectInputVoiceLeftEye(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//        model.addAttribute("textForm",new TextForm());
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
//                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("passtext");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("passtext",pass_text);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        model.addAttribute("right_s_wrong",right_s_wrong);
        model.addAttribute("right_s_acuity",right_s_acuity);
        model.addAttribute("right_pin_s_wrong",right_pin_s_wrong);
        model.addAttribute("right_pin_s_acuity",right_pin_s_acuity);

        return "selectInputVoiceLeftEye";
    }
    @GetMapping("/recordSound")
    public String recordSound(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("textForm",new TextForm());
        return "recordSound";
    }
    @GetMapping("/rec")
    public String rec(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("textForm",new TextForm());
        return "rec";
    }
    @GetMapping("/sendAjax")
    public String sendAjax(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("textForm",new TextForm());
        return "sendAjax";
    }
    @GetMapping("/speechJavascript")
    public String speechJavascript(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("textForm",new TextForm());
        return "speechJavascript";
    }
    @GetMapping("/speechApi")
    public String speechApi(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("textForm",new TextForm());
        return "speechApi";
    }
    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> uploadFile(Model model,@RequestParam("uploadFile") MultipartFile uploadFile) {

        try {
            // Get the filename and build the local file path
            String filename = uploadFile.getOriginalFilename();
            System.out.println("File name : " +filename);
            String directory = env.getProperty("netgloo.paths.uploadedFiles");
            String filepath = Paths.get(directory, filename).toString();

            // Save the file locally
            BufferedOutputStream stream =
                    new BufferedOutputStream(new FileOutputStream(new File(filepath)));
            stream.write(uploadFile.getBytes());
            stream.close();
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    } // method uploadFile
    @RequestMapping("/uploadSound")
    public String uploadSound(Model model,@RequestParam("files") MultipartFile[] files) {
        StringBuilder fileNames = new StringBuilder();
        for (MultipartFile file : files) {
            Path fileNameAndPath = Paths.get(uploadDirectory, file.getOriginalFilename());
            fileNames.append(file.getOriginalFilename()+" ");
            try {
                Files.write(fileNameAndPath, file.getBytes());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        System.out.println("filename"+fileNames.toString());
        model.addAttribute("msg", "Successfully uploaded files "+fileNames.toString());
        return "recordSound";
    }

    @GetMapping("/showExamination")
    public String showExamination(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("textForm",new TextForm());
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
//                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("passtext");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("passtext",pass_text);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return "showExamination";
    }
    @RequestMapping(value = "/eyeResult", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody EyeResult eyeResultData(@RequestBody EyeResult eyeResult) {

        left_s_wrong = eyeResult.getLeft_s_wrong();
        left_s_acuity = eyeResult.getLeft_s_acuity();
        left_pin_s_wrong = eyeResult.getLeft_pin_s_wrong();
        left_pin_s_acuity = eyeResult.getLeft_pin_s_acuity();
        System.out.println("left_s_wrong"+left_s_wrong);
        System.out.println("left_s_acuity"+left_s_acuity);
        System.out.println("left_pin_s_wrong"+left_pin_s_wrong);
        System.out.println("left_pin_s_acuity"+left_pin_s_acuity);

        right_s_wrong = eyeResult.getRight_s_wrong();
        right_s_acuity = eyeResult.getRight_s_acuity();
        right_pin_s_wrong = eyeResult.getRight_pin_s_wrong();
        right_pin_s_acuity = eyeResult.getRight_pin_s_acuity();

        System.out.println("right_s_wrong"+right_s_wrong);
        System.out.println("right_s_acuity"+right_s_acuity);
        System.out.println("right_pin_s_wrong"+right_pin_s_wrong);
        System.out.println("right_pin_s_acuity"+right_pin_s_acuity);


        return eyeResult;
    }
    @RequestMapping(value = "/processForm", method= RequestMethod.POST)
    public String processForm(@Validated @ModelAttribute(value="textForm") TextForm textForm , Model model) throws JsonProcessingException, JSONException {
        System.out.println("text : "+textForm);
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = ow.writeValueAsString(textForm);
        JSONObject obj = new JSONObject(json);
        System.out.println("obj : "+obj.toString());
        String message = obj.toString();
//        String test = URLDecoder.decode(optotype, "UTF-8");

        //************write text in text file**************
        try {
            FileWriter myWriter = new FileWriter("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt",false);
            myWriter.write(message);
            myWriter.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        try {
            BufferedReader br = new BufferedReader(new FileReader("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt"));
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            br.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        // ****************************************************************

        return "redirect:/font2";
    }
    @GetMapping("/examinationResult")
    public String examinationResult(Model model) {
        model.addAttribute("examinationResult", new ExaminationResult());
//        System.out.println("s_wrong"+s_wrong);
//        System.out.println("s_acuity"+s_acuity);
        model.addAttribute("right_s_wrong",right_s_wrong);
        model.addAttribute("right_s_acuity",right_s_acuity);
        model.addAttribute("right_pin_s_wrong",right_pin_s_wrong);
        model.addAttribute("right_pin_s_acuity",right_pin_s_acuity);

        model.addAttribute("left_s_wrong",left_s_wrong);
        model.addAttribute("left_s_acuity",left_s_acuity);
        model.addAttribute("left_pin_s_wrong",left_pin_s_wrong);
        model.addAttribute("left_pin_s_acuity",left_pin_s_acuity);
        return "examinationResult";
    }
    @GetMapping("/showText")
    public String showText(Model model) {
//        model.addAttribute("examinationResult", new ExaminationResult());
        return "showText";
    }
    @GetMapping("/speech")
    public String speech(Model model) {
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
//                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("passtext");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("passtext",pass_text);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return "speech";
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
        File waveFile = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/sound_convert/check/0-10_pang.wav");

        String url = "https://api.aiforthai.in.th/partii-webapi";
        String charset = "UTF-8";
        String boundary = Long.toHexString(System.currentTimeMillis());
        String CRLF = "\r\n"; // Line separator required by multipart/form-data.

        Path path = Paths.get("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/sound_convert/check/0-10_pang.wav");
        Path fileName = path.getFileName();

        // print FileName
        System.out.println("FileName: "
                + fileName.toString());

        URLConnection connection = new URL(url).openConnection();
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
        connection.setRequestProperty("Apikey", "gxkvFxgrWSf2r42cAgTvVpmzMPrfPE6S");
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
//        System.out.println("Waiting for response...");
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
//        System.out.println("Result AI For Thai :" + StringEscapeUtils.unescapeJava(sJava));

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

            Path path = Paths.get("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/sound_convert/check/1-10_jame2.wav");
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

//            while (!response.isDone()) {
//                Thread.sleep(1);
//            }

            List<SpeechRecognitionResult> results = response.get().getResultsList();

            for (SpeechRecognitionResult result : results) {
                // There can be several alternative transcripts for a given chunk of speech. Just use the
                // first (most likely) one here.
                SpeechRecognitionAlternative alternative = result.getAlternativesList().get(0);
                System.out.printf("Result Google: %s%n", alternative.getTranscript());
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        return "google";
    }

    @PostMapping("/azure") // //new annotation since 4.3
    public String azure(@RequestParam(value = "file", required = false) File file,
                        RedirectAttributes redirectAttributes) throws IOException, ExecutionException, InterruptedException {
        SpeechConfig speechConfig = SpeechConfig.fromSubscription("550233ccdb3040fdb871a7274eb18f66", "eastasia");
        AudioConfig audioConfig = AudioConfig.fromWavFileInput("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/sound_convert/check/0-10_pang.wav");

        Path path = Paths.get("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/sound_convert/check/0-10_pang.wav");
        Path fileName = path.getFileName();

        // print FileName
        System.out.println("FileName: "
                + fileName.toString());
        speechConfig.setSpeechRecognitionLanguage("th-TH");
        SpeechRecognizer recognizer = new SpeechRecognizer(speechConfig, audioConfig);
        Future<com.microsoft.cognitiveservices.speech.SpeechRecognitionResult> task = recognizer.recognizeOnceAsync();
        com.microsoft.cognitiveservices.speech.SpeechRecognitionResult result = task.get();
        System.out.println("Result Azure = " + result.getText());
        return "showText";
    }
}




