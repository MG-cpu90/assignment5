// Variables
var container = $(".container");
var tBody = $("tbody");
var date = $("#currentDay");
var timeDateToday = moment().format('dddd, MMMM Do YYYY').toString();
var time = moment().format('h:mm:ss a');

var workHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var todos = ["", "", "", "", "", "", "", "", ""];

// if this item exists in local storage, we will load it
if  (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  
}

else {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// workHours[0] = parseInt("9", 9);

// moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// Add current date
date.append(timeDateToday);

// Create divs for calendar with input text boxes and save bottons
container.innerHTML = workHours;

  var createRow = function() {
      
    for (i = 0; i < workHours.length; i++) {


      // var column1 = $("<div class='col-md-3' id='hours-row" + i + "'>" + workHours[i] + "</div>");
      // var column2 = $("<div class='col-md-7' id='input-row" + i + "'>" + "<input type='text' id='input" + i + "'placeholder=''>" + "</div>");
      // var column3 = $("<div class='col-md-2' id='save-row" + i + "'>" + "<button onclick='store()'>" + "<i class='fa fa-save' id='save" + i + "'></i>" + "</button>" + "</div>");
      
      // container.append("<div class='row'>", column1, column2, column3, "</div>");


    container.append("<div class='row' id='bs-row" + i + "'>" +
      "<div class='col-md-3' id='hours-row" + i + "'>" + workHours[i] + "</div>" + 
      "<div class='col-md-7' id='input-row" + i + "'>" + "<input type='text' id='input" + i + "'placeholder=''>" + "</div>" + 
      "<div class='col-md-2' id='save-row" + i + "'>" + "<button class='save-button' id='save" + i + "'>" + "<i class='fa fa-save'></i>" + "</button>" + "</div>" +
    "</div>");
    }
 
  };
  // call the function
  createRow(workHours);

  localStorage.todo = "";
  var toDo1 = localStorage.todo;

// document.getElementById("result").innerHTML = localStorage.lastname;

var inputToDo = document.getElementById("input" + i);
var inputRow = $("#input-row" + i);

$(".save-button").click(function (event) {
var buttonIndex = $(this)[0].id[4];

var inputContent = $("#input" + buttonIndex).val();
var todosTemp = JSON.parse(localStorage.getItem("todos"));
console.log(todosTemp);
todosTemp[buttonIndex] = inputContent;
localStorage.setItem("todos", JSON.stringify(todosTemp));

});

function store(event){
    event.preventDefault();
console.log(event);
    // for (i = 0; i < workHours.length; i++) {
      // var inputToDo = document.getElementById("input" + i);
      // var inputRow = $("#input-row" + i);
      // localStorage.setItem("input" + i, inputToDo.value);
      // inputRow.append("<br>" + "<li>" + inputToDo.value + "</li>");

    // }
}

  // function store2(){

  //   inputToDo.value.keypress(function(event) {
  //     if (event.keyCode == 13) {
  //       store(inputToDo.value);
  //     }
  //   });
  // }

// function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedTodos = JSON.parse(localStorage.getItem("input" + i));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       inputToDo.value = storedTodos;
//     }
//   console.log(storedTodos);

//   }
  
  // if already data set in localstorage for this element, 
    // set HTML element
  if (localStorage.getItem("input" + i)) { 
    container.innerHTML(localStorage.getItem("input" + i));
}
$("#save" + i).click(function appendData() {        
    container.append(inputToDo.value + '<br/>');
    // once element HTML updated, keep it in localstorage
    localStorage.setItem("input" + i, inputToDo.value);
});

  
  // function storeTodos() {
  //   // Stringify and set "todos" key in localStorage to todos array
  //   localStorage.setItem("input" + i, JSON.stringify(inputToDo));
  // }
  
  // // When form is submitted...
  // container.addEventListener("#save" + i, function(event) {
  //   event.preventDefault();
  
  //   var todoText = inputToDo.value.trim();
  
  //   // Return from function early if submitted todoText is blank
  //   if (todoText === "") {
  //     return;
  //   }
  
  //   // Add new todoText to todos array, clear the input
  //   storedTodos.push(todoText);
  //   inputToDo.value = "";
  
  //   // Store updated todos in localStorage, re-render the list
  //   storeTodos();
  // });



  // Change background depending on the time
  var inputDiv = $("#input-row" + i);


  if (time === workHours[i]) {

    inputDiv.css('background-color', 'red');
  }

  if (time < workHours[i]) {

    inputDiv.css('background-color', 'grey');
  }

else {
  
  inputDiv.css('background-color', 'green');

}






