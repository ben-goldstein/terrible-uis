var i = 0;

$(document).ready(function(){
    $("#characters-display").val("");
    $("#plus").click(function(){
        i++;
        console.log(i);
    });
    $("#minus").click(function(){
        i--;
        console.log(i);
    });
    $("#clear").click(function(){
        $("#characters-display").val("");
        i = 0;
    });
    $("#output").click(function(){
        let oldVal = $("#characters-display").val();
        $("#characters-display").val(oldVal + String.fromCharCode(i));
    });
});