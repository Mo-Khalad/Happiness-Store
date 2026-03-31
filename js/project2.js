/*var phone1=document.getElementById("phone1")
var phone2=document.getElementById("phone1")
var phone3=document.getElementById("phone1")
var phone4=document.getElementById("phone1")
*/

var sContainer=document.querySelector(".scontainer");
var sCon=document.querySelector(".scontainers");

var imgs=Array.from(document.getElementsByClassName("img-fluid"));

for(var i=0; i<imgs.length;i++)
{
    imgs[i].addEventListener("click",function(e)
{

    sContainer.style.display="flex";
    var imgsrc= e.target.src;
    sCon.style.backgroundImage=`url(${imgsrc})`;

})
}
     
    

