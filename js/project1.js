var showAli=document.getElementById("showAli");
var phone=document.getElementById("phone");
var clothes_btn=document.getElementById("clothes_btn");
var shoe=document.getElementById("shoes");

//clothes Products
var clothe1=document.getElementById("clothe1")
var clothe2=document.getElementById("clothe2")
var clothe3=document.getElementById("clothe3")
var clothe4=document.getElementById("clothe4")

//phones Products
var phone1=document.getElementById("phone1")
var phone2=document.getElementById("phone2")
var phone3=document.getElementById("phone3")
var phone4=document.getElementById("phone4")

//shoes products
var shoe1=document.getElementById("shoe1");
var shoe2=document.getElementById("shoe2");
var shoe3=document.getElementById("shoe3");
var shoe4=document.getElementById("shoe4");

//icons
var closeIcon=document.getElementById("close");
var prevIcon=document.getElementById("prev");
var nextIcon=document.getElementById("next");

var cover=document.querySelector(".cover")
var lightBoxItem=document.getElementById("light-boxItem")
var imgFour=Array.from(document.getElementsByClassName("img-four"));
var imgFour1=Array.from(document.getElementsByClassName("img-four1"));
var imgFour2=Array.from(document.getElementsByClassName("img-four2"));
var imgs=Array.from(document.getElementsByClassName("img-fluid"));
var index;
var Interval1 = '';
var Interval2 = '';
var Interval3 = '';
var Interval4 = '';

getShowAli()

//slider hide function 
function getCloseSlider(){
    cover.style.display="none"
    clearInterval(Interval1)
    clearInterval(Interval2)
    clearInterval(Interval3)
    clearInterval(Interval4)
}
closeIcon.addEventListener("click",getCloseSlider)

//slider show functions 
for(var i=0 ;i<imgs.length;i++){ 
    imgs[i].addEventListener("click",function(e){
 if(showAli.innerHTML=="showAli"){ 
    console.log("mo");
    
       cover.style.display="flex";
       var imgSrc=(e.target.src);
       lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
       index=imgs.indexOf(e.target);
       Interval1 = setInterval(getNextSlider1 , 3000);
} 
    })
}
for(var i=0;i<imgFour.length;i++){
    imgFour[i].addEventListener("click",function(e){
     if(phone.innerHTML=="Phone"){
         cover.style.display="flex";
         var imgScr= e.target.src;
         lightBoxItem.style.backgroundImage=`url(${imgScr})`
         index=imgFour.indexOf(e.target)
         Interval2 = setInterval(getNextSlider2 , 3000)
      }
}
    )
}
for(var i=0;i<imgFour1.length;i++){
    imgFour1[i].addEventListener("click",function(e){
    if(shoe.innerHTML=="Shoes"){
         cover.style.display="flex";
         var imgScr= e.target.src;
         lightBoxItem.style.backgroundImage=`url(${imgScr})`
         index=imgFour1.indexOf(e.target)
         Interval4 = setInterval(getNextSlider4 , 3000)
    }
}
 )
}
for(var i=0;i<imgFour2.length;i++){
    imgFour2[i].addEventListener("click",function(e){
     if(clothes_btn.innerHTML=="Clothes"){
         cover.style.display="flex";
         var imgScr= e.target.src;
         lightBoxItem.style.backgroundImage=`url(${imgScr})`
         index=imgFour.indexOf(e.target)
         Interval3 = setInterval(getNextSlider3 , 3000)
      }
}
    )
} 

// arrow next functions
function getNextSlider1(){{
    index++;
   if(index==imgs.length){
        index=0;
    }
    var imgScr=imgs[index].src;
    lightBoxItem.style.backgroundImage=`url(${imgScr})`   
}} 
function getNextSlider2(){{
    index++;
   if(index==imgFour.length){
        index=0;
    }
    var imgScr=imgFour[index].src;
    lightBoxItem.style.backgroundImage=`url(${imgScr})`   
}} 
function getNextSlider3(){{
    index++;
   if(index==imgFour2.length){
        index=0;
    }
    var imgScr=imgFour2[index].src;
    lightBoxItem.style.backgroundImage=`url(${imgScr})`   
}}
function getNextSlider4(){{
    index++;
    if(index==imgFour1.length){
        index=0;
    }
    var imgScr=imgFour1[index].src;    
    lightBoxItem.style.backgroundImage=`url(${imgScr})`   
}} 
nextIcon.onclick=function(){
if(showAli.innerHTML=='showAli'){
   getNextSlider1();
}
if(shoe.innerHTML=="Shoes"){
   getNextSlider4();
}
else if(clothes_btn.innerHTML=='Clothes'){  
   getNextSlider3()
}
else if(phone.innerHTML=="Phone"){
   getNextSlider2();
}
}

// arrow prev functions 
function getPrevSlider1(){
    index--;
   if(index<0){
        index=imgs.length-1;
    }
    var imgScr=imgs[index].src;
    lightBoxItem.style.backgroundImage=`url(${imgScr})`   
} 
function getPrevSlider2(){
    index--;
   if(index<0){
        index=imgFour.length-1;
    }
    var imgScr=imgFour[index].src;
    lightBoxItem.style.backgroundImage=`url(${imgScr})`   
} 
function getPrevSlider3(){{
    index--;
if(index<0){
    index=imgFour2.length-1;
}
    
 var imgScr=imgFour2[index].src;
 lightBoxItem.style.backgroundImage=`url(${imgScr})`
   
}} 
function getPrevSlider4(){
 index--;
    if(index<0){
        index=imgFour1.length-1;
    }
 var imgScr=imgFour1[index].src;
  lightBoxItem.style.backgroundImage=`url(${imgScr})`   
} 
prevIcon.onclick=function() {
if(showAli.innerHTML=='showAli'){
    getPrevSlider1();
}
if(shoe.innerHTML=="Shoes"){
    getPrevSlider4();
}
else if(clothes_btn.innerHTML=='Clothes'){
    getPrevSlider3();
}
else if(phone.innerHTML=="Phone"){
    getPrevSlider2();
}
}

// filter products functions 
function getShowAli(){
    shoe1.style.display="";
    shoe2.style.display="";
    shoe3.style.display="";
    shoe4.style.display="";
  
    phone1.style.display="";  
    phone2.style.display="";  
    phone3.style.display="";  
    phone4.style.display="";  

    clothe4.style.display="";
    clothe1.style.display="";
    clothe2.style.display="";
    clothe3.style.display="";
   
    showAli.style.backgroundColor=" rgb(22, 64, 250)";
    phone.style.backgroundColor=" #fff";
    clothes_btn.style.backgroundColor=" #fff";
    shoe.style.backgroundColor=" #fff";

    shoe.style.color='#000';
    phone.style.color='#000';
    clothes_btn.style.color='#000';
    showAli.style.color='#fff';
    document.getElementById("showAli").innerHTML="showAli";
    document.getElementById("shoes").innerHTML="shoes"
    document.getElementById('clothes_btn').innerHTML='clothes';
    document.getElementById("phone").innerHTML="phone";
}
showAli.addEventListener("click",getShowAli)
function getPhone(){
    clothe4.style.display="none";
    clothe1.style.display="none";
    clothe2.style.display="none";
    clothe3.style.display="none";

    phone1.style.display="";  
    phone2.style.display="";  
    phone3.style.display="";  
    phone4.style.display="";  

    shoe1.style.display="none";
    shoe2.style.display="none";
    shoe3.style.display="none";
    shoe4.style.display="none";

    phone.style.backgroundColor=" rgb(22, 64, 250)";
    shoe.style.backgroundColor=" #fff";
    clothes_btn.style.backgroundColor=" #fff";
    showAli.style.backgroundColor=" #fff";

    showAli.style.color='#000';
    shoe.style.color='#000';
    clothes_btn.style.color='#000';
    phone.style.color='#fff';
  
    document.getElementById("shoes").innerHTML="shoes";
    document.getElementById("showAli").innerHTML="show ali";
    document.getElementById("phone").innerHTML="Phone";
    document.getElementById('clothes_btn').innerHTML='clothes';
}
phone.addEventListener("click", getPhone)
function getClothes(){
    clothe4.style.display="";
    clothe1.style.display="";
    clothe2.style.display="";
    clothe3.style.display="";

    phone1.style.display="none";
    phone2.style.display="none";
    phone3.style.display="none";
    phone4.style.display="none";
 
    shoe1.style.display="none";
    shoe2.style.display="none";
    shoe3.style.display="none";
    shoe4.style.display="none";

    clothes_btn.style.backgroundColor=" rgb(22, 64, 250)";
    phone.style.backgroundColor=" #fff";
    showAli.style.backgroundColor=" #fff";
    shoe.style.backgroundColor=" #fff";

    showAli.style.color='#000';
    phone.style.color='#000';
    shoe.style.color='#000';
    clothes_btn.style.color='#fff';

    document.getElementById('clothes_btn').innerHTML='Clothes';
    document.getElementById("shoes").innerHTML="shoes";
    document.getElementById("showAli").innerHTML="show ali";
    document.getElementById("phone").innerHTML="phone";
}
clothes_btn.addEventListener("click",getClothes)
function getShoe(){
    clothe1.style.display="none";
    clothe2.style.display="none";
    clothe3.style.display="none";
    clothe4.style.display="none";

    phone1.style.display="none";
    phone2.style.display="none";
    phone3.style.display="none";
    phone4.style.display="none";

    shoe1.style.display="";
    shoe2.style.display="";
    shoe3.style.display="";
    shoe4.style.display="";
    
    shoe.style.backgroundColor=" rgb(22, 64, 250)";

    phone.style.backgroundColor=" #fff";
    clothes_btn.style.backgroundColor=" #fff";
    showAli.style.backgroundColor=" #fff";

    showAli.style.color='#000';
    phone.style.color='#000';
    clothes_btn.style.color='#000';
    shoe.style.color='#fff';
    shoe.innerHTML="Shoes"
    document.getElementById("showAli").innerHTML="show ali";
    document.getElementById('clothes_btn').innerHTML='clothes';
    document.getElementById("phone").innerHTML="phone";
}
shoe.addEventListener("click", getShoe)

//Use the keyboard function to navigate between the next, previous, and hide items.
function getKeyboard(e){
 if(e.key=='ArrowRight'){
    if(showAli.innerHTML=='showAli'){
      getNextSlider1();
    }
    else if(shoe.innerHTML=="Shoes"){
      getNextSlider4();
    }
    else if(clothes_btn.innerHTML=='Clothes'){
      getNextSlider3();
    }
    else if(phone.innerHTML=="Phone"){
      getNextSlider2();
    }
    }
else if(e.key=="ArrowLeft"){
    if(showAli.innerHTML=='showAli'){
        getPrevSlider1();
    }
    else if(shoe.innerHTML=="Shoes"){
        getPrevSlider4();
    }
    else if(clothes_btn.innerHTML=='Clothes'){
        getPrevSlider3();
    }
    else if(phone.innerHTML=="Phone"){
        getPrevSlider2();
    }    

}
    else if(e.key=='Escape'){
        getCloseSlider();
    }
}
document.addEventListener("keydown", getKeyboard)
