
var todoInput = document.querySelector(".todo-input");
var todobtn = document.querySelector(".todo-btn");
var todoList = document.querySelector(".todo-list");


todobtn.onclick = create;

function create(e){ 
    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newli = document.createElement("li");
    newli.classList.add("todo-li");
    newli.innerHTML=todoInput.value;

    newDiv.appendChild(newli);

     var chkbtn=document.createElement("button");
     chkbtn.classList.add("chk-btn");
     chkbtn.innerHTML='<i class="fa fa-check"></i>';
     newDiv.appendChild(chkbtn);
     
     var delbtn = document.createElement("button");
     delbtn.classList.add("del-btn");
     delbtn.innerHTML='<i class= "fa fa-trash"></i>';
     newDiv.appendChild(delbtn);

     todoList.appendChild(newDiv);

     todoList.onclick = chkdel;

     function chkdel(e)
     {
         var item = e.target; 
         if(item.classList[0] === "del-btn")
         {
             var parent = item.parentNode;
             parent.remove();
         }
         if(item.classList[0]=== "chk-btn"){
             var parent =item.parentNode;
             parent.classList.toggle("done");
         }
     }


}