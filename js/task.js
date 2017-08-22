

var tasks = [];



function loadTaskInput()
{
   hideErrorMsg();//if exists

    if( ! validateTaskDescInput())
        return;
    if( ! validateExecutionDate())
        return;

    var newTaskText = document.getElementById("taskDescInput").value;
    var executionDate = document.getElementById("executionDateInput").value;
    var executionTime = document.getElementById("executionTime").value;


    var task = 
    {
        taskText : newTaskText,
        executionDate : executionDate,
        executionTime: executionTime,
        deleteIconAdded: false,
        dateArrived: false
    };

    addNewTask(task);
   
    Refresh();
}



function addNewTask(task)
{
   var taskCount = addTaskToStorage(task);

   showTask(task, taskCount);
  

}



function removeTask()
{
    var countStr = this.parentElement.getAttribute("id");
    var toRemove = document.getElementById(countStr);
  /*  
    toRemove.style.animation= "myFadeOut 5s";
    
    //Pause5Sec(1);
    sleep(5000) ;
*/
    fadeOut(toRemove,50000);
    
    toRemove.remove();

    var taskArr=[];
    var strFromStorage = localStorage.getItem("taskArr");

    if( strFromStorage != null)
    {
        taskArr = JSON.parse(strFromStorage);
    }
    
    var arrTmp = taskArr.splice( parseInt(countStr)-1 , 1 );  

    localStorage.setItem("taskArr", JSON.stringify(taskArr))

    playDeleteAudio();
    Refresh();
}





function addTaskToStorage(task)
{
    var taskArr=[];
    var strFromStorage = localStorage.getItem("taskArr");

    if( strFromStorage != null)
    {
        taskArr = JSON.parse(strFromStorage);
    }

    taskArr[ taskArr.length ] = task;

    localStorage.setItem("taskArr", JSON.stringify(taskArr));

    return  taskArr.length;
}



function loadExistingTasks()
{
    var taskArr=[];
    var strFromStorage = localStorage.getItem("taskArr");

    if( strFromStorage === null)
    {
        return;
    }
    else
    {
        taskArr = JSON.parse(strFromStorage);
    }

    for( i=0 ; i< taskArr.length ; i++)
    {
        showTask(taskArr[i], i+1);
    }
  
}

