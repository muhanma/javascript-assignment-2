// Do your work in this file.
var boxes = document.querySelectorAll(".box");
var n = boxes.length;
var bgcolor;
var cbox 
console.log(n);


for (var cbox = 0; cbox< n; cbox++) 

{(function(cbox) {

    boxes[cbox].onclick = function() 
 { 
    boxes[cbox].style.backgroundColor = bgcolor;

 if(boxes[cbox].className == "box"){boxes[cbox].className = "clicked";}
 else{boxes[cbox].className = "box";}

 }
    })(cbox)  
}

if (201 <= n && n <= 300){
    bgcolor = "yellow";
}
else if (301 <= n && n <= 400){
    bgcolor = "green";
}
else if (401 <= n && n <= 500){
    bgcolor = "purple";
}
else if (501 <= n && n <= 600){
    bgcolor = "orange";
}
else if (601 <= n && n <= 700){
    bgcolor = "pink";
}
else if (701 <= n && n <= 800){
    bgcolor = "black";
}
else if (801 <= n && n <= 900){
    bgcolor = "brown";
}
else {
    bgcolor = "blue";
}

