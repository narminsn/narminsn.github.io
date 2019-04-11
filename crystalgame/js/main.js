var score=0;
var win=0;
var loses=0;
var text=document.getElementById("target-score").innerText=Math.ceil( Math.random() * (120 - 19) + 19);
//var blue=Math.ceil( Math.random() * (12 - 1) + 1);


$(document).ready(function(e){
    function variables(){
        var blue=Math.ceil( Math.random() * (12 - 1) + 1);
        var red=Math.ceil( Math.random() * (12 - 1) + 1);
        var green=Math.ceil( Math.random() * (12 - 1) + 1);
        var yellow=Math.ceil( Math.random() * (12 - 1) + 1);
        $("#red").attr("alt",red);
        $("#blue").attr("alt",blue);
        $("#green").attr("alt",green);
        $("#yellow").attr("alt",yellow);
        //console.log(red);
        
    };
    function reset(){
        win=0;
        loss=0;
        score=0;
        $("#your-score").text(score);
        $("#win-count").text(win);
        $("#loss-count").text(loses);
        text=document.getElementById("target-score").innerText=Math.ceil( Math.random() * (120 - 19) + 19);
    }
    
   variables();
    $("img").click(function(e){
        score+=Number($(this).attr("alt"));
        $("#your-score").text(score);
        if(text==score){
            win++;
            $("#win-count").text(win);
            
            variables();
            $("#your-score").text(score);
            
        }
        else if(text<score){
            loses++;
            $("#loss-count").text(loses);
            score=0;
            variables();
            $("#your-score").text(score);
            text=document.getElementById("target-score").innerText=Math.ceil( Math.random() * (120 - 19) + 19);
        }
        
        

    });
});