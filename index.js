
let title = document.getElementById("title").innerHTML = movies ["Titanic"]["title"];
 
let director = document.getElementById("director").innerHTML = movies ["Titanic"]["director"];
  
let genre = document.getElementById("genre").innerHTML = movies ["Titanic"]["genre"];

let filmRating = document.getElementById("filmRating").innerHTML = movies ["Titanic"]["filmRating"];

let description = document.getElementById("description").innerHTML = movies ["Titanic"]["description"];

let audieceScore = document.getElementById("audienceScore").innerHTML = movies ["Titanic"]["audienceScore"];


let i
for (i = 0 ; i < movies["Titanic"]["cast"].length; i++){
   document.getElementById("cast").innerHTML += movies ["Titanic"]["cast"][i]["role"] + " <br>"; 
   
   
      document.getElementById("cast").innerHTML += movies ["Titanic"]["cast"][i]["actor"] + " <br>"; 
   
  }


for (i = 0 ; i < movies["Titanic"]["reviews"].length; i++){
   document.getElementById("reviews").innerHTML += movies ["Titanic"]["reviews"][i]["username"] + "<br> ";
   document.getElementById("reviews").innerHTML += movies ["Titanic"]["reviews"][i]["content"] + "<br> ";
   
  }
  
  
  
  
  document.getElementById("Terminator 2").addEventListener("click", function(){
    
    
    let title = document.getElementById("title").innerHTML = movies ["Terminator 2"]["title"];
 
let director = document.getElementById("director").innerHTML = movies ["Terminator 2"]["director"];
  
let genre = document.getElementById("genre").innerHTML = movies ["Terminator 2"]["genre"];

let filmRating = document.getElementById("filmRating").innerHTML = movies ["Terminator 2"]["filmRating"];

let description = document.getElementById("description").innerHTML = movies ["Terminator 2"]["description"];

let audieceScore = document.getElementById("audienceScore").innerHTML = movies ["Terminator 2"]["audienceScore"];


document.getElementById("cast").innerHTML = "";
document.getElementById("reviews").innerHTML = "";


let i
for (i = 0 ; i < movies["Terminator 2"]["cast"].length; i++){
   document.getElementById("cast").innerHTML += movies ["Terminator 2"]["cast"][i]["role"] + " <br>"; 
   
   
      document.getElementById("cast").innerHTML += movies ["Terminator 2"]["cast"][i]["actor"] + " <br>"; 
   
  }


for (i = 0 ; i < movies["Terminator 2"]["reviews"].length; i++){
   document.getElementById("reviews").innerHTML += movies ["Terminator 2"]["reviews"][i]["username"] + "<br> ";
   document.getElementById("reviews").innerHTML += movies ["Terminator 2"]["reviews"][i]["content"] + "<br> ";
   
  }
    
    
    
    
});
  
  





