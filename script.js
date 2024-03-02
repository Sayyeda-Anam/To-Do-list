const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
//function to add a new task
function addTask(){
   if(inputbox.value ===''){
      alert("Please Write your task");
   }
   else{
      let li = document.createElement("li");
      li.innerHTML =inputbox.value;
      listcontainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML="";
      li.appendChild(span);
      

   }  
   inputbox.value="";
   saveData();
       
}
//add event listener for click function
listcontainer.addEventListener("click",function(a){
   // condition to check whether the task is checked or unchecked
   if(a.target.tagName==="LI"){
      a.target.classList.toggle("checked");
      saveData();
    
   }
   //condition to delete the task 
   else if(a.target.tagName==="SPAN"){
      a.target.parentElement.remove();
      saveData();
     
   }
   },false);
   //function to save the user data 
   function saveData(){
      localStorage.setItem("data",listcontainer.innerHTML);

   }
   //function to display the data on the user screen
   function showTask(){
      listcontainer.innerHTML=localStorage.getItem("data");
   }
   showTask();

