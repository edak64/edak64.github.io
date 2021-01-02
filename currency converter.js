function fromeuro(){
var rate=1666.1;
var euro= parseFloat(document.getElementById("euro").value);
document.getElementById("lbp").value=rate*euro;
}
function fromdollar(){
var rate=1515;
var dollar= parseFloat(document.getElementById("dollar").value);
document.getElementById("lbp").value=rate*dollar;
}
function fromyuan(){
var rate=216.41;
var yuan= parseFloat(document.getElementById("yuan").value);
document.getElementById("lbp").value=rate*yuan;
}