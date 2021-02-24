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

//        function inputAnswer(r) {
//                var value = document.getElementById("Answer").value;
//                var n = 0;
//                for(var i = 0; value ; i++){
//
//                }
//            }