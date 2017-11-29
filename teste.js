window.addEventListener("deviceorientation", brasilvaronil);

function brasilvaronil(event){
  var directions = document.getElementById("directions");

  if (evt.alpha < 5 || evt.alpha > 355) {
    directions.innerHTML = "North!";
  } else if (evt.alpha < 180) {
    directions.innerHTML = "Turn Left";
  } else {
    directions.innerHTML = "Turn Right";
  }

}
