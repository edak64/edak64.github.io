intro();

function intro(){
var stars;
stars=window.prompt("Please enter the rating of the Hotel you are interested in staying at (from 3 to 5 stars)");
if(stars==5){
document.writeln("<div class=star><a  href=https://www.booking.com/fivestars/city/lb/beirut.html>The best 5 stars Hotels</a></div>");
}
if(stars==3){
document.writeln("<div class=star><a  href=https://www.booking.com/threestars/city/lb/beirut.html>The best 3 stars Hotels</a></div>");
}
if(stars==4){
document.writeln("<div class=star><a  href=https://www.booking.com/fourstars/city/lb/beirut.html>The best 4 stars Hotels</a></div>");
}
if(stars!=3&&stars!=4&&stars!=5){
intro();}

}