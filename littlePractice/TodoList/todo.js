//selectors
const todoText = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-btn');
const todoAddBox = document.querySelector('.list-container');
const todoFilter = document.querySelector('.todo-filter');
//function
const addTodoList = (event) =>{
    event.preventDefault();
    if(!todoText.value.match(/^\s+|^$/)){
        const TodoLi = document.createElement('li');
        TodoLi.classList.add('list-item');
        //get value box-------------------------
        const TodoInput = document.createElement('input');
        TodoInput.disabled = true;
        TodoInput.classList.add('list-text');
        TodoInput.value = todoText.value
        setData(todoText.value)
        const TodoBtn = document.createElement('button');
        TodoBtn.classList.add('list-btn1');
        TodoBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'

        const TodoBtn2 = document.createElement('button');
        TodoBtn2.classList.add('list-btn2');
        TodoBtn2.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'

        TodoLi.appendChild(TodoInput);
        TodoLi.appendChild(TodoBtn);
        TodoLi.appendChild(TodoBtn2);
        todoAddBox.appendChild(TodoLi);
        
        //return empty value ---------------
        todoText.value = '';
    }
}
const addTodoDone = (event) =>{
    const todoTarget = event.target;
    const TodoBox = todoTarget.closest('.list-item')
    if(todoTarget.classList[0] == 'list-btn1'){
        TodoBox.classList.toggle('list-done')
    }
    if(todoTarget.classList[0] == 'list-btn2'){
        TodoBox.classList.add('fall')
        setTimeout(()=>{TodoBox.remove()}, 710)
    }
    removeData(TodoBox)
}
const runTodoFilter = (event) => {
    const filterClick = event.target.value;
    const childs = todoAddBox.childNodes;
    
    childs.forEach(index =>{
        switch(filterClick){
            case 'all':
                index.style.display = "flex";
                break;
            case 'done':
               if(index.classList.contains('list-done')){
                index.style.display = "flex";
               } else {
                index.style.display = "none";
               }
               break;
            case 'no':
               if(!index.classList.contains('list-done')){
                index.style.display= "flex";
               } else {
                index.style.display= "none";
               }
        }
    })
}
const setData = (data) =>{
    let Storage;
    if(localStorage.getItem('Storage') === null){
        Storage = [];
    } else{
        Storage = JSON.parse(localStorage.getItem('Storage'));
    }
    Storage.push(data);
    localStorage.setItem('Storage', JSON.stringify(Storage));
}

const getData = () =>{
    let Storage;
    if(localStorage.getItem('Storage') === null){
        Storage = [];
    } else {
        Storage = JSON.parse(localStorage.getItem('Storage'));
    }

    Storage.forEach(index=>{ 
        const TodoLi = document.createElement('li');
        TodoLi.classList.add('list-item');
        //get value box-------------------------
        const TodoInput = document.createElement('input');
        TodoInput.disabled = true;
        TodoInput.classList.add('list-text');
        TodoInput.value = index

        const TodoBtn = document.createElement('button');
        TodoBtn.classList.add('list-btn1');
        TodoBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'

        const TodoBtn2 = document.createElement('button');
        TodoBtn2.classList.add('list-btn2');
        TodoBtn2.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'

        TodoLi.appendChild(TodoInput);
        TodoLi.appendChild(TodoBtn);
        TodoLi.appendChild(TodoBtn2);
        todoAddBox.appendChild(TodoLi);
    //return empty value ---------------
    })
}

const removeData = (target) =>{
    let Storage;
    if(localStorage.getItem('Storage') === null){
        Storage = [];
    } else {
        Storage = JSON.parse(localStorage.getItem('Storage'));
    }
    const check = target.childNodes[0]
    Storage.splice(Storage.indexOf(check.value),1)
    localStorage.setItem('Storage',JSON.stringify(Storage));
}
//eventlistener
document.addEventListener('DOMContentLoaded',getData);
todoButton.addEventListener('click', addTodoList);
todoAddBox.addEventListener('click', addTodoDone);
todoFilter.addEventListener('change', runTodoFilter);


