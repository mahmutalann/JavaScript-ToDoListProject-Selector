let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

//Selecting Element According to Class

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

//Selecting Element According to Tag 

element = document.getElementsByTagName("div");

//Query Selector - CSS Selector - A Single Element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");


eelment = document.querySelector(".list-group-item");

element = document.querySelector("li");
element = document.querySelector("div");

//QuerySelectorAll - All Elements
element = document.querySelectorAll(".list-group-item");  //Node List

element.forEach(function(el){
    console.log(el);
});