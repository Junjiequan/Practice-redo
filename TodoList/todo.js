//selectors
const todoInput = document.getElementById('todo-input')
const todoBtn = document.getElementById('todo-btn')
const todoUl = document.querySelector('.list-container')
const todoDelete = document.querySelector('.list-btn2')

//function
const addTodo = (event)=>{
    event.preventDefault();
    if(todoInput.value !== '' && !(todoInput.value.match(/^\s/))){
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
    todoTxtInput.value = todoInput.value;
    todoLi.appendChild(todoTxtInput);
    todoLi.appendChild(todoBtn1);
    todoLi.appendChild(todoBtn2);
    todoUl.appendChild(todoLi);
    todoInput.value = '';
    }
}

const deleteTodo = (event) =>{
    let item = event.target;
    if (item.classList[0] == 'list-btn2'){
    item.closest('.list-item').classList.toggle('fall')
     const remove = () =>{item.closest('.list-item').remove()}
     setTimeout(remove, 700)
    }
    if (item.classList[0] == 'list-btn1'){
        item.closest('.list-item').classList.toggle('list-done')
    }
}

//event listener
todoBtn.addEventListener('click', addTodo);
todoUl.addEventListener('click', deleteTodo)

