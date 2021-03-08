var randomImage=Math.floor(Math.random() * 6) + 1;// selecting numbers 1-6
var randomimagesource1="images/dice" +randomImage+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1);
var randomImage2=Math.floor(Math.random() * 6) + 1;// selecting numbers 1-6
var randomimagesource2="images/dice" +randomImage2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);
if(randomImage>randomImage2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}else if(randomImage===randomImage2){
  document.querySelector("h1").innerHTML="DRAW";
}else{
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";

}
