const input = document.querySelector('.input__text');
const addBtn = document.querySelector('.input__button');
const toDo = document.querySelector('.content');
const total = document.querySelector('#total');
const date = document.querySelector('.header__date');

let i = 0;
//Date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);



addBtn.addEventListener('click', (event) => {
    if(input.value === "") return
    createDeleteElements(input.value)
    input.value = '';
})

function createDeleteElements(value) {
    i++

    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    li.className = "content__item";
    
    div.className = "checkbox";
    li.appendChild(div);

    p.className="todo";
    p.textContent= value;
    li.appendChild(p);

    button.className="content__button";
    li.appendChild(button);

    button.addEventListener('click', (event) => {
        i--;
        total.textContent = i;
        toDo.removeChild(li)
    })

    li.addEventListener('click', (event) => {
        div.classList.toggle('checkbox_done')
        p.classList.toggle('todo__done')
    })

    total.textContent = i;
    toDo.appendChild(li);
}