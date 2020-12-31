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