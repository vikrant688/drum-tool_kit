//document.querySelector("button").addEventListener("click",helper);
var x=document.querySelectorAll(".drum");
for(var i=0;i<x.length;i++)
{
    //x[i].addEventListener("click",helper);
    x[i].addEventListener("click",function()
    {
        sound(this.innerHTML);
        animation(this.innerHTML)
    });
}
document.addEventListener("keypress",function(event)
{
    sound(event.key);
    animation(event.key);
});
function sound(c)
{
    //var c=this.event.key;
   switch (c)
   {
        case "w":
           var mu1=new Audio("sounds/tom-1.mp3");
           mu1.play();
           break;
        case "a":
            var au2=new Audio("sounds/tom-2.mp3");
            au2.play();
            break;
        case "s":
            var au3=new Audio("sounds/tom-3.mp3");
            au3.play();
            break;
        case "d":
            var au4=new Audio("sounds/tom-4.mp3");
            au4.play();
            break;
        case "j":
            var aud4=new Audio("sounds/crash.mp3");
            aud4.play();
             break;
        case "k":
            var aud6=new Audio("sounds/kick-bass.mp3");
            aud6.play();
            break;
        case "l":
            var aud7=new Audio("sounds/snare.mp3");
            aud7.play();
            break;
        default:
           // alert(x);
            break;
   }
}
function animation(key)
{
    var x=document.querySelector("."+key);
    x.classList.toggle("pressed");
    setTimeout(function()
    {
        x.classList.toggle("pressed");
    },100);
}
/*function helper()
{
    var x=this.innerHTML;
    switch (x) {
        case "w":
            var au=new Audio("sounds/tom-1.mp3");
            au.play();
            break;
        case "a":
            var au2=new Audio("sounds/tom-2.mp3");
            au2.play();
            break;
        case "s":
            var au3=new Audio("sounds/tom-3.mp3");
            au3.play();
            break;
        case "d":
            var au4=new Audio("sounds/tom-4.mp3");
            au4.play();
            break;
        case "j":
            var aud4=new Audio("sounds/crash.mp3");
            aud4.play();
             break;
        case "k":
            var aud6=new Audio("sounds/kick-bass.mp3");
            aud6.play();
            break;
        case "l":
            var aud7=new Audio("sounds/snare.mp3");
            aud7.play();
            break;
        default:
            alert(x);
            break;
    }
}*/
