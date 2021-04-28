const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

btn.addEventListener('click', (event) => {
    if(input.value === "") return
    createDeleteElements(input.value)
    input.value = '';
})
// create and delete todo
function createDeleteElements(value) {
    i++
    console.log(value)

    const li = document.createElement("li")
    const btn = document.createElement("button")

    li.className = "li";
    li.textContent = value;

    btn.className = "btn";
    btn.textContent = 'add';
    li.appendChild(btn)

    //remove todo
    btn.addEventListener('click', (event) => {
        i--
        total.textContent = i;
        result.removeChild(li)
        
    })

    li.addEventListener('click', (event) => {
        li.classList.toggle('li-active')
    })
    
    total.textContent = i;
    result.appendChild(li)
}