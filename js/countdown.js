// Set the date we're counting down to
var countDownDate = new Date(Date.UTC(2018, 2, 11, 19, 0, 0)).getTime();
//Year, Month - 1, Day, Hour, Minutes, Seconds
//Month should be one less than in reality

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Coin: SKR<br> <br>Exchange: Cryptopia";
  }
}, 1000);

//IMPORTANT: Obfuscate this javascript with https://javascriptobfuscator.com/Javascript-Obfuscator.aspx