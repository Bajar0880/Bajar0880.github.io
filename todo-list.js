const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: '',
    dueDate: ''
  }, {
    name: '',
    dueDate: ''
  }];

 renderTodo();

function renderTodo(){
    let todoListStorage = '';

    todoList.forEach((todoObject,index) => {
    const { name, dueDate  } = todoObject;
    const html = `
     <div>${name}</div>
     <div> ${dueDate}</div> 
     <button onclick="
        todoList.splice(${index},1);
        renderTodo();
        localStorage.removeItem('todoList');
        saveToStorage();
        "class="todo-delete-button"
        >Delete</button>
    `;
    todoListStorage += html;
    })
    document.querySelector('.js-output-div').innerHTML = todoListStorage;
    }

    document.querySelector('.js-todo-add-button').addEventListener('click',() =>{
        todoAdd();
    })

    function todoAdd(){
        const inputElement = document.querySelector(`.js-input-todo`);
        const name = inputElement.value;

        const dueDateElement = document.querySelector('.js-due-date-input');
        const dueDate = dueDateElement.value;
        
        todoList.push({
        name: name,
        dueDate: dueDate});
//    console.log(todoList);

    inputElement.value = '';

    renderTodo();
   
    saveToStorage();
}


function outputKeyUp(){
    if(event.key === 'Enter'){
        todoAdd();
    }
}
function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}