var currentDayNum;

var trip = [
  { day: 1,
    hotels:[],
    restaurants: [],
    activities: []
  }
];
function newDay(){
  trip.push(
    { day: trip.length+1,
      hotels:[],
      restaurants: [],
      activities: []
    }
  );
}
var dayCounter = 1;
$('#plusButton').click(function(){
  newDay();
  dayCounter++;
  var content = '<button type="button" class="btn btn-default">'+dayCounter+'</button>';
  $(content).insertBefore('#plusButton');


});
$('#HotelsButton').click(function(){
  var hotelId = $('#HotelsChooser').val();
  var foundHotel = dataFinder(hotels, hotelId);
  dataInsertor(foundHotel, 'hotels');
});
$('#RestaurantsButton').click(function(){
  var restaurantId = $('#RestaurantsChooser').val();
  var foundRestaurant = dataFinder(restaurants, restaurantId);
  dataInsertor(foundRestaurant, 'restaurants');
});
$('#ActivitiesButton').click(function(){
  var activityId = $('#ActivitiesChooser').val();
  var foundActivity = dataFinder(activities, activityId);
  dataInsertor(foundActivity, 'activities');
});

$('#dayList').on('click', 'button', function(){
  var $buttonPressed = $(this);
  currentDayNum = $buttonPressed.text();
  console.log(currentDayNum);
  $('#dayTag').text('Day ' + currentDayNum);
  // $('$buttonPressed').parent().remove();
});

function dataFinder(type, id){
  // console.log(type, id);
  var ourItem;
  type.forEach(function(item){
     if (item._id === id){
      //  console.log("item is here:",item);
       ourItem = item;
     }
  });
  return ourItem;
}
function dataInsertor(thing, category){
  var searchStr = '#' + category;
  console.log("thing",thing)
  trip[currentDayNum-1][category].push(thing);

  var builtItem = '<li id='+thing._id+'>' + thing.name + '<button class="btn btn-sm btn-danger" id ='+thing._id+'"</button></li>';
  var $newItem = $(builtItem);
  $(searchStr).append($newItem);

}
