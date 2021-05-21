function onClick() {
    var time
    time+=30
    var random = Math.floor(Math.random()*11); 
    if (random == 0) {
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white"
    }
    else if (random == 1) {
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white"
    }
    else if (random == 2) {
      document.body.style.backgroundColor = "green";
      document.body.style.color = "black"
    }
      else if (random == 3) {
      document.body.style.backgroundColor = "purple";
      document.body.style.color = "white"
    }
    else if (random == 4) {
      document.body.style.backgroundColor = "cyan";
      document.body.style.color = "black"
    }
    else if (random == 5) {
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black"
      }
    else if (random == 6) {
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "black"
    
    }
    else if (random == 7) {
      document.body.style.backgroundColor = "orange";
      document.body.style.color = "black"
    }
    else if (random == 8) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
    }
    else if (random == 9) {
      document.body.style.backgroundColor = "saddlebrown";
      document.body.style.color = "white"
    }
    else if (random == 10) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white"
    }
    if (time>15000) {
      document.body.style.backgroundColor = "black";
    }
    colorClock()
  }
  
  function colorClock(){
    var refresh=30
    mytime=setTimeout('onClick()', refresh)
    }
