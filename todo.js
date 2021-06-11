// var a=document.getElementById("btn");
// var b=document.getElementById("txt")
// const list = document.querySelector("#list");
// var el = document.getElementsByTagName('li');




// a.addEventListener('click',function(){
// var t=b.value;
// if(t==""){
//     alert("Enter text")
// }
// else{
//     var li=document.createElement("li")
//     li.innerHTML=t;
//     list.insertBefore(li,list.childNodes[0]);
//     // li.innerHTML="";
// }

// list.onclick = function(ev){
//     if(ev.target.tagName == 'LI'){
//          ev.target.classList.toggle('checked');
//     }
// };






// })
const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");



btn.onclick = function(){
    var k=input.value
    var txt = k.toUpperCase();
    if(txt ==''){
        alert('you must write something');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};


list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
         
    }
};

