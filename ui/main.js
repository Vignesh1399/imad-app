//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    
    //Create a request
    var request=new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
    var list='';
  for(var i=0;i<names.length;i++){
      list+='<li>'+names[i]+'</li>';
  }  
  var ul=document.getElementById('namelist');
  ul.innerHTML=list; 
            }
        }
    };
    
   //Make the request
    var name=nameInput.value;
var submit=document.getElementById('submit_btn');
   request.open('GET','http://vigneshrc1999.imad.hasura-app.io/counter',true);
   request.send(null);
};
//Submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //Make a request to the server and send the name
    var request=new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
    var list='';
  for(var i=0;i<names.length;i++){
      list+='<li>'+names[i]+'</li>';
  }  
  var ul=document.getElementById('namelist');
  ul.innerHTML=list; 
            }
        }
    };
    
   //Make the request
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
var submit=document.getElementById('submit_btn');
   request.open('GET','http://vigneshrc1999.imad.hasura-app.io/submit-name?name='+name,true);
   request.send(null);
    
    //Capture a list of names and render it as a list

   
    
    
};
    
    
    
    
    
    
    
    
