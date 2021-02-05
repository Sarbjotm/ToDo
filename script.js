taskAmount = 0;
theme = 0;

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

function changeThemes(){
    if(theme===0){
        document.body.style.backgroundColor = "navy";
        document.getElementById('titleTo').style.color = "lime";
        document.getElementById('submitbtn').style.backgroundColor = "white";
        document.getElementById('removebtn').style.backgroundColor = "lime";
        document.getElementById('number').style.color = "lime"
        document.getElementById('taskAmount').style.color = "lime"
        theme = 1
    }
    else{
        document.body.style.backgroundColor = "black";
        document.getElementById('titleTo').style.color = "yellow";
        document.getElementById('submitbtn').style.backgroundColor = "yellow"
        document.getElementById('removebtn').style.backgroundColor = 'rgb(' + 250 + ',' + 103 + ',' + 255 + ')'
        document.getElementById('number').style.color = "yellow"
        document.getElementById('taskAmount').style.color = "yellow"
        theme = 0
    }
}

function hoverSubmit(){
    if(theme === 0){
        document.getElementById('submitbtn').style.backgroundColor = 'rgb(' + 247 + ',' + 211 + ',' + 51 + ')'
    }
    else{
        document.getElementById('submitbtn').style.backgroundColor = "gray"
    }

}

function hoverOutSubmit(){
    if(theme === 0){
        document.getElementById('submitbtn').style.backgroundColor = "yellow"
    }
    else{
        document.getElementById('submitbtn').style.backgroundColor = "white"
    }
    
}

function hoverRemove(){
    if(theme === 0){
        document.getElementById('removebtn').style.backgroundColor = 'rgb(' + 209 + ',' + 157 + ',' + 211 + ')'
    }
    else{
        document.getElementById('removebtn').style.backgroundColor = "green"
    }
}

function hoverOutRemove(){
    if(theme === 0){
        document.getElementById('removebtn').style.backgroundColor = 'rgb(' + 250 + ',' + 103 + ',' + 255 + ')'
    }
    else{
        document.getElementById('removebtn').style.backgroundColor = "lime"

    }
}