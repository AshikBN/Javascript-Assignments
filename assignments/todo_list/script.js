let input=document.querySelector('input')
let btn=document.querySelector('button')
let todos=document.querySelector('.todos')

let count=-1
btn.addEventListener('click',function(){
    count+=1
    let todo=document.createElement('p')
    todo.innerHTML=input.value
    //todo.style.cursor='pointer'
    todo.setAttribute("key",count)
    todos.appendChild(todo)
    todo.addEventListener('click',function(){
        todos.removeChild(todo)
    })
})

