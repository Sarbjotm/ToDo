function getTask(){
    var div = document.getElementById('toDoTasks')
    var task = document.getElementById('task').value;
    div.innerHTML += task + "<br /> <br />"
    document.getElementById('task').value = ''
    
}


function removeTask(){
    document.getElementById('task').value = ''
    document.getElementById('toDoTasks').innerHTML = ''
    
}



