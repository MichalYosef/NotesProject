

function loadDefaultTimeDate()
{
    var timeInputElement = document.getElementById('executionTime');
    var dateInputElement = document.getElementById('executionDateInput');
   
    dateInputElement.defaultValue = getTommorowDateString(); // tommorow is the favorite time for any task

    var currentDate = new Date();
    
    timeInputElement.value = getCurrentTimeString();
    
}

function getCurrentTimeString()
{

    var currentDate = new Date();
    
    var hour=currentDate.getHours();
    var minut = currentDate.getMinutes();
    
    var hourStr = "" ,minutStr="";

    if(hour<10)
        hourStr = "0"+hour;

        else
        hourStr = parseInt(hour);
        
    if(minut<10)
        minutStr = "0"+minut;
        else
        minutStr = parseInt(minut);
 
    var timeStr = hourStr + ":" + minutStr;
    

    return timeStr;

}

function getTommorowDateString()
{

    var currentDate = new Date();
    
    var month=currentDate.getMonth()+1;
    var day = currentDate.getDate()+1;
    
    var monthStr = "" ,dayStr="";

    if(month<10)
        monthStr = "0"+month;

        else
        monthStr = parseInt(month);
        
    if(day<10)
        dayStr = "0"+day;
        else
        dayStr = parseInt(day);

    var dateStr = currentDate.getFullYear()+"-"+monthStr+"-"+dayStr;
    

    return dateStr;

}


function checkIfTaskDateArrived()
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
        if( taskDateArrived( taskArr[i]) )
            announceTaskTimeArrived( taskArr[i] );
        
    }
  
}

function taskDateArrived( task )
{
    var today = new Date;
    var taskDate = new Date(task.executionDate);
    if(  taskDate <= today )
        alert("hi");
}


function announceTaskTimeArrived( task )
{

}

function loadInterval()
{
   // var checkDateInterval = setInterval( checkIfTaskDateArrived, 300000);
 //   var driveImgInterval = setInterval( driveImg, 500);
  //TODO להדליק אינטרואל רק אם יש משימות במערך. 
  //להוסיף בראשון ולכבות כשמוחקים את האחרון.
  //clearInterval() 

}

function Pause5Sec( duration)
{
    
    if(duration > 5.1)
        return;

    setTimeout(function()
    {
         Pause5Sec( duration + 1);

    }, 1000);
   
}

function sleep(miliseconds) 
{
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) 
   {
       
    }
}



    