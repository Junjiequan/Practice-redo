//todo selectors
const todoInput = document.getElementById('todo-input')
const todoBtn = document.getElementById('todo-btn')
const todoUl = document.querySelector('.list-container')
const todoDelete = document.querySelector('.list-btn2')
const optionFilter = document.querySelector('.todo-filter')
//add todo function
const addTodo = (event)=>{
    event.preventDefault();
    if(!(todoInput.value.match(/^\s|^$/))){
    const todoLi = document.createElement('LI');
    todoLi.classList.add('list-item');

    const todoTxtInput = document.createElement('INPUT');
    todoTxtInput.classList.add('list-text');
    
    const todoBtn1 = document.createElement('BUTTON');
    todoBtn1.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    todoBtn1.classList.add('list-btn1');
    
    const todoBtn2 = document.createElement('BUTTON');
    todoBtn2.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    todoBtn2.classList.add('list-btn2');
    
    //append it
    todoTxtInput.value = todoInput.value;
    todoTxtInput.disabled = true;
    localTodoSave(todoInput.value);
    todoLi.appendChild(todoTxtInput);
    todoLi.appendChild(todoBtn1);
    todoLi.appendChild(todoBtn2);
    todoUl.appendChild(todoLi);
    
    todoInput.value = '';
    }
}
//delete todo function
const deleteTodo = (event) =>{
    let item = event.target;
    if (item.classList[0] == 'list-btn2'){
    item.closest('.list-item').classList.toggle('fall')
     const remove = () =>{item.closest('.list-item').remove()}
     setTimeout(remove, 700)
     removeLocalTodo(item)
    }
    if (item.classList[0] === 'list-btn1'){
        item.closest('.list-item').classList.toggle('list-done')
    }
}
const filterTodo = (event)=>{
    let option = todoUl.childNodes;
    console.log(option)
    option.forEach((todo)=>{
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "done":
                if(todo.classList.contains('list-done')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "no":
                if(!todo.classList.contains('list-done')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none"
                }
                break;
        }
    })
}
//save data to local
const localTodoSave = (data) =>{
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(data);
    localStorage.setItem('todos', JSON.stringify(todos));
}
//get data from local
const getLocalTodo = () =>{
    let todos;
    if (localStorage.getItem('todos') === null){
        todos = [];
    }   else {
        todos= JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((data)=>{
        const todoLi = document.createElement('LI');
        todoLi.classList.add('list-item');
    
        const todoTxtInput = document.createElement('INPUT');
        todoTxtInput.disabled = true;
        todoTxtInput.classList.add('list-text');
        
        const todoBtn1 = document.createElement('BUTTON');
        todoBtn1.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        todoBtn1.classList.add('list-btn1');
        
        const todoBtn2 = document.createElement('BUTTON');
        todoBtn2.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        todoBtn2.classList.add('list-btn2');
        
        //append it
        todoTxtInput.value = data;
        todoLi.appendChild(todoTxtInput);
        todoLi.appendChild(todoBtn1);
        todoLi.appendChild(todoBtn2);
        todoUl.appendChild(todoLi);
    })
}
const removeLocalTodo = (data) =>{
    let todos;
    if(localStorage.getItem('todos' === null)){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const theValue = data.closest('li').children[0].value
    todos.splice(todos.indexOf(theValue),1);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(theValue)
}

//event listener
document.addEventListener('DOMContentLoaded',getLocalTodo)
todoBtn.addEventListener('click', addTodo);
todoUl.addEventListener('click', deleteTodo)
optionFilter.addEventListener('change', filterTodo)




//----------------------------font animation part----------------------
//font selector
const fontHead = document.querySelector('.header1');
const fontSplit = fontHead.innerText.split("");
fontHead.innerText = '';
fontSplit.map(index=>{
    fontHead.innerHTML = fontHead.innerHTML + "<span>" + index + "</span>";
})
//font animation function
let char = 0;
const action = () =>{
    const span = fontHead.querySelectorAll('span')[char]
    span.classList.add('animation')
    if (++char >= fontSplit.length){
        clearInterval(timer);
    }
}
const timer = setInterval(action, 50);
//----------------------------/font animation part----------------------
