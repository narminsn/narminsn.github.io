var playerattackpower;
var enemyhp;
var playerhp;
var counterattackpower=0;
var plname;
var ename;
var bool;



$(document).ready(function(e){
    
   for(var i=0; i<$(".power").length;i++){
    document.getElementsByClassName("power")[i].innerText= document.getElementsByClassName("power")[i].getAttribute("value")
   }  
   $( "button,img" ).click(function( event ) {
 
   if(event.target.nodeName==="IMG"){
    if(!bool){
               playerattackpower=Number($(this).attr("attackpower"));
                $(".yourch").show();        
                $(".enemies").show();      
                $(".img").not(this.parentNode).appendTo(".enemies");
                $(".your-character").append(this.parentNode);
                playerhp=$(this).parent().find(".power").attr("value");
                bool=true;
                plname=$(this).parent().find(".name").text();
                
            }
    else if(bool===true){
                enemyattackpower=Number($(this).attr("attackpower"));
                enemyhp=$(this).parent().find(".power").attr("value");
                ename=$(this).parent().find(".name").text();
                //console.log(enemyhp);
                $(".fight").show()
              $(this.parentNode).insertBefore(".plattack");
              $(".win").hide();              
                bool=" ";
    
            }

   }
   else if($(this).attr("class")==="attack" && playerhp>0 && enemyhp>0){          
    counterattackpower+=playerattackpower;    
    playerhp-=enemyattackpower;
    enemyhp-=counterattackpower;    
    $(".fight .plattack").show();
    $(".fight .enattack").show();
    $(".your-character .power").text(playerhp);
    $(".fight .power").text(enemyhp);
    $(".fight .plattack").text("You attacked "+ ename +" for "+ counterattackpower +" damage.");
    $(".fight .enattack").text(""+ ename +"  attacked you back for "+ enemyattackpower +" damage.");
    bool="n"
    
    
   }
   else if($(this).attr("class")==="attack" && bool==="z" ){
    $(".win").show();
    $(".win").text("No enemy here.");
    bool=true; 

   }
   
  
   if(playerhp<=0){
    $(".fight .plattack").hide();
    $(".fight .enattack").hide();
    $(".win").show();
    $(".win").text("You been defeated... GAME OVER!!!")    
    $(".restart").show();
   }
else if(enemyhp<=0 && bool==="n"){
    $(".win").show();
    $(".fight img, .fight .name, .fight .power").hide();
    $(".fight .plattack").hide();
    $(".fight .enattack").hide();
    $(".win").text("You have defated "+ ename +", you can choose to fight another enemy");
    bool="z";
    if($(".enemies .img").text().length==236 ){
        $(".win").text("You Won!!! GAME OVER!!!");
        $(".restart").show();
    }
    
    
} 
function restartt(){
    $(".img").children().children().show();
    for(var i=0; i<$(".power").length;i++){
        document.getElementsByClassName("power")[i].innerText= document.getElementsByClassName("power")[i].getAttribute("value")
    }
    $(".yourch").hide();  
    $(".fight").hide();
    $(".enemies").hide();
    bool=false;
   
    $(".img").append($(".first,.second,.third,.fourth"));
    
    $(".your-character").prepend($(".img"))
}
$(".restart").click(function(e){
    restartt();
});
//  if($(this).attr("class")==="restart" ){
//     restartt();
  
// }
});
});