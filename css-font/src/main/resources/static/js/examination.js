var numTemp = 1;
var arr_result = [];
function examination(){
        var x = document.getElementById("selection");
        var y = document.getElementById("list");
            x.style.display = "none";
            y.style.display = "block";
        ReadData();
    }
    function loadData(){
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
    for (var i = 1; i <= 7; i++) {
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
    if(numTemp < 7){
        numTemp = numTemp +1;
    }
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    var demo3 = document.getElementById("demo3");
    var demo4 = document.getElementById("demo4");
    var demo5 = document.getElementById("demo5");
    var demo6 = document.getElementById("demo6");
    var demo7 = document.getElementById("demo7");
    if (numTemp == 1){
        demo1.style.display = "block";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 2){
        demo1.style.display = "none";
        demo2.style.display = "block";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 3){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "block";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 4){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "block";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 5){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "block";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 6){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "block";
        demo7.style.display = "none";
    }
    else if (numTemp == 7){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "block";
    }

}
function backline(){
    if(numTemp > 1){
        numTemp = numTemp -1;
    }
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    var demo3 = document.getElementById("demo3");
    var demo4 = document.getElementById("demo4");
    var demo5 = document.getElementById("demo5");
    var demo6 = document.getElementById("demo6");
    var demo7 = document.getElementById("demo7");
    if (numTemp == 1){
        demo1.style.display = "block";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 2){
        demo1.style.display = "none";
        demo2.style.display = "block";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 3){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "block";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 4){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "block";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 5){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "block";
        demo6.style.display = "none";
        demo7.style.display = "none";
    }
    else if (numTemp == 6){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "block";
        demo7.style.display = "none";
    }
    else if (numTemp == 7){
        demo1.style.display = "none";
        demo2.style.display = "none";
        demo3.style.display = "none";
        demo4.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo7.style.display = "block";
    }

}


$(document).ready(function () {
    $('#Answer').keyup(function(e) {
        let input = $(this).val().toUpperCase();
        let text = $('#demo'+numTemp).text();
        var s_wrong;
        text = text.match(/[A-Z]/g);

        let size_text = text.length;
        let size_input = input.length;
        if(size_input == size_text){
            let result = calculate(text, input);
            console.log(result);
            console.log(arr_result);

            if(result.percent < 50){
                if (numTemp == 7){
                    s_wrong = result.s_wrong;
                    sendAjax(s_wrong)
                }else{
                    $('#Answer').val('');
                    $('#big-button1').click();
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