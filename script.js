taskAmount = 0;

function getTask(){
    var div = document.getElementById('toDoTasks')
    var task = document.getElementById('task').value;
    var amount = document.getElementById('taskAmount')
    if(task === ""){
        alert("No Task to Insert")
    }
    else{
        var para = document.createElement('p');
        para.style.fontSize = '20px';
        para.style.fontFamily = "Optima, sans-serif";
        para.innerHTML = task + "<br /> <br />";
        para.onclick = function(){
            this.style.display = 'none'
            taskAmount = taskAmount - 1;
            amount.innerHTML = taskAmount;
        }
        document.querySelector("#toDoTasks").append(para);
        document.getElementById('task').value = '';
        taskAmount = taskAmount + 1;
        amount.innerHTML = taskAmount;
    }

    
}



function removeTask(){
    taskAmount = 0;
    var amount = document.getElementById('taskAmount').innerHTML = 0
    document.getElementById('task').value = ''
    document.getElementById('toDoTasks').innerHTML = ''
    
}
