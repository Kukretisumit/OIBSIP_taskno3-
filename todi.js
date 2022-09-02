const Todo = document.getElementById("todo");
const Add=document.getElementById("add");
const lists=document.getElementById('todolist');
const completed=document.getElementById("completed");


Add.onclick=function add(){

   const all=document.createElement('div');
   all.classList.add('All')
    lists.append(all);

    var Content=document.createElement('div');
    Content.classList.add('content');
Content.innerText=Todo.value;
all.appendChild(Content);
Todo.value="";

const edit=document.createElement("div");
edit.classList.add("Edit");
all.appendChild(edit);

const Done=document.createElement("button");
Done.classList.add('done');
Done.innerHTML='Done';
edit.appendChild(Done);

const Delete=document.createElement('button');
Delete.classList.add('delete');
Delete.innerHTML='x';
edit.appendChild(Delete);


Done.addEventListener('click',function(){
    const complete=document.createElement("div");
    complete.classList.add('comlist');
    completed.append(complete);

    complete.appendChild(Content)
   const del=document.createElement('button');
   del.classList.add('Del');
   del.innerHTML='x';
   complete.appendChild(del);


    Content.style.textDecoration='line-through';
    lists.removeChild(all);

    del.addEventListener('click',function(){
        completed.removeChild(complete);
    })

    
})


Delete.addEventListener('click',function(){
    lists.removeChild(all);
})
    
}
