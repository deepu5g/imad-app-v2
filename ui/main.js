//counter code
var button = document.getElementById('counter');
var counter = 0;

button.oneclick = function () {
  //make a request to counter end point
  //capture a response and store it in a varable
  //render the variable is the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};
