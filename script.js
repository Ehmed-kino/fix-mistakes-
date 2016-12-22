// the buttons with - mark doesn't work

window.onload = function() {
  // create dropdown div
  var menue = document.createElement('div');
  menue.id = "dropDownMenue";
  var panel = document.createElement('div');
  panel.id = "show"
  document.body.appendChild(menue);
  document.body.appendChild(panel);
  areaRequest();
}// load


// create buttons
function createButtons(areaName) {
  return  "<button id='" + areaName + "' onClick='createList(" + areaName + ");'>" + areaName + "</button>";
}

// area request
function areaRequest() {
  fetch('https://code-your-future.github.io/api-demo/area/index.json')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json.data);
    for(var i=0; i<json.data.length; i++){
      document.getElementById('dropDownMenue').innerHTML += createButtons(json.data[i]);

    }
  })
  .catch(function(error){
    console.log(error);
  })
}
// createLiist
function createList(areaName) {
  fetch('https://code-your-future.github.io/api-demo/area/' + areaName.innerHTML  + '/index.json')
  .then(function(response){
    // document.getElementById('show').innerHTML = "";
    return response.json();
  })
  .then(function(json){
    for(var key in json.data){
    // document.getElementById('show').innerHTML = json.data[key]
    console.log(json.data[key]);
  }
  })
  .catch(function(error){
    console.log(error);
  })
}
