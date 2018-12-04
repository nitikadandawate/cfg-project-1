
function showAllImages() {
  var allImages = document.getElementsByClassName("col-md-3");
  for (i = 0; i < allImages.length; i++) {
  allImages[i].style.display = 'block';
}

}

function hideAllImages() {
  var allImages = document.getElementsByClassName("col-md-3");
  for (i = 0; i < allImages.length; i++) {
  allImages[i].style.display = 'none';
}
}

function displayMyImages(country) {
hideAllImages();
    var europe = document.getElementsByClassName(country);
    for (i = 0; i < europe.length; i++) {
    europe[i].style.display = 'block';
}
}
