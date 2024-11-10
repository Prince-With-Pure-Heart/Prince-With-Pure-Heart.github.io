const btn = document.querySelector('#btn');
const form = document.querySelector('#form');
const box = document.querySelector('.box');
 
let tasks = [];
const input2 = document.querySelector('#remove');
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    
    const task = form.task.value;
    if (!task) return; 
        
 
    
     tasks.push(task)
      
     displayTasks()
     form.reset();
     
  
})

function displayTasks(){
    box.innerHTML = '';
    box.style.display = 'flex'
    
        
    
    tasks.forEach((task, index)=>{
        const div = document.createElement('div');
        const el = document.createElement('tr');
       
        
        
        div.appendChild(el);
        el.innerHTML = `${index + 1}. ${task}`;
        el.style.color = 'white'

        el.style.fontSize = '30px'
        div.addEventListener('click', (e)=>{
            e.preventDefault();
            tasks.splice(index,1);
            displayTasks()
        });
        box.appendChild(div);
        div.classList.toggle('element');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
    })
    
}


 