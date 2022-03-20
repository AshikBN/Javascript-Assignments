let btn1 =document.getElementById('completed')
let btn2 =document.getElementById('pending')
let comp=document.querySelector('.completed')
let pend=document.querySelector('.pending')
const url="https://jsonplaceholder.typicode.com/todos"

// async function getApi(url){
//     const response=await fetch(url)
//     const data=await response.json()
//     console.log(data)
// }

btn1.addEventListener('click',async function(){
    const response=await fetch(url)
    const data=await response.json()
    for (let i = 0; i < data.length; i++) {
        if(data[i]['completed']==true){
            let completed=document.createElement('p')
            completed.innerHTML=data[i]['id']+" "+data[i]['title']
            comp.appendChild(completed)

        }
        
        
    }
})

btn2.addEventListener('click',async function(){
    const response=await fetch(url)
    const data=await response.json()
    for (let i = 0; i < data.length; i++) {
        if(data[i]['completed']==false){
            let completed=document.createElement('p')
            completed.innerHTML=data[i]['id']+" "+data[i]['title']
            pend.appendChild(completed)

        }
        
        
    }
})