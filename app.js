const input = document.querySelector('.input__text');
const addBtn = document.querySelector('.input__button');
const toDo = document.querySelector('.content');
const total = document.querySelector('#total');
let i = 0;

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

    total.textContent = i;
    toDo.appendChild(li);
}