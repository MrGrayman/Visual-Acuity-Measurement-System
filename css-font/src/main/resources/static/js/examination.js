function examination(){
        var x = document.getElementById("selection");
        var y = document.getElementById("list");
            x.style.display = "none";
            y.style.display = "block";
            showData();
    }

    function showData() {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var r = ''

            var charactersLength = characters.length;
            for ( var i = 0; i < 5; i++ ) {

                var randomNumber = Math.floor(Math.random() *(27-1) + 1);
                result = characters.charAt(randomNumber);
                r = r + result + " ";
            }
            document.getElementById('demo').innerHTML = r;
            return r;
        }

//        document.getElementById('inputfile')
//                .addEventListener('change', function() {
//                    var x = document.getElementById("test1");
//                    var y = document.getElementById("test2");
//                    var result = "";
//                    var fr=new FileReader();
//                    fr.onload=function(){
//                        var jsontext = textContent=fr.result;
//                        var obj = JSON.parse(jsontext);
//                        var example = obj.text;
//                        var distance = obj.distance;
//                        var font = obj.optotype;
//                        var value = example;
//                        var text = "";
//                        var text2 = "";
//                        var text3 = "";
//                        var text4 = "";
//                        var text5 = "";
//                        var text6 = "";
//                        var text7 = "";
//        //        var text8 = "";
//        //        var text9 = "";
//        //        var text10 = "";
//                        for (var i = 0; i < value.length; i++) {
//                            if(i < 5){
//                                text = text + value[i] + "\n";
//                            }else if(i < 10){
//                                text2 = text2 + value[i] + "\n";
//                            }else if(i < 15){
//                                text3 = text3 + value[i] + "\n";
//                            }else if(i < 20){
//                                text4 = text4 + value[i] + "\n";
//                            }else if(i < 25){
//                                text5 = text5 + value[i] + "\n";
//                            }else if(i < 30){
//                                text6 = text6 + value[i] + "\n";
//                            }else if(i < 35){
//                                text7 = text7 + value[i] + "\n";
//                            }
//        //            else if(i < 40){
//        //                text8 = text8 + value[i] + "\n";
//        //            }else if(i < 45){
//        //                text9 = text9 + value[i] + "\n";
//        //            }else if(i < 50){
//        //                text10 = text10 + value[i] + "\n";
//        //            }
//                        }
//
//                        document.getElementById('demo1').innerHTML = text;
//                        document.getElementById('demo2').innerHTML = text2;
//                        document.getElementById('demo3').innerHTML = text3;
//                        document.getElementById('demo4').innerHTML = text4;
//                        document.getElementById('demo5').innerHTML = text5;
//                        document.getElementById('demo6').innerHTML = text6;
//                        document.getElementById('demo7').innerHTML = text7;
//                        document.getElementById("dis").value = distance;
//                        document.getElementById("font").value = font;
//
//                        x.style.display = "none";
//                        y.style.display = "block";
//                    }
//
//                    fr.readAsText(this.files[0]);
//                })