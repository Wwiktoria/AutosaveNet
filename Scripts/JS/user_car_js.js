
let isImage1Visible = true;

function toggleImages() {
    var carAll = document.getElementById("car-all-on");
    var carOff = document.getElementById("car-off");
  if (isImage1Visible) {
    carAll.style.display = "none";
    carOff.style.display = "inline";
  } else {
    carAll.style.display = "inline";
    carOff.style.display = "none";
  }
  isImage1Visible = !isImage1Visible;
}

function changeLights() {
    var text = document.getElementById("lights-text");
    var alarmText = document.getElementById("alarm-text");
    var carOn = document.getElementById("car-lights-on");
    var carOff = document.getElementById("car-off");
    var carAll = document.getElementById("car-all-on");
    if(alarmText.innerHTML === "Off"){
        if (text.innerHTML === "On") {
            text.innerHTML = "Off";
            carAll.style.display = "none";
            carOn.style.display = "none";
            carOff.style.display = "inline";
          } else {
            text.innerHTML = "On";
            carAll.style.display = "none";
            carOn.style.display = "inline";
            carOff.style.display = "none";
          }
    } else {
        alert("Can't change lights during an alarm!");
    }
  }

function changeLocked() {
    var text = document.getElementById("block-text");
    if (text.innerHTML === "Locked") {
      text.innerHTML = "Unlocked";
    } else {
      text.innerHTML = "Locked";
    }
  }

  function changeAlarm() {
    var carOn = document.getElementById("car-lights-on");
    var carOff = document.getElementById("car-off");
    var carAll = document.getElementById("car-all-on");
    var text = document.getElementById("alarm-text");
    var textLight = document.getElementById("lights-text");
    if (text.innerHTML === "Off") {
      text.innerHTML = "On";
      textLight.innerHTML = "Off";
      carOn.style.display = "none";
      blinking = setInterval(toggleImages, 1000);
    } else {
      text.innerHTML = "Off";
      carAll.style.display = "none";
      carOn.style.display = "none";
      carOff.style.display = "inline";
      textLight.innerHTML = "Off";
      clearInterval(blinking);
    }
  }

  function changeEmergency() {
    var carOn = document.getElementById("car-lights-on");
    var carOff = document.getElementById("car-off");
    var carAll = document.getElementById("car-all-on");
    var text = document.getElementById("emergency-text");
    if (text.innerHTML === "Off") {
      text.innerHTML = "On";
      carOn.style.display = "none";
      carAll.style.display = "inline";
      carOff.style.display = "none";
    } else {
      text.innerHTML = "Off";
      carAll.style.display = "none";
      carOn.style.display = "inline";
      carOff.style.display = "none";
      var textLight = document.getElementById("lights-text");
      textLight.innerHTML = "On";
    }
  }

  function collisionHandler() {
    alert("A message to your emergency contacts has been sent! Attached location and a map.");
  }
  
  function diabetesHandler() {
    let isExecuted = confirm("Your glucometer is sending warnings. You have to take actions or the car will enter diabetes mode. Are you able to handle the situation? If you cancel this message car will enter diabetes mode.");
    console.log(isExecuted); // OK = true, Cancel = false
    if(!isExecuted){
      alert("Car is entering diabetes mode!");
      var text = document.getElementById("block-text");
      text.innerHTML = "Unlocked";
      var textEmer = document.getElementById("emergency-text")
      if(textEmer.innerHTML === "Off"){
        changeEmergency();
      }
    }
  }

  function breakInHandler() {
    alert("A message has been sent to your phone with current location of the car. Car is entering the theft mode.");
    changeAlarm();
    var text = document.getElementById("block-text");
    text.innerHTML = "Unlocked";
  }