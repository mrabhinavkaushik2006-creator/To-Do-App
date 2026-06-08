let input = document.getElementById("Name");
let button = document.getElementById("btn");
let contanier = document.getElementById("container");
let ul = document.getElementById("ul");

button.addEventListener("click",function(){
  let value = input.value;

    if (value === "") return;

let list = document.createElement("li");
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
    let taskText = document.createElement("span");
     taskText.innerText = value;
ul.appendChild(list);
taskText.addEventListener("click", function () {
    list.classList.toggle("completed");
});

 let btn = document.createElement("button");
 btn.innerText = "delete";   

 checkbox.addEventListener("change",function() {
 })
 
 btn.addEventListener("click",function(){
  list.remove();
 });
     list.appendChild(checkbox);
    list.appendChild(taskText);

    list.appendChild(btn);






input.value = "";
});