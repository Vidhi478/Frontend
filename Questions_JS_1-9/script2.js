//ans1---->
/*var btn =document.querySelector("button");
var p=document.querySelector("p");
btn.addEventListener("click",function(){
    p.textContent="okay good";
})*/



//ans2---->
/*var imag1=document.querySelector("#one");
var imag2=document.querySelector("#two");
var btn=document.querySelector("button");
var src1=imag1.src;
var src2=imag2.src;
btn.addEventListener("click",function(){
      imag1.src=src2;
      imag2.src=src1; 
})*/



//ans3---->
 /*var form=document.querySelector("form");
 var inps=document.querySelectorAll('input[type="text"]');
 var h4=document.querySelector("h4");
  form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(var i=0;i<inps.length;i++){
        if(inps[i].value.trim()===''){
            h4.textContent="something went wrong ";
            h4.style.color="red";
            break;
        }
        else{
            h4.textContent="";
        }
    }
  })*/



//ans4---->
/*var ul=document.querySelector("ul");
var input=document.querySelector("input");
var add=document.querySelector("#add");
var remove=document.querySelector("#remove");
var li;
   
add.addEventListener("click",function(){
       if(input.value.trim()===''){}
       else{
        li=document.createElement("li");
        li.textContent=input.value;
        ul.appendChild(li);
        input.value="";
       }
})
remove.addEventListener("click",function(){
    ul.removeChild(li);
})*/



//ans5---->
 /*var h3=document.querySelector("h3");
 var start=document.querySelector("#start");
 var stop=document.querySelector("#stop");
 var int;
 start.addEventListener("click",function(){
    var count=0;
    int =setInterval(function(){
        h3.textContent=count;
        count++;
    },1000);
 })
 stop.addEventListener("click",function(){
    clearInterval(int);
 })*/



    //ans6---->
   /* var texts=document.querySelectorAll("h3");
    var tabbed=document.querySelectorAll(".tab");
    texts[0].style.display="block";
    texts[0].style.width="50%";
     
    tabbed.forEach(function(tabbed,index){
        tabbed.addEventListener("click",function(){
            hidealltext();
            texts[index].style.display="block";
            texts[index].style.width="50%";
        });
    });
    function hidealltext(){
        texts.forEach(function(text){
            text.style.display="none";
        });
    }*/



//ans7---->
/*var progress=document.querySelector("#progress");
var h4=document.querySelector("h4");
 var count=0;
     var a=setInterval(function(){
        if(count===100){
            h4.style.opacity=1;
            clearInterval(a);
        }
        count++;
        progress.style.width=count+'%';
     },50);*/




//ans8---->
/*var input=document.querySelector("input");
var data =[
    {name:"harshita",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
    {name:"harshiya",src:"https://images.unsplash.com/photo-1653999022416-c210fcc75438?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"alisha",src:"https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFOfGVufDB8fDB8fHww"},
    {name:"aliya",src:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFOfGVufDB8fDB8fHww"}
]
var pers="";
data.forEach(function(elem){
    pers+=`<div class="person">
               <div class="img">
                <img src="${elem.src}">
               </div>
                <h4>${elem.name}</h4> 
                </div>`;
})
document.querySelector(".people").innerHTML=pers;
input.addEventListener("input",function(){
    var matching=data.filter(function(e){
        return e.name.startsWith(input.value);
        })
        var match="";
        matching.forEach(function(elem){
    match+=`<div class="person">
               <div class="img">
                <img src="${elem.src}">
               </div>
                <h4>${elem.name}</h4>
                </div>`;
})
document.querySelector(".people").innerHTML=match;
});
*/



//ans9---->
/*var text=document.querySelector("textarea");
var counter=document.querySelector("#counter");
text.addEventListener("input",function(){
    counter.textContent=text.value.length;
})*/