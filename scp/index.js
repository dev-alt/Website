//create a function that hides the webpage until the user clicks the button
function hideSite() {
  document.getElementById("hide").style.display = "none";
  document.getElementById("show").style.display = "block";
}

//hide the website only showing a button
function showSite() {
  document.getElementById("hide").style.display = "block";
  document.getElementById("show").style.display = "none";
}
