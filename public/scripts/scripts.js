var currentDayNum = 1;

var trip = [
  {
    hotels:[],
    restaurants: [],
    activities: []
  }
];
function newDay(){
  trip.push(
    {
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
  $('#dayTag').text('Day ' + currentDayNum);
  // now show correct panel
  $('.trip-panel').removeClass('showMe');
  $('.trip-panel').addClass('hideMe');
  var builtPanelNum='#panel' + currentDayNum;
  $(builtPanelNum).addClass('showMe');


  // $('$buttonPressed').parent().remove();
});

function dataFinder(type, id){
  var ourItem;
  type.forEach(function(item){
     if (item._id === id){
       ourItem = item;
     }
  });
  return ourItem;
}
function dataInsertor(thing, category){
  var searchStr = '#' + category;
  // adds chosen item to object
  trip[currentDayNum-1][category].push(thing);
  divBuilder();

  // var builtItem = '<li id='+thing._id+'>' + thing.name + '<button class="btn btn-sm btn-danger" id ='+thing._id+'"</button></li>';
  // var $newItem = $(builtItem);
  // $(searchStr).append($newItem);

}
// function()

function divBuilder(){
  $(".panel-body li").remove();
  var currentDay = trip[currentDayNum-1];
    for (var key in currentDay) {
      var idStr = '#' + key;
      // console.log("searchStr is",idStr);
      for (var i = 0; i < trip[currentDayNum-1][key].length; i++) {
        var thingName = trip[currentDayNum-1][key][i].name;
        var thingId = trip[currentDayNum-1][key][i]._id;
        console.log("idStr :",idStr);

        var builtItem = '<li id='+thingId+'>' + thingName + '<button class="btn btn-sm btn-danger" id ='+thingId+'"</button></li>';
        var $newItem = $(builtItem);
        $(idStr).append($newItem);

      }
    }

}
