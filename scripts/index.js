//Object Oriented Programming - classes

var i = 1;
let j = 2;
const k =10;
let abc = 13;

//function number(){}
//body onload
$(document).ready(function (){
    let ijk = i + j + k;

    //Normal javascript
    //document.getElementById("number").innerHTML = ijk;

    //Jquery
    $("#number").html(ijk);

    //setTimout - delay
    //setInterval - repeat
    setInterval(function (){
        abc++;
        $("#number").html(abc);
    }, 1000);
});

/*
function haha(){
    var haha = 0;
    return haha;
}
*/

$("#clickmeBtn").on('click', function () {
    //e.preventDefault(); //prevent browser refresh
    //Code here
    abc++;
    console.log(abc);
    $("#number").html(abc);
});


