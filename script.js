var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
greeting = 'Buenas Noches!';
} else if (hourNow > 12) {
greeting = 'hello friend!';
} else if (hourNow > 0) {
greeting = 'Buenos dias!';
} else {
greeting = 'Bienvenidos!';
}
document.write('<h3>' + greeting + '</h3>');