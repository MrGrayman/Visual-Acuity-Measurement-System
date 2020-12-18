package com.example.cssfont;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import org.apache.commons.io.IOUtils;

public class partii {

    public static void main(String args[]) throws IOException {
//        String path = "D:\\Accessories\\SeniorProject\\Visual-Acuity-Measurement-System\\Recording.wav";
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
        System.out.println("5");
        // read output
        InputStream response = connection.getInputStream();
        StringWriter writer = new StringWriter();
        IOUtils.copy(response, writer, "UTF-8");
        String results = writer.toString();
        System.out.println("result = " + results);
        System.out.println("\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35");

    }
}
