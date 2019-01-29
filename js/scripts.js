// Entries business logic
function Entries() {
  this.places = [];
  this.currentId = 0;
}

Entries.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places.push(place);
}

Entries.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

// Places business logic
function Place(country, date, bird, time) {
  this.country = country;
  this.date = date;
  this.bird = bird;
  this.time = time;
}


$(document).ready(function() {
  var ourEntries= new Entries();
  $("#placeForm").submit(function(event){
    event.preventDefault();
    var birdString = $("input#birds").val();
    var arrayBirds= birdString.split(", ");
    var countryInput= $("input#country").val();
    var dateInput= $("input#date").val();
    var timeInput= $("input#time").val();
    var placeObj= new Place(countryInput,dateInput,arrayBirds,timeInput);
    ourEntries.addPlace(placeObj);
    console.log(ourEntries);
    $(".notes").hide();
    ourEntries.places.forEach(function(place){
        $('#results').prepend("<div class='notes'><p>"+place.country+", date: "+place.date+"</p><button id='"+place.id+ "' type='button'>See notes</button ><div class='birdBox' id='" +place.id+"bird'>"+place.bird.join(", ")+": logged at "+place.time+"</div></div>");
        $("button#"+place.id).click(function(){
          $("#"+place.id+"bird").toggle();
        })
    });
  })
});
