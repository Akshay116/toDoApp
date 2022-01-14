//selectors here
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');//selecting from html to add event lister
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

const tasksCounter = document.getElementById('tasks-counter');
const dateAdd = document.getElementsByClassName('date-c');


//event listeners here 
todoButton.addEventListener('click',addTodo);//add to do function below
todoList.addEventListener('click',deleteCheck);//t odlete and cheked button 
filterOption.addEventListener('click',filterTodo);

// functins here
function addTodo(event){
    event.preventDefault();//prevent form submit behaviour (which is either request to link redirect to reload)
   // console.log("hello");working chek
       
    console.log(todoInput.value);
   if(todoInput.value.length ==0 )//so that empty task dont append 
   {
     alert("empty task");
       return;
   }  
    
     //toDo div struc
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");//adding class to div
   const newTOdo = document.createElement('li');
   const toVAl= todoInput.value//toadd ADD something if blank REMAINING
   newTOdo.innerText =toVAl;//taking input in todolist from query selector to input tet in html

   newTOdo.classList.add('todo-item');
 todoDiv.appendChild(newTOdo);
 //chek and delete button
 //chek
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class= "fas fa-check"></i>';//fas fa awsom iocn//innertext wont work to add iso inner html 
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);//toadd to div

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class= "fas fa-trash"></i>';//fas fa awsom iocn//innertext wont work to add iso inner html 
   trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);//toadd to div

   const dateStamp =document.createElement("span");

   dateStamp.innerHTML = '<h4>000</h4>';
   dateStamp.classList.add("date-c");
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
      var time = String(today.getHours() + ":" + today.getMinutes());

      today = mm + '/' + dd + '/' + yyyy + '->' + time;
      dateStamp.innerText = today;
   
   
   todoDiv.appendChild(dateStamp);
  
   


//append to todolist


// time 
 
    todoList.appendChild(todoDiv);
    //append to todo-list see html file here //chek working//style button portion in css here 
    tasksCounter.innerHTML = todoList.childElementCount;
    todoInput.value="";// for clearing input section after entry 
}
function deleteCheck(e){
   console.log(e.target);// check in console click on any part shows class of item clicked 
   const item = e.target;//to get item we click like hek or delete 
   if(item.classList[0]==="trash-btn"){
      const todo = item.parentElement;//parent element of current node // else todo.remove removes delete button only since target clss is deleyte button
      todo.classList.add("fall");
      //todo.remove();//instaly removes animation here so 
      todo.addEventListener('transitionend',function(){// transitionend event is fired when a CSS transition has completed. 
      todo.remove();
      tasksCounter.innerHTML = todoList.childElementCount;
      });

      

     //delete done 
   }
   if(item.classList[0]==="complete-btn") {//chek class from console insepector
       const todo = item.parentElement;
       

       
       todo.classList.toggle("completed");//toggle class with completed ->css design through
       
       //chek done 
   }

}
function filterTodo(e){
const todos = todoList.childNodes;

todos.forEach(function(todo){//looping over every todo //forEach() method calls a function once for each element in an array, in order.
switch(e.target.value){//return value from selt value of html all,done,unfinished
    case "all":
    todo.style.display = "flex";
    break;//else execution will happen and serially shwoing results acording  SINCE SWITCH USED
    case "completed":
        if(todo.classList.contains("completed")){
           todo.style.display = "flex"; // we used flex on todos 
        }

        else{
            todo.style.display = "none";
   
        }
        break;
        case "uncompleted":
            if(!todo.classList.contains("completed")){
                todo.style.display = "flex"; 
            }
            else{
               
                todo.style.display = "none";
            }
            break;


}

});
}



  
