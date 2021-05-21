var time=0
function onClick() {
    time = time +30
    var random = Math.floor(Math.random()*11); 
    if (time>5000) {
      getOut()
    } 
    else if (time < 5000) {
        if (random == 0) {
          document.body.style.backgroundColor = "red";
          document.body.style.color = "white"
          colorClock()
        }
        else if (random == 1) {
          document.body.style.backgroundColor = "blue";
          document.body.style.color = "white"
          colorClock()
        }
        else if (random == 2) {
          document.body.style.backgroundColor = "green";
          document.body.style.color = "black"
          colorClock()
        }
          else if (random == 3) {
          document.body.style.backgroundColor = "purple";
          document.body.style.color = "white"
          colorClock()
        }
        else if (random == 4) {
          document.body.style.backgroundColor = "cyan";
          document.body.style.color = "black"
          colorClock()
        }
        else if (random == 5) {
          document.body.style.backgroundColor = "yellow";
          document.body.style.color = "black"
          colorClock()
          }
        else if (random == 6) {
          document.body.style.backgroundColor = "grey";
          document.body.style.color = "black"
          colorClock()

        }
        else if (random == 7) {
          document.body.style.backgroundColor = "orange";
          document.body.style.color = "black"
          colorClock()
        }
        else if (random == 8) {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black"
          colorClock()
        }
        else if (random == 9) {
          document.body.style.backgroundColor = "saddlebrown";
          document.body.style.color = "white"
          colorClock()
        }
        else if (random == 10) {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white"
          colorClock()
        }
    }
  }
  
  function colorClock(){
    var refresh=30
    mytime=setTimeout('onClick()', refresh)
    }

  function getOut() {
    document.body.style.backgroundColor = "black";
    time = 0
  }
