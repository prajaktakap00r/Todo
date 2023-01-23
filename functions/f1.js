//this function will take input from the input area 
//and display it on the screen
// it will also prevent the form from submitting
//also null out the value after submit is clicked

//variables
let input = document.querySelector("input");
let form = document.querySelector("#mainForm");
let List = document.querySelector("#TodoList");



//function
form.addEventListener("submit",(e)=>{
    input.placeholder="Add another task?";
    e.preventDefault();
    let Todo = input.value;
    List=document.createElement("li");
    List.append(Todo);
    mainContainer.append(List);
    input.value=null;
})

//styling of the new list

