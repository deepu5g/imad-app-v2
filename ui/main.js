//counter code
var button = document.getElementById('counter');
var counter = 0;

button.oneclick = function () {
  //make a request to counter end point
  var request = new XMLhttpRequest();
  //capture a response and store it in a varable
request.onreadystatechange= function () {
     if (request.readystate ===  XMLhttpRequest.DONE) {
    //take  some action
    if(request.status===200) {
        var counter = request.responseText;

  //render the variable is the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
    }
    
}
};
background(151, 244, 247);
noStroke();

// position of the car
var x = 10;

// draw the car body
fill(255, 0, 115);
rect(x, 200, 100, 20);
rect(x + 15, 178, 70, 40);

// draw the wheels
fill(77, 66, 66);
ellipse(x + 25, 221, 24, 24);
ellipse(x + 75, 221, 24, 24);
//make a request
request.open('GET','http://http://deepu5g.imad.hasura-app.io/counter', true);
request.send(null);
};

