var numTemp = 1;
var arr_result = [];
var round_wrong = 1;
var round_Save = 1;
let result = 0;
var num_of_page = 1;
var temp_s_wrong;
var temp_s_pin_wrong;
var temp_left_s_wrong;
var temp_left_s_acuity;
var temp_left_pin_s_wrong;
var temp_left_pin_s_acuity;
var temp_right_s_wrong;
var temp_right_s_acuity;
var temp_right_pin_s_wrong;
var temp_right_pin_s_acuity;
function examination(){
    var y = document.getElementById("list");
    var Answer2 = document.getElementById("Answer2");
    var btnSpeech = document.getElementById("btn-speech");
    var btnOk = document.getElementById("btnOk");
    y.style.display = "block";
    btnSpeech.style.display = "none";
    btnOk.style.display = "none";
    Answer2.style.display = "none";
    ReadData();
    show_info_left_eye();
}
function loadData(){
    ReadData();
    var x = document.getElementById("selection");
    var y = document.getElementById("list");
    var Answer2 = document.getElementById("Answer2");
    var btnSpeech = document.getElementById("btn-speech");
    var btnOk = document.getElementById("btnOk");
    x.style.display = "none";
    y.style.display = "block";
    btnSpeech.style.display = "none";
    btnOk.style.display = "none";
    Answer2.style.display = "none";
    ReadData();
}
function examinationSpeech(){
    var x = document.getElementById("selection");
    var y = document.getElementById("list");
    var Answer = document.getElementById("Answer");
    var btnNext = document.getElementById("big-button2");
    var btnBack = document.getElementById("big-button1");
    // x.style.display = "none";
    y.style.display = "block";
    Answer.style.display = "none";
    btnNext.style.display = "none";
    btnBack.style.display = "none";
    show_info_left_eye();
    ReadData();
    }
function changeFontFamily(optotype) {
    var listValue = optotype;
    document.getElementById("demo1").style.fontFamily = listValue;
    document.getElementById("demo2").style.fontFamily = listValue;
    document.getElementById("demo3").style.fontFamily = listValue;
    document.getElementById("demo4").style.fontFamily = listValue;
    document.getElementById("demo5").style.fontFamily = listValue;
}
function changeDistance(distance) {
    var mar = 1.0;
    var distanceValue = distance;
    // change tan to radian
    var y = 1/60;
    var tan = Math.tan(y * Math.PI/180);
    //************************************
    for (var i = 1; i <= 11; i++) {
        var sizeDecimal = tan * (5 * Math.pow(10,mar)) * distanceValue
        console.log("sizedecimal",sizeDecimal);
        var size = (sizeDecimal * 1000);
        console.log("size",size);
//        var inch = size * 0.0393701;
//        console.log("inch",inch);
//        var pt = inch * 72;
//        console.log("pt",pt);
        var px = size * 3.7795275590551;
        console.log("px",px);
        var listValue = px;
        document.getElementById("demo"+i).style.fontSize = listValue + "px";
        mar = mar - 0.1;
    }
}
function nextline(){
    if(numTemp < 11){
        numTemp = numTemp +1;
    }
    round_wrong = 1;
    $('#Answer').val('');
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    var demo3 = document.getElementById("demo3");
    var demo4 = document.getElementById("demo4");
    var demo5 = document.getElementById("demo5");
    var demo6 = document.getElementById("demo6");
    var demo7 = document.getElementById("demo7");
    var demo8 = document.getElementById("demo8");
    var demo9 = document.getElementById("demo9");
    var demo10 = document.getElementById("demo10");
    var demo11 = document.getElementById("demo11");
    // var distance_numTemp = document.getElementById("distance_numTemp");
    if (numTemp == 1){
        document.getElementById('distance_numTemp').innerHTML = "6/60";
        demo1.style.display = "block";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 2){
        document.getElementById('distance_numTemp').innerHTML = "6/48";
        demo1.style.display = "none";
        demo2.style.display = "block";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 3){
        document.getElementById('distance_numTemp').innerHTML = "6/38";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "block";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 4){
        document.getElementById('distance_numTemp').innerHTML = "6/30";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "block";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 5){
        document.getElementById('distance_numTemp').innerHTML = "6/24";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "block";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 6){
        document.getElementById('distance_numTemp').innerHTML = "6/20";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "block";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 7){
        document.getElementById('distance_numTemp').innerHTML = "6/15";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "block";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 8){
        document.getElementById('distance_numTemp').innerHTML = "6/12";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "block";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 9){
        document.getElementById('distance_numTemp').innerHTML = "6/10";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "block";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 10){
        document.getElementById('distance_numTemp').innerHTML = "6/7.5";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "block";
        demo11.style.display = "none";
    }
    else if (numTemp == 11){
        document.getElementById('distance_numTemp').innerHTML = "6/6";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "block";
    }

}
function backline(){
    if(numTemp > 1){
        numTemp = numTemp -1;
    }
    round_wrong = 1;
    $('#Answer').val('');
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    var demo3 = document.getElementById("demo3");
    var demo4 = document.getElementById("demo4");
    var demo5 = document.getElementById("demo5");
    var demo6 = document.getElementById("demo6");
    var demo7 = document.getElementById("demo7");
    var demo8 = document.getElementById("demo8");
    var demo9 = document.getElementById("demo9");
    var demo10 = document.getElementById("demo10");
    var demo11 = document.getElementById("demo11");
    if (numTemp == 1){
        document.getElementById('distance_numTemp').innerHTML = "6/60";
        demo1.style.display = "block";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 2){
        document.getElementById('distance_numTemp').innerHTML = "6/48";
        demo1.style.display = "none";
        demo2.style.display = "block";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 3){
        document.getElementById('distance_numTemp').innerHTML = "6/38";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "block";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 4){
        document.getElementById('distance_numTemp').innerHTML = "6/30";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "block";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 5){
        document.getElementById('distance_numTemp').innerHTML = "6/24";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "block";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 6){
        document.getElementById('distance_numTemp').innerHTML = "6/20";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "block";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 7){
        document.getElementById('distance_numTemp').innerHTML = "6/15";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "block";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 8){
        document.getElementById('distance_numTemp').innerHTML = "6/12";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "block";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 9){
        document.getElementById('distance_numTemp').innerHTML = "6/10";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "block";
        demo10.style.display = "none";
        demo11.style.display = "none";
    }
    else if (numTemp == 10){
        document.getElementById('distance_numTemp').innerHTML = "6/7.5";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "block";
        demo11.style.display = "none";
    }
    else if (numTemp == 11){
        document.getElementById('distance_numTemp').innerHTML = "6/6";
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
        demo8.style.display = "none";
        demo9.style.display = "none";
        demo10.style.display = "none";
        demo11.style.display = "block";
    }

}


$(document).ready(function () {
    $('#Answer').keyup(function(e) {
        let input = $(this).val().toUpperCase();
        console.log("input"+input);
        let text = $('#demo'+numTemp).text();
        console.log("text"+text);
        var s_wrong;
        var s_acuity;


        text = text.match(/[A-Z0-9]/g);
        temp_s_wrong = result.s_wrong;
        if (round_Save % 2 == 0){
            temp_s_pin_wrong = result.s_wrong;
            console.log("tem pin : "+temp_s_pin_wrong);
        }
        let size_text = text.length;
        let size_input = input.length;
        if(size_input == size_text){
            result = calculate(text, input);
            console.log(result);
            console.log(arr_result);

            if(result.percent < 50){
                if (numTemp == 11){
                    s_wrong = result.s_wrong;
                    if (numTemp == 11){
                        s_acuity = "6/6";
                    }
                    sendAjax(s_wrong,s_acuity)
                }else{
                    $('#Answer').val('');
                    // $('#big-button1').click();
                    nextline();

                }
            }
            else{
                if (round_wrong > 3){
                    $('#Answer').val('');
                    round_wrong = round_wrong + 1;
                }
                else {
                    if (numTemp == 1){
                        if (round_Save % 2 == 1){
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }else{
                                s_wrong = " ";
                            }
                        }else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        s_acuity = "6/60";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 2){
                         if (round_Save % 2 == 1 ){
                             console.log("result save : "+result.s_wrong);
                             if (result.s_wrong >= 5){
                                 console.log("temp_s_wrong : "+temp_s_wrong);
                                 if (temp_s_wrong <= 1 ){
                                     s_wrong = "-" + "1";
                                 }else {
                                     s_wrong = "-" + "2";
                                 }
                             }
                             else{
                                 if (result.s_wrong <= 3 ){
                                     s_wrong = "+" + "2";
                                 }else if (result.s_wrong <= 4){
                                     s_wrong = "+" + "1";
                                 }
                             }
                         }
                         else{
                             if (result.s_wrong >= 5){
                                 console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                 if (temp_s_pin_wrong <= 1 ){
                                     s_wrong = "-" + "1";
                                 }else if (temp_s_pin_wrong <= 2 ){
                                     s_wrong = "-" + "2";
                                 }else{
                                     s_wrong = " ";
                                 }
                             }
                             else{
                                 if (result.s_wrong <= 3 ){
                                     s_wrong = "+" + "2";
                                 }else if (result.s_wrong <= 4){
                                     s_wrong = "+" + "1";
                                 }
                             }
                         }
                        s_acuity = "6/48";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 3){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/38";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 4){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/30";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 5){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/24";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 6){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/20";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 7){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/15";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 8){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/12";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 9){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/10";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 10){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/7.5";
                        save_result_leftEye(s_wrong,s_acuity)
                    }else if (numTemp == 11){
                        if (round_Save % 2 == 1 ){
                            console.log("result save : "+result.s_wrong);
                            if (result.s_wrong >= 5){
                                console.log("temp_s_wrong : "+temp_s_wrong);
                                if (temp_s_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else {
                                    s_wrong = "-" + "2";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        else{
                            if (result.s_wrong >= 5){
                                console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                                if (temp_s_pin_wrong <= 1 ){
                                    s_wrong = "-" + "1";
                                }else if (temp_s_pin_wrong <= 2 ){
                                    s_wrong = "-" + "2";
                                }else{
                                    s_wrong = " ";
                                }
                            }
                            else{
                                if (result.s_wrong <= 3 ){
                                    s_wrong = "+" + "2";
                                }else if (result.s_wrong <= 4){
                                    s_wrong = "+" + "1";
                                }
                            }
                        }
                        s_acuity = "6/6";
                        save_result_leftEye(s_wrong,s_acuity)
                    }

                }
            }
        }
    });
    function calculate(text, input){
        let size_input = input.length;
        let size_text = text.length;
        let s_wrong = 0;
        for(let i = 0; i < size_input; i++){
            if(text[i] != input.charAt(i)){
                s_wrong++;
            }
        }

        let result = {
            percent: s_wrong*100/size_text,
            s_wrong: s_wrong
        };
        arr_result.push(result);
        return result;
    }

});
function checkSpeechText(){
    let input = $('#Answer2').val().toUpperCase();
    let text = $('#demo'+numTemp).text();
    console.log("input"+input);
    console.log("text"+text);

    var s_wrong;
    var s_acuity;


    text = text.match(/[A-Z0-9]/g);
    temp_s_wrong = result.s_wrong;
    if (round_Save % 2 == 0){
        temp_s_pin_wrong = result.s_wrong;
        console.log("tem pin : "+temp_s_pin_wrong);
    }
    let size_text = text.length;
    let size_input = input.length;
    if(size_input == size_text){
        result = calculate2(text, input);
        console.log(result);
        console.log(arr_result);

        if(result.percent < 50){
            if (numTemp == 11){
                s_wrong = result.s_wrong;
                if (numTemp == 11){
                    s_acuity = "6/6";
                }
                sendAjax(s_wrong,s_acuity)
            }else{
                $('#Answer2').val('');
                // $('#big-button1').click();
                nextline();

            }
        }
        else{
            if (round_wrong > 3){
                $('#Answer2').val('');
                round_wrong = round_wrong + 1;
            }
            else {
                if (numTemp == 1){
                    if (round_Save % 2 == 1){
                        if (result.s_wrong <= 3 ){
                            s_wrong = "+" + "2";
                        }else if (result.s_wrong <= 4){
                            s_wrong = "+" + "1";
                        }else{
                            s_wrong = " ";
                        }
                    }else{
                        if (result.s_wrong <= 3 ){
                            s_wrong = "+" + "2";
                        }else if (result.s_wrong <= 4){
                            s_wrong = "+" + "1";
                        }else{
                            s_wrong = " ";
                        }
                    }
                    s_acuity = "6/60";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 2){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/48";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 3){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/38";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 4){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/30";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 5){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/24";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 6){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/20";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 7){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/15";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 8){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/12";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 9){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/10";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 10){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/7.5";
                    save_result_leftEye(s_wrong,s_acuity)
                }else if (numTemp == 11){
                    if (round_Save % 2 == 1 ){
                        console.log("result save : "+result.s_wrong);
                        if (result.s_wrong >= 5){
                            console.log("temp_s_wrong : "+temp_s_wrong);
                            if (temp_s_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else {
                                s_wrong = "-" + "2";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    else{
                        if (result.s_wrong >= 5){
                            console.log("temp_s_pin_wrong : "+temp_s_pin_wrong);
                            if (temp_s_pin_wrong <= 1 ){
                                s_wrong = "-" + "1";
                            }else if (temp_s_pin_wrong <= 2 ){
                                s_wrong = "-" + "2";
                            }else{
                                s_wrong = " ";
                            }
                        }
                        else{
                            if (result.s_wrong <= 3 ){
                                s_wrong = "+" + "2";
                            }else if (result.s_wrong <= 4){
                                s_wrong = "+" + "1";
                            }
                        }
                    }
                    s_acuity = "6/6";
                    save_result_leftEye(s_wrong,s_acuity)
                }
            }
        }
    }
    function calculate2(text, input){
        let size_input = input.length;
        let size_text = text.length;
        let s_wrong = 0;
        for(let i = 0; i < size_input; i++){
            if(text[i] != input.charAt(i)){
                s_wrong++;
            }
        }

        let result = {
            percent: s_wrong*100/size_text,
            s_wrong: s_wrong
        };
        arr_result.push(result);
        return result;
    }
}
function save_result_leftEye(s_wrong,s_acuity){
    if (round_Save % 2 == 1){
        temp_left_s_wrong = s_wrong;
        temp_left_s_acuity = s_acuity;
        round_Save = round_Save + 1;
        show_info_left_eye_ph();
    }
    else {
        temp_left_pin_s_wrong = s_wrong;
        temp_left_pin_s_acuity = s_acuity;
        round_Save = 1;
        sendAjax(temp_left_s_wrong ,temp_left_s_acuity ,temp_left_pin_s_wrong , temp_left_pin_s_acuity)
    }
}
function page_ExamResult_onload(){
    ShowData();
}
function page_font3_onload(){
    show_modal_onload_font3();
}
function show_modal(){
    $("#btn_show_modal").click();
}
function show_modal_onload_font3(){
    $("#btn_show_modal2").click();
}
function show_info_left_eye(){
    $("#btn_show_modal2").click();

}
function show_modal_onload_font4(){
    $("#btn_show_modal3").click();
}
function show_info_left_eye_ph(){
    var right = document.getElementById("right")
    var right_ph = document.getElementById("right_ph")
    var left = document.getElementById("left")
    var left_ph = document.getElementById("left_ph")

    right.style.display = "none";
    right_ph.style.display = "block";
    left.style.display = "none";
    left_ph.style.display = "block";
    $('#Answer').val('');
    $('#Answer2').val('');
    $("#btn_show_modal3").click();
}
function runSpeechRecognition() {
    // get output div reference
    var Answer2 = document.getElementById("Answer2").value;
    // get action element reference
    var tempText;
    var action = document.getElementById("action");
    var textContent = '';
    // new speech recognition object
    try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.interimResults = true;
        // recognition.lang = "th-TH"
        recognition.maxAlternatives = 1;
        // recognition.lang = "en-US"
    }
    catch(e) {
        console.error(e);
        $('.no-browser-support').show();
        $('.app').hide();
    }

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<label>listening, please speak...</label>";
    };

    recognition.onspeechend = function() {
        action.innerHTML = "";
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far.
        // We only need the current one.
        var current = event.resultIndex;
        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;
        // Add the current transcript to the contents of our Note.
        // There is a weird bug on mobile, where everything is repeated twice.
        // There is no official solution so far so we have to handle an edge case.
        var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
        var confidence = event.results[0][0].confidence;
        console.log("confident : "+confidence)
        if(!mobileRepeatBug) {
            tempText = transcript.replace(/\s/g, '');
            document.getElementById('Answer2').value = Answer2 + tempText;
            Answer2.classList.remove("hide");
        }
        // Answer.value = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
        // Answer.value = transcript.replace(/\s/g, '');
        // Answer.classList.remove("hide");
    };
    recognition.onerror = function(event) {
        if(event.error == 'no-speech') {
            instructions.text('No speech was detected. Try again.');
        };
    }

    // start recognition
    recognition.start();
}
function speechText(){
    // get output div reference
    var Answer = document.getElementById("Answer");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<label>listening, please speak...</label>";
    };

    recognition.onspeechend = function() {
        action.innerHTML = "";
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        // Answer.value = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
        Answer.value = transcript.replace(/\s/g, '');
        Answer.classList.remove("hide");
    };

    // start recognition
    recognition.start();
}
