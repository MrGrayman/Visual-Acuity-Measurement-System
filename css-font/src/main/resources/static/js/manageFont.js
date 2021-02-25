// var mar = 1.0;
function myFunction(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        document.getElementById("demo1").style.fontFamily = listValue;
        document.getElementById("demo2").style.fontFamily = listValue;
        document.getElementById("demo3").style.fontFamily = listValue;
        document.getElementById("demo4").style.fontFamily = listValue;
        document.getElementById("demo5").style.fontFamily = listValue;
    }

    function myPx(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        var listSizeNumber = parseInt(listValue);
        document.getElementById("demo1").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo2").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo3").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo4").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo5").style.fontSize = listSizeNumber + "px";
    }

function distance(selectTag) {
        var mar = 1.0;
        var distance = selectTag.options[selectTag.selectedIndex].text;
        // change tan to radian
        var y = 1/60;
        var tan = Math.tan(y * Math.PI/180);
        //************************************
    for (var i = 1; i <= 7; i++) {
        var sizeDecimal = tan * (5 * Math.pow(10,mar)) * distance;
        console.log("sizedecimal",sizeDecimal);
        var size = (sizeDecimal * 1000);
        console.log("size",size);
        var inch = size * 0.0393701;
        console.log("inch",inch);
        var pt = inch * 72;
        console.log("pt",pt);
        // var px = size * 3.7795275590551;
        // console.log("px",px);
        var listValue = pt;
        document.getElementById("demo"+i).style.fontSize = listValue + "pt";
        mar = mar - 0.1;
    }
}

    function random(buttonTag) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var r = ''
        var r2 = ''
        var r3 = ''
        var r4 = ''
        var r5 = ''
        var r6 = ''
        var r7 = ''
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {

            var randomNumber = Math.floor(Math.random() *(27-1) + 1);
            result = characters.charAt(randomNumber);
            r = r + result + " ";

            var randomNumber2 = Math.floor(Math.random() *(27-1) + 1);
            result = characters.charAt(randomNumber2);
            r2 = r2 + result + " ";

            var randomNumber3 = Math.floor(Math.random() *(27-1) + 1);
            result = characters.charAt(randomNumber3);
            r3 = r3 + result + " ";

            var randomNumber4 = Math.floor(Math.random() *(27-1) + 1);
            result = characters.charAt(randomNumber4);
            r4 = r4 + result + " ";

            var randomNumber5 = Math.floor(Math.random() *(27-1) + 1);
            result = characters.charAt(randomNumber5);
            r5 = r5 + result + " ";

            var randomNumber6 = Math.floor(Math.random() *(27-1) + 1);
            result = characters.charAt(randomNumber5);
            r6 = r6 + result + " ";

            var randomNumber7 = Math.floor(Math.random() *(27-1) + 1);
            result = characters.charAt(randomNumber5);
            r7 = r7 + result + " ";
        }
        document.getElementById('demo1').innerHTML = r;
        document.getElementById('demo2').innerHTML = r2;
        document.getElementById('demo3').innerHTML = r3;
        document.getElementById('demo4').innerHTML = r4;
        document.getElementById('demo5').innerHTML = r5;
        document.getElementById('demo6').innerHTML = r6;
        document.getElementById('demo7').innerHTML = r7;
        return r,r2,r3,r4,r5,r6,r7;
    }

    function randomNumber(buttonTag) {
        var result           = '';
        var characters       = '0123456789';
        var rn1 = ''
        var rn2 = ''
        var rn3 = ''
        var rn4 = ''
        var rn5 = ''
        var rn6 = ''
        var rn7 = ''
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {

            var randomNumber = Math.floor(Math.random() *(10-1) + 1);
            result = characters.charAt(randomNumber);
            rn1 = rn1 + result + " ";

            var randomNumber2 = Math.floor(Math.random() *(10-1) + 1);
            result = characters.charAt(randomNumber2);
            rn2 = rn2 + result + " ";

            var randomNumber3 = Math.floor(Math.random() *(10-1) + 1);
            result = characters.charAt(randomNumber3);
            rn3 = rn3 + result + " ";

            var randomNumber4 = Math.floor(Math.random() *(10-1) + 1);
            result = characters.charAt(randomNumber4);
            rn4 = rn4 + result + " ";

            var randomNumber5 = Math.floor(Math.random() *(10-1) + 1);
            result = characters.charAt(randomNumber5);
            rn5 = rn5 + result + " ";

            var randomNumber5 = Math.floor(Math.random() *(10-1) + 1);
            result = characters.charAt(randomNumber5);
            rn6 = rn6 + result + " ";

            var randomNumber5 = Math.floor(Math.random() *(10-1) + 1);
            result = characters.charAt(randomNumber5);
            rn7 = rn7 + result + " ";
        }
        document.getElementById('demo1').innerHTML = rn1;
        document.getElementById('demo2').innerHTML = rn2;
        document.getElementById('demo3').innerHTML = rn3;
        document.getElementById('demo4').innerHTML = rn4;
        document.getElementById('demo5').innerHTML = rn5;
        document.getElementById('demo6').innerHTML = rn6;
        document.getElementById('demo7').innerHTML = rn7;
        return rn1,rn2,rn3,rn4,rn5,rn6,rn7;
    }

    function change1(buttonTag){
        var x = document.getElementById("all");
        var y = document.getElementById("random-button");
        var z = document.getElementById("import-button");
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
    }
    function change2(buttonTag){
         var x = document.getElementById("all");
         var y = document.getElementById("random-button");
         var z = document.getElementById("import-button");
            y.style.display = "block";
            x.style.display = "none";
            z.style.display = "none";
    }
    function change3(buttonTag){
         var x = document.getElementById("all");
         var y = document.getElementById("random-button");
         var z = document.getElementById("import-button");
            z.style.display = "block";
            x.style.display = "none";
            y.style.display = "none";
    }

//    function showTextArea(textareaTag) {
//        var value = document.getElementById("textarea1").value;
//        var text = "";
//        var temp;
//        for (var i = 0; i < value.length; i++) {
//            document.getElementById('demo2').innerHTML = "";
//            document.getElementById('demo3').innerHTML = "";
//            document.getElementById('demo4').innerHTML = "";
//            document.getElementById('demo5').innerHTML = "";
//            temp = i;
//            if(temp % 5 == 0){
//                text = text + "<br>";
//                text = text + value[i] + "\n";
//            }else{
//                text = text + value[i] + "\n";
//            }
//        }
//        document.getElementById('demo').innerHTML = text;
//    }

function showTextArea(textareaTag) {
        var value = document.getElementById("textarea1").value;
        var text = "";
        var text2 = "";
        var text3 = "";
        var text4 = "";
        var text5 = "";
        var text6 = "";
        var text7 = "";
//        var text8 = "";
//        var text9 = "";
//        var text10 = "";
        for (var i = 0; i < value.length; i++) {
            if(i < 5){
                text = text + value[i] + "\n";
            }else if(i < 10){
                text2 = text2 + value[i] + "\n";
            }else if(i < 15){
                text3 = text3 + value[i] + "\n";
            }else if(i < 20){
                text4 = text4 + value[i] + "\n";
            }else if(i < 25){
                text5 = text5 + value[i] + "\n";
            }else if(i < 30){
                text6 = text6 + value[i] + "\n";
            }else if(i < 35){
                text7 = text7 + value[i] + "\n";
            }
//            else if(i < 40){
//                text8 = text8 + value[i] + "\n";
//            }else if(i < 45){
//                text9 = text9 + value[i] + "\n";
//            }else if(i < 50){
//                text10 = text10 + value[i] + "\n";
//            }
        }

        document.getElementById('demo1').innerHTML = text;
        document.getElementById('demo2').innerHTML = text2;
        document.getElementById('demo3').innerHTML = text3;
        document.getElementById('demo4').innerHTML = text4;
        document.getElementById('demo5').innerHTML = text5;
        document.getElementById('demo6').innerHTML = text6;
        document.getElementById('demo7').innerHTML = text7;
//        document.getElementById('demo8').innerHTML = text8;
//        document.getElementById('demo9').innerHTML = text9;
//        document.getElementById('demo10').innerHTML = text10;
}

function download_txt() {
    var demo1 = document.getElementById('demo1').innerHTML;
    var demo2 = document.getElementById('demo2').innerHTML;
    var demo3 = document.getElementById('demo3').innerHTML;
    var demo4 = document.getElementById('demo4').innerHTML;
    var demo5 = document.getElementById('demo5').innerHTML;
    var demo6 = document.getElementById('demo6').innerHTML;
    var demo7 = document.getElementById('demo7').innerHTML;
    var optotype = document.getElementById('optotype').value;
    var distance = document.getElementById('distance').value;
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(demo1) +encodeURI("\n"+demo2) +encodeURI("\n"+demo3)
        +encodeURI("\n"+demo4) +encodeURI("\n"+demo5) +encodeURI("\n"+demo6) +encodeURI("\n"+demo7) +encodeURI("\nFont : "+optotype) +encodeURI("\nDistance : "+distance);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'myFile.txt';
    hiddenElement.click();
}
function sentText(buttonTag){
    alert("123")
    console.log("123")
    var id = 12;
    $.ajax({
        type : "POST",
        url : "/testapi",
        data : {id:id},
        timeout : 100000,
        success : function(id) {
            console.log("SUCCESS: ", id);
            display(id);
            alert(response);
        },
        error : function(e) {
            console.log("ERROR: ", e);
            display(e);
        },
        done : function(e) {
            console.log("DONE");
        }
    });
}
