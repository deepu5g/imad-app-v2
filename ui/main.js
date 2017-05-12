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

function renderTime(){
    var mydate = new Date();
     var year = mydate.getYear();
     if (year < 1000){
     year+=1990;
     }
var day = mydate.getDay();
var month = mydate.getMonth();
var daym = mydate.getDate();
var dayarray = new Array("sunday","monday","tuesday","wednwesday","thursday","friday","saturday"); 
var montharray = new Array("january","february","march","april","may","june","july","august","septmber","october","november","december");
    
}   
//make a request
request.open('GET','http://http://deepu5g.imad.hasura-app.io/counter', true);
request.send(null);
};

