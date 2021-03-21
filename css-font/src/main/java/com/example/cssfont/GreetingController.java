package com.example.cssfont;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.google.api.gax.longrunning.OperationFuture;
import com.google.cloud.speech.v1.*;
import com.google.protobuf.ByteString;
import com.microsoft.cognitiveservices.speech.SpeechConfig;
import com.microsoft.cognitiveservices.speech.SpeechRecognizer;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLDecoder;
import java.nio.file.Files;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import java.io.File;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
@EnableAutoConfiguration
@Controller
public class GreetingController {

    @GetMapping("/home")
    public String home(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "home";
    }

    @GetMapping("/font1")
    public String font1(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        String hello = "Hello Kunad!";
        model.addAttribute("testHello",hello);
        return "font1";
    }

    @GetMapping("/font2")
    public String font2(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);
        return "font2";
    }

    @GetMapping("/font3")
    public String font3(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        try {
            File myObj = new File("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/test_text_file/file.txt");
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                System.out.println(data);
                JSONObject jsonData = new JSONObject(data);
                String pass_text = jsonData.getString("pass_text");
                String distance = jsonData.getString("distance");
                String optotype = jsonData.getString("optotype");
                model.addAttribute("optotype",optotype);
                model.addAttribute("distance",distance);
                model.addAttribute("pass_text",pass_text);
                model.addAttribute("testHello",data);
            }
            myReader.close();
        } catch (FileNotFoundException | JSONException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }

        return "font3";
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
    @RequestMapping(value = "/processForm", method=RequestMethod.POST)
    public String processForm(@ModelAttribute(value="textForm") textForm textForm) throws JsonProcessingException, JSONException {
        System.out.println("text : "+textForm);

        return "redirect:/";
    }
    @GetMapping("/saveEmployee")
    public String saveEmployee(@ModelAttribute("employee") Employee employee) throws JsonProcessingException, JSONException {
        System.out.println("tertert");
        System.out.println(""+employee);
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = ow.writeValueAsString(employee);
        JSONObject obj = new JSONObject(json);
        System.out.println("obj : "+obj.toString());
        System.out.println("Json"+json);
        // save employee to database
        return "redirect:/";
    }
    @RequestMapping(value ="/hello" , method=RequestMethod.POST)
    //read the provided form data
    public String display(@RequestParam(value = "optotype", required = false) String optotype,
                          @RequestParam(value = "distance", required = false) String distance,
                          @RequestParam(value = "passtext", required = false) String passtext,Model m) throws UnsupportedEncodingException, JSONException {
        System.out.println("pass_text : "+passtext);
        System.out.println("optotype : "+optotype);
        System.out.println("distance : "+distance);
        optotype = "Conv_Optician-Sans";
        distance = "3";
        passtext = "S I C M R J D B I T H O F N M F Q O H X O X P T Q Z S Q N S S U Q U B ";
        JSONObject json = new JSONObject();
        json.put("optotype", optotype);
        json.put("distance", distance);
        json.put("pass_text", passtext);
        String message = json.toString();
        System.out.println("message : "+message);
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
        return "font2";
    }
    @ResponseBody
    @RequestMapping(value = "/apisent", method = RequestMethod.POST)
    public String getSearchResultViaAjax(@RequestParam(value = "id",required = false) Integer id)
    {
        System.out.println("id: "+id);
        return "font2"+id;
    }

    @RequestMapping(value = "/testapi",method = RequestMethod.GET)
    public String setupForm(@RequestParam(value = "id",required = false) int petId, ModelMap model) {
        System.out.println("id");
//        model.addAttribute("id", petId);
        return "font2";
    }
    @RequestMapping(value = "/results", method = RequestMethod.GET)
    public @ResponseBody String test (HttpServletRequest request,@RequestParam("text") String text) {

        System.out.println(text);


        // other stuff
        return "font2";
    }
    @RequestMapping(value = "/submit.htm", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    String Submit(@RequestParam(value = "name",required = false) String name,@RequestParam(value = "location",required = false) String location) {
        System.out.println(name);
        // your logic here
        return name;
    }
    @PostMapping("/submit.htm/{name}/{location}")
    @ResponseBody
    public String getEmployeesById(@PathVariable String name,@PathVariable String location) {
        System.out.println("Name : "+name);
        System.out.println("Name : "+location);
        return "ID: " + location;
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
        System.out.println("Result AI For Thai :" + StringEscapeUtils.unescapeJava(sJava));

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

            Path path = Paths.get("D:/Accessories/SeniorProject/Visual-Acuity-Measurement-System/sound_convert/check/0-10_pang.wav");
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
        return "showText";
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




