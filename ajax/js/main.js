var l=["Name","ISBN" ,"Author","Weight (kgs.)","Publisher","Publication Date","Book Size (cm.)","Language","Number of Pages","Price"]



    
       
$(document).ready(function(){
   
    // $('img').click(function(){
    //     var a=Number($(this).attr("alt"));
    //     $('#Mymodal').modal('show')
        $.ajax({
                    url: "https://fake.munisisazade.com/v1/5cd1a295fd1d61e440b4cb04",
                    method: "GET",
                    contentType: "application/json",
                    
                    success: function(data){
                       for(var i =0; i<$(".card-title").length;i++){
                        document.getElementsByClassName("card-title")[i].innerText=data[i]["Name"]
                        document.getElementsByClassName("card-text")[i].innerHTML=("<p>"+ data[i]["Publisher"] +"<br/>"+ data[i]["Price"] +"<p/>")
                       }
                        
                        
                        // for(p in data[a]){
                        //     //console.log(a);
                        //     l.push(p);
                        //     //console.log(l[i].split('"'))
                            
                        // }
                       //console.log(typeof a);
                       $('img').click(function(){
                           var a=Number($(this).attr("alt"));
                           $('#Mymodal').modal('show')
                       var x=[]
                       if($(".tbodyy").length==0){
                        for(var i=0;i<l.length;i++){
                            console.log(a)
                            x.push(i)
                            $(".tbodyy").append($("<tr ><td> "+ l[i] +"</td><td>"+data[a][l[i]]+"</td></tr>"))
                        }

                       }
                       else{
                        $(".tbodyy").html("");
                        for(var i=0;i<l.length;i++){
                            
                            x.push(i)
                            $(".tbodyy").append($("<tr ><td> "+ l[i] +"</td><td>"+data[a][l[i]]+"</td></tr>"))
                            
                        }
                       }
                        
                        
                        
                        
                       
                        
                    });
                    },
                    error: function(xhr, err, msg){
                        console.log(xhr, err, msg);
                    }
             
            
                
            
               });
       
    //});
  });
