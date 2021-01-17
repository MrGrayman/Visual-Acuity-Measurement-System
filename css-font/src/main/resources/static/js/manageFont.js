var mar = 1.0;
function myFunction(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        document.getElementById("demo").style.fontFamily = listValue;
        document.getElementById("demo2").style.fontFamily = listValue;
        document.getElementById("demo3").style.fontFamily = listValue;
        document.getElementById("demo4").style.fontFamily = listValue;
        document.getElementById("demo5").style.fontFamily = listValue;
    }

    function myPx(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        var listSizeNumber = parseInt(listValue);
        document.getElementById("demo").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo2").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo3").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo4").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo5").style.fontSize = listSizeNumber + "px";
    }

function distance() {
        var distance = document.getElementById("distance").value;
        // change tan to radian
        var y = 1/60;
        var tan = Math.tan(y * Math.PI/180);
        //************************************
        var sizeDecimal = tan * (5 * Math.pow(10,1.0)) * distance;
        var size = (sizeDecimal * 1000).toFixed( 2 );
        var px = size * 3.7795275590551;
        var listValue = px;
        var listSizeNumber = parseInt(listValue);
        document.getElementById("demo").style.fontSize = listValue + "px";
        // document.getElementById("demo2").style.fontSize = listValue + "px";
        // document.getElementById("demo3").style.fontSize = listSizeNumber + "px";
        // document.getElementById("demo4").style.fontSize = listSizeNumber + "px";
        // document.getElementById("demo5").style.fontSize = listSizeNumber + "px";

    }
    function next() {
        var distance = document.getElementById("distance").value;
        var i;
        // change tan to radian
        var y = 1/60;
        var tan = Math.tan(y * Math.PI/180);
        //************************************
        for (i = 0; i < cars.length; i++) {
            text += cars[i] + "<br>";
        }
        var sizeDecimal = tan * (5 * Math.pow(10,1.0)) * distance;
        var size = (sizeDecimal * 1000).toFixed( 2 );
        var px = size * 3.7795275590551;
        var listValue = px;
        var listSizeNumber = parseInt(listValue);
        document.getElementById("demo").style.fontSize = listValue + "px";
        // document.getElementById("demo2").style.fontSize = listValue + "px";
        // document.getElementById("demo3").style.fontSize = listSizeNumber + "px";
        // document.getElementById("demo4").style.fontSize = listSizeNumber + "px";
        // document.getElementById("demo5").style.fontSize = listSizeNumber + "px";

    }
    function back() {
        var distance = document.getElementById("distance").value;
        // change tan to radian
        var y = 1/60;
        var tan = Math.tan(y * Math.PI/180);
        //************************************
        var sizeDecimal = tan * (5 * Math.pow(10,1.0)) * distance;
        var size = (sizeDecimal * 1000).toFixed( 2 );
        var px = size * 3.7795275590551;
        var listValue = px;
        var listSizeNumber = parseInt(listValue);
        document.getElementById("demo").style.fontSize = listValue + "px";
        // document.getElementById("demo2").style.fontSize = listValue + "px";
        // document.getElementById("demo3").style.fontSize = listSizeNumber + "px";
        // document.getElementById("demo4").style.fontSize = listSizeNumber + "px";
        // document.getElementById("demo5").style.fontSize = listSizeNumber + "px";

    }

    function random(buttonTag) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var r = ''
        var r2 = ''
        var r3 = ''
        var r4 = ''
        var r5 = ''
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
        }
        document.getElementById('demo').innerHTML = r;
        document.getElementById('demo2').innerHTML = r2;
        document.getElementById('demo3').innerHTML = r3;
        document.getElementById('demo4').innerHTML = r4;
        document.getElementById('demo5').innerHTML = r5;
        return r,r2,r3,r4,r5;
    }

    function randomNumber(buttonTag) {
        var result           = '';
        var characters       = '0123456789';
        var rn1 = ''
        var rn2 = ''
        var rn3 = ''
        var rn4 = ''
        var rn5 = ''
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
        }
        document.getElementById('demo').innerHTML = rn1;
        document.getElementById('demo2').innerHTML = rn2;
        document.getElementById('demo3').innerHTML = rn3;
        document.getElementById('demo4').innerHTML = rn4;
        document.getElementById('demo5').innerHTML = rn5;
        return rn1,rn2,rn3,rn4,rn5;
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

        document.getElementById('demo').innerHTML = text;
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