// Variables
var container = $(".container");
var tBody = $("tbody");
var date = $("#currentDay");
var timeDateToday = moment().format('dddd, MMMM Do YYYY').toString();
var time = moment().format('h:mm:ss a');

var workHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var todos = ["", "", "", "", "", "", "", "", ""];

// Add current date
date.append(timeDateToday);

// if this item exists in local storage, we will load it // changing the array to add contents in local storage
// if this exists
if  (localStorage.getItem("todos")) {
  // then execute this
  // in local storage you can only store strings, so you are using JSON.parse to change the string into an array
  todos = JSON.parse(localStorage.getItem("todos"));  
}

// or else do this
else {
  // if there are no todos in local storage, then we set the "todos" to be an empty array
  // turn the array todos into a string to keep in local storage under the key todos
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Create divs for calendar with input text boxes and save bottons
// If there is already content in local storage, it will be added automatically to the page
var createRow = function() {
  for (i = 0; i < workHours.length; i++) {
    container.append(
      `<div class='row' id='bs-row${i}'>
        <div class='col-md-2 hour' id='hours-row${i}'>${workHours[i]}</div>
          <div contenteditable='true' class='col-md-8 textarea' id='input-row${i}'>
            ${todos[i]}
          </div> 
          <button class='col md-2 save-button' id='save${i}'>
            <i class='fa fa-save' id='save-image${i}'></i>
          </button>
      </div>`
    );
  }
};

  // call the function
  createRow(workHours);

// event listener for when the save button is clicked
$(".save-button").click(function (event) {

  // this gives us access to the button 
  var buttonIndex = $(this)[0].id[4];

  // jQuery gets the value of the input with the id i
  var ind = `#input-row${buttonIndex}`;

  var inputContent = $(ind)[0].innerHTML;
  var todosTemp = JSON.parse(localStorage.getItem("todos"));
  todosTemp[buttonIndex] = inputContent;

  localStorage.setItem("todos", JSON.stringify(todosTemp));
  for (const todo of todosTemp) {
  }
});

//   // Change background depending on the time
//   var inputDiv = $("#input-row" + i);


//   if (time === workHours[i]) {

//     inputDiv.css('background-color', 'red');
//   }

//   else if (time < workHours[i]) {

//     inputDiv.css('background-color', 'grey');
//   }

// else {
  
//   inputDiv.css('background-color', 'green');

// }






