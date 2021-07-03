// var mar = 1.0;
function myFunction(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        document.getElementById("demo1").style.fontFamily = listValue;
        document.getElementById("demo2").style.fontFamily = listValue;
        document.getElementById("demo3").style.fontFamily = listValue;
        document.getElementById("demo4").style.fontFamily = listValue;
        document.getElementById("demo5").style.fontFamily = listValue;
        document.getElementById("demo6").style.fontFamily = listValue;
        document.getElementById("demo7").style.fontFamily = listValue;
        document.getElementById("demo8").style.fontFamily = listValue;
        document.getElementById("demo9").style.fontFamily = listValue;
        document.getElementById("demo10").style.fontFamily = listValue;
        document.getElementById("demo11").style.fontFamily = listValue;
    }

    function myPx(selectTag) {
        var listValue = selectTag.options[selectTag.selectedIndex].text;
        var listSizeNumber = parseInt(listValue);
        document.getElementById("demo1").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo2").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo3").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo4").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo5").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo6").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo7").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo8").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo9").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo10").style.fontSize = listSizeNumber + "px";
        document.getElementById("demo11").style.fontSize = listSizeNumber + "px";
    }

function changeDistance(selectTag) {
        var mar = 1.0;
        var distance = selectTag.options[selectTag.selectedIndex].text;
        document.getElementById('test123').value = distance;
        // change tan to radian
        var y = 1/60;
        var tan = Math.tan(y * Math.PI/180);
        //************************************
    for (var i = 1; i <= 11; i++) {
        var sizeDecimal = tan * (5 * Math.pow(10,mar)) * distance;
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

    let selectedItemIndex;
    let selectedItemIndex2;
    let selectedItemIndex3;
    let selectedItemIndex4;
    let selectedItemIndex5;
    let selectedItemIndex6;
    let selectedItemIndex7;
    let selectedItemIndex8;
    let selectedItemIndex9;
    let selectedItemIndex10;
    let selectedItemIndex11;
    var characters = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    function selectNewOne(compare){

    const randomItemIndex = Math.floor(Math.random() * characters.length);
      if (characters[randomItemIndex] === compare) {
        return selectNewOne();
      }

      return characters[randomItemIndex];
    }

    function random(buttonTag) {
        var result = '';
        var characters = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//        var r = ''
//        var r2 = ''
//        var r3 = ''
//        var r4 = ''
//        var r5 = ''
//        var r6 = ''
//        var r7 = ''
        var charactersLength = characters.length;
        var selectedCharacter = [];
        var selectedCharacter2 = [];
        var selectedCharacter3 = [];
        var selectedCharacter4 = [];
        var selectedCharacter5 = [];
        var selectedCharacter6 = [];
        var selectedCharacter7 = [];
        var selectedCharacter8 = [];
        var selectedCharacter9 = [];
        var selectedCharacter10 = [];
        var selectedCharacter11 = [];
        for ( var i = 0; i < 5; i++ ) {

//            var randomNumber = selectNewOne();
            selectedItemIndex = selectNewOne(selectedItemIndex);
            selectedCharacter.push(selectedItemIndex);

            selectedItemIndex2 = selectNewOne(selectedItemIndex2);
            selectedCharacter2.push(selectedItemIndex2);

            selectedItemIndex3 = selectNewOne(selectedItemIndex3);
            selectedCharacter3.push(selectedItemIndex3);

            selectedItemIndex4 = selectNewOne(selectedItemIndex4);
            selectedCharacter4.push(selectedItemIndex4);

            selectedItemIndex5 = selectNewOne(selectedItemIndex5);
            selectedCharacter5.push(selectedItemIndex5);

            selectedItemIndex6 = selectNewOne(selectedItemIndex6);
            selectedCharacter6.push(selectedItemIndex6);

            selectedItemIndex7 = selectNewOne(selectedItemIndex7);
            selectedCharacter7.push(selectedItemIndex7);

            selectedItemIndex8 = selectNewOne(selectedItemIndex8);
            selectedCharacter8.push(selectedItemIndex8);

            selectedItemIndex9 = selectNewOne(selectedItemIndex9);
            selectedCharacter9.push(selectedItemIndex9);

            selectedItemIndex10 = selectNewOne(selectedItemIndex10);
            selectedCharacter10.push(selectedItemIndex10);

            selectedItemIndex11 = selectNewOne(selectedItemIndex11);
            selectedCharacter11.push(selectedItemIndex11);

//            var randomNumber2 = Math.floor(Math.random() *(25-1) + 1);
//            result = characters.charAt(randomNumber2);
//            r2 = r2 + result + " ";
//
//            var randomNumber3 = Math.floor(Math.random() *(25-1) + 1);
//            result = characters.charAt(randomNumber3);
//            r3 = r3 + result + " ";
//
//            var randomNumber4 = Math.floor(Math.random() *(25-1) + 1);
//            result = characters.charAt(randomNumber4);
//            r4 = r4 + result + " ";
//
//            var randomNumber5 = Math.floor(Math.random() *(25-1) + 1);
//            result = characters.charAt(randomNumber5);
//            r5 = r5 + result + " ";
//
//            var randomNumber6 = Math.floor(Math.random() *(25-1) + 1);
//            result = characters.charAt(randomNumber6);
//            r6 = r6 + result + " ";
//
//            var randomNumber7 = Math.floor(Math.random() *(25-1) + 1);
//            result = characters.charAt(randomNumber7);
//            r7 = r7 + result + " ";
        }
        document.getElementById('demo1').innerHTML = selectedCharacter.join(" ");
        document.getElementById('demo2').innerHTML = selectedCharacter2.join(" ");
        document.getElementById('demo3').innerHTML = selectedCharacter3.join(" ");
        document.getElementById('demo4').innerHTML = selectedCharacter4.join(" ");
        document.getElementById('demo5').innerHTML = selectedCharacter5.join(" ");
        document.getElementById('demo6').innerHTML = selectedCharacter6.join(" ");
        document.getElementById('demo7').innerHTML = selectedCharacter7.join(" ");
        document.getElementById('demo8').innerHTML = selectedCharacter8.join(" ");
        document.getElementById('demo9').innerHTML = selectedCharacter9.join(" ");
        document.getElementById('demo10').innerHTML = selectedCharacter10.join(" ");
        document.getElementById('demo11').innerHTML = selectedCharacte11.join(" ");
        document.getElementById('passText').value = selectedCharacter.join(" ") + " " + selectedCharacter2.join(" ") + " " + selectedCharacter3.join(" ") + " " + selectedCharacter4.join(" ") + " " + selectedCharacter5.join(" ") + " " + selectedCharacter6.join(" ") + " " + selectedCharacter7.join(" ") + " " + selectedCharacter8.join(" ") + " " + selectedCharacter9.join(" ") + " " + selectedCharacter10.join(" ") + " " + selectedCharacter11.join(" ");
        return  selectedCharacter + selectedCharacter2 + selectedCharacter3 + selectedCharacter4 + selectedCharacter5 + selectedCharacter6 + selectedCharacter7 + selectedCharacter8 + selectedCharacter9 + selectedCharacter10 + selectedCharacter11;
    }

    let selectedNumberIndex;
    let selectedNumberIndex2;
    let selectedNumberIndex3;
    let selectedNumberIndex4;
    let selectedNumberIndex5;
    let selectedNumberIndex6;
    let selectedNumberIndex7;
    let selectedNumberIndex8;
    let selectedNumberIndex9;
    let selectedNumberIndex10;
    let selectedNumberIndex11;
    var numbers = ["2","3","5","8","9"];
        function selectNewOne2(compare){

        const randomItemIndex = Math.floor(Math.random() * numbers.length);
          if (numbers[randomItemIndex] === compare) {
            return selectNewOne2();
          }

          return numbers[randomItemIndex];
        }

    function randomNumber(buttonTag) {
        var result = '';
        var numbers = ["2","3","5","8","9"];
//        var rn1 = ''
//        var rn2 = ''
//        var rn3 = ''
//        var rn4 = ''
//        var rn5 = ''
//        var rn6 = ''
//        var rn7 = ''
        var charactersLength = characters.length;
        var selectedCharacter = [];
        var selectedCharacter2 = [];
        var selectedCharacter3 = [];
        var selectedCharacter4 = [];
        var selectedCharacter5 = [];
        var selectedCharacter6 = [];
        var selectedCharacter7 = [];
        var selectedCharacter8 = [];
        var selectedCharacter9 = [];
        var selectedCharacter10 = [];
        var selectedCharacter11 = [];
        for ( var i = 0; i < 5; i++ ) {

                    selectedNumberIndex = selectNewOne2(selectedNumberIndex);
                    selectedCharacter.push(selectedNumberIndex);

                    selectedNumberIndex2 = selectNewOne2(selectedNumberIndex2);
                    selectedCharacter2.push(selectedNumberIndex2);

                    selectedNumberIndex3 = selectNewOne2(selectedNumberIndex3);
                    selectedCharacter3.push(selectedNumberIndex3);

                    selectedNumberIndex4 = selectNewOne2(selectedNumberIndex4);
                    selectedCharacter4.push(selectedNumberIndex4);

                    selectedNumberIndex5 = selectNewOne2(selectedNumberIndex5);
                    selectedCharacter5.push(selectedNumberIndex5);

                    selectedNumberIndex6 = selectNewOne2(selectedNumberIndex6);
                    selectedCharacter6.push(selectedNumberIndex6);

                    selectedNumberIndex7 = selectNewOne2(selectedNumberIndex7);
                    selectedCharacter7.push(selectedNumberIndex7);

                    selectedNumberIndex8 = selectNewOne2(selectedNumberIndex8);
                    selectedCharacter8.push(selectedNumberIndex8);

                    selectedNumberIndex9 = selectNewOne2(selectedNumberIndex9);
                    selectedCharacter9.push(selectedNumberIndex9);

                    selectedNumberIndex10 = selectNewOne2(selectedNumberIndex10);
                    selectedCharacter10.push(selectedNumberIndex10);

                    selectedNumberIndex11 = selectNewOne2(selectedNumberIndex11);
                    selectedCharacter11.push(selectedNumberIndex11);

//            var randomNumber = Math.floor(Math.random() * 5);
//            result = characters.charAt(randomNumber);
//            rn1 = rn1 + result + " ";
//
//            var randomNumber2 = Math.floor(Math.random() * 5);
//            result = characters.charAt(randomNumber2);
//            rn2 = rn2 + result + " ";
//
//            var randomNumber3 = Math.floor(Math.random() * 5);
//            result = characters.charAt(randomNumber3);
//            rn3 = rn3 + result + " ";
//
//            var randomNumber4 = Math.floor(Math.random() * 5);
//            result = characters.charAt(randomNumber4);
//            rn4 = rn4 + result + " ";
//
//            var randomNumber5 = Math.floor(Math.random() * 5);
//            result = characters.charAt(randomNumber5);
//            rn5 = rn5 + result + " ";
//
//            var randomNumber5 = Math.floor(Math.random() * 5);
//            result = characters.charAt(randomNumber5);
//            rn6 = rn6 + result + " ";
//
//            var randomNumber5 = Math.floor(Math.random() * 5);
//            result = characters.charAt(randomNumber5);
//            rn7 = rn7 + result + " ";
        }
        document.getElementById('demo1').innerHTML = selectedCharacter.join(" ");
        document.getElementById('demo2').innerHTML = selectedCharacter2.join(" ");
        document.getElementById('demo3').innerHTML = selectedCharacter3.join(" ");
        document.getElementById('demo4').innerHTML = selectedCharacter4.join(" ");
        document.getElementById('demo5').innerHTML = selectedCharacter5.join(" ");
        document.getElementById('demo6').innerHTML = selectedCharacter6.join(" ");
        document.getElementById('demo7').innerHTML = selectedCharacter7.join(" ");
        document.getElementById('demo8').innerHTML = selectedCharacter8.join(" ");
        document.getElementById('demo9').innerHTML = selectedCharacter9.join(" ");
        document.getElementById('demo10').innerHTML = selectedCharacter10.join(" ");
        document.getElementById('demo11').innerHTML = selectedCharacter11.join(" ");
        document.getElementById('passText').value = selectedCharacter.join(" ") + " " + selectedCharacter2.join(" ") + " " + selectedCharacter3.join(" ") + " " + selectedCharacter4.join(" ") + " " + selectedCharacter5.join(" ") + " " + selectedCharacter6.join(" ") + " " + selectedCharacter7.join(" ") + " " + selectedCharacter8.join(" ") + " " + selectedCharacter9.join(" ") + " " + selectedCharacter10.join(" ") + " " + selectedCharacter11.join(" ");
                return  selectedCharacter + selectedCharacter2 + selectedCharacter3 + selectedCharacter4 + selectedCharacter5 + selectedCharacter6 + selectedCharacter7 + selectedCharacter8 + selectedCharacter9 + selectedCharacter10 + selectedCharacter11;
    }

    function change1(buttonTag){
        var x = document.getElementById("all");
//        var y = document.getElementById("random-button");
        var z = document.getElementById("import-button");
            x.style.display = "block";
//            y.style.display = "none";
            z.style.display = "none";
    }
//    function change2(buttonTag){
//         var x = document.getElementById("all");
//         var y = document.getElementById("random-button");
//         var z = document.getElementById("import-button");
//            y.style.display = "block";
//            x.style.display = "none";
//            z.style.display = "none";
//    }
    function change3(buttonTag){
         var x = document.getElementById("all");
//         var y = document.getElementById("random-button");
         var z = document.getElementById("import-button");
            z.style.display = "block";
            x.style.display = "none";
//            y.style.display = "none";
    }


    function check(input)
            {
            	var checkboxes = document.getElementsByClassName("radio");
                console.log(input.id);
            	for(var i = 0; i < checkboxes.length; i++)
            	{
            		//uncheck all
            		checkboxes[i].checked = false;
            	}
                input.checked = true;
            	if(checkboxes[0].checked == true)
                            		{
                            			random();
                            		}
                            		if(checkboxes[1].checked == true)
                            		{
                                        randomNumber();
                            		}

            	//set checked of clicked object
//            	if(input.checked == true)
//            	{
//            		input.checked = false;
//            	}
//            	else
//            	{
//            		input.checked = true;
//            	}
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

//$(document).ready(function () {
//    $('#textarea1').keyup(function(e) {
//        let value = $(this).val().toUpperCase();
//        let text = $('#demo'+numTemp).text();
////        var text = "";
////        var text2 = "";
////        var text3 = "";
////        var text4 = "";
////        var text5 = "";
////        var text6 = "";
////        var text7 = "";
//
//        if(text.match(/[A-Z]/g)){
//            for (var i = 0; i < value.length; i++) {
//                        if(i < 5){
//                            text = text + value[i] + "\n";
//                        }else if(i < 10){
//                            text2 = text2 + value[i] + "\n";
//                        }else if(i < 15){
//                            text3 = text3 + value[i] + "\n";
//                        }else if(i < 20){
//                            text4 = text4 + value[i] + "\n";
//                        }else if(i < 25){
//                            text5 = text5 + value[i] + "\n";
//                        }else if(i < 30){
//                            text6 = text6 + value[i] + "\n";
//                        }else if(i < 35){
//                            text7 = text7 + value[i] + "\n";
//                        }
//                    }
//        }
//
//
//        document.getElementById('demo1').innerHTML = text;
//        document.getElementById('demo2').innerHTML = text2;
//        document.getElementById('demo3').innerHTML = text3;
//        document.getElementById('demo4').innerHTML = text4;
//        document.getElementById('demo5').innerHTML = text5;
//        document.getElementById('demo6').innerHTML = text6;
//        document.getElementById('demo7').innerHTML = text7;
//        document.getElementById('passText').value = text+text2+text3+text4+text5+text6+text7;
//    });
//});

function showTextArea(textareaTag) {
        var value = document.getElementById("textarea1").value;
        var text = "";
        var text2 = "";
        var text3 = "";
        var text4 = "";
        var text5 = "";
        var text6 = "";
        var text7 = "";
        var text8 = "";
        var text9 = "";
        var text10 = "";
        var text11 = "";
//        var text8 = "";
//        var text9 = "";
//        var text10 = "";
        var regex = /^[a-zA-Z]+$/;
        var regex2 = /^[0-9]+$/;

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
                }else if(i < 40){
                      text8 = text8 + value[i] + "\n";
                }else if(i < 45){
                      text9 = text9 + value[i] + "\n";
                }else if(i < 50){
                      text10 = text10 + value[i] + "\n";
                }else if(i < 55){
                      text11 = text11 + value[i] + "\n";
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
        document.getElementById('demo8').innerHTML = text7;
        document.getElementById('demo9').innerHTML = text7;
        document.getElementById('demo10').innerHTML = text7;
        document.getElementById('demo11').innerHTML = text7;
        document.getElementById('passText').value = text+text2+text3+text4+text5+text6+text7+text8+text9+text10+text11;
//        document.getElementById('demo8').innerHTML = text8;
//        document.getElementById('demo9').innerHTML = text9;
//        document.getElementById('demo10').innerHTML = text10;
}
function changeText() {
    alert("hi")
    var d1 = document.getElementById('demo1').innerHTML;
    var d2 = document.getElementById('demo2').innerHTML;
    var d3 = document.getElementById('demo3').innerHTML;
    var d4 = document.getElementById('demo4').innerHTML;
    var d5 = document.getElementById('demo5').innerHTML;
    var d6 = document.getElementById('demo6').innerHTML;
    var d7 = document.getElementById('demo7').innerHTML;
    var d8 = document.getElementById('demo8').innerHTML;
    var d9 = document.getElementById('demo9').innerHTML;
    var d10 = document.getElementById('demo10').innerHTML;
    var d11 = document.getElementById('demo11').innerHTML;
    alert(d1)
    alert(d2)
}

function download_txt() {
    var demo1 = document.getElementById('demo1').innerHTML;
    var demo2 = document.getElementById('demo2').innerHTML;
    var demo3 = document.getElementById('demo3').innerHTML;
    var demo4 = document.getElementById('demo4').innerHTML;
    var demo5 = document.getElementById('demo5').innerHTML;
    var demo6 = document.getElementById('demo6').innerHTML;
    var demo7 = document.getElementById('demo7').innerHTML;
    var demo7 = document.getElementById('demo8').innerHTML;
    var demo7 = document.getElementById('demo9').innerHTML;
    var demo7 = document.getElementById('demo10').innerHTML;
    var demo7 = document.getElementById('demo11').innerHTML;
    var optotype = document.getElementById('optotype').value;
    var distance = document.getElementById('distance').value;
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(demo1) +encodeURI("\n"+demo2) +encodeURI("\n"+demo3)
        +encodeURI("\n"+demo4) +encodeURI("\n"+demo5) +encodeURI("\n"+demo6) +encodeURI("\n"+demo7) +encodeURI("\n"+demo8) +encodeURI("\n"+demo9) +encodeURI("\n"+demo10) +encodeURI("\n"+demo11) +encodeURI("\nFont : "+optotype) +encodeURI("\nDistance : "+distance);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'myFile.txt';
    hiddenElement.click();
}
function sentText(){
    var tempId = 123;
    alert(tempId)
    console.log(tempId)
    $.ajax({
        type : "POST",
        url : "http://localhost:8081/apisent",
        data : {id:tempId},
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
function getFilter() {
    var text = "hi"
    alert("hrllp")
    return {
        "type" : "GET",
        "url" : "results",
        "async" : true,
        "data" : {
            "text" : text,
            success : function() {
                alert("success ");
            },
            error : function() {
                alert("error");
            }
        }
    };
}
function tester() {
    alert("55")
    $.ajax({
        type: "POST",
        url: "http://localhost:8081/submit.htm",
        data: { name: "John", location: "Boston" } // parameters
    })
}
