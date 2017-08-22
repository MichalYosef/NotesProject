var tasks = [];

function Refresh()
{
    var taskDescInput = document.getElementById("taskDescInput");
    taskDescInput.value ="";
    taskDescInput.focus();
    document.getElementById("executionDateInput").value = getTommorowDateString();
   
}

function showTask(task, taskCount)
{
    var newTaskArea = document.createElement("div");
    newTaskArea.className = "ShowTask w3-animate-opacity col-xs-12 col-sm-6 col-md-4 col-lg-2";
   /*
    xs (for phones)
    sm (for tablets)
    md (for desktops)
    lg (for larger desktops)
   */
  
    document.getElementById("tasksShowArea").appendChild(newTaskArea);

    addDeleteIcon( newTaskArea );
    addTextArea( newTaskArea, task.taskText );
    addDate( newTaskArea, task.executionDate );
    addTime( newTaskArea, task.executionTime);
   
    hoverToDelete( newTaskArea );

    newTaskArea.setAttribute("id", JSON.stringify(taskCount));

    

}

function addDeleteIcon( newTaskArea)
{
    var deleteIcon = document.createElement("span");
    deleteIcon.className ="glyphicon glyphicon-remove-circle deleteIconStyle w3-animate-opacity";
  
    deleteIcon.addEventListener("click", removeTask); 
    
    newTaskArea.appendChild(deleteIcon);
}

function addTextArea( newTaskArea, text )
{
    var taskDesc = document.createElement("div");
    taskDesc.className = "ShowTaskText";
    newTaskArea.appendChild(taskDesc);
     
    taskDesc.textContent = text;
}

function addDate( newTaskArea, executionDate )
{
    var taskDate = document.createElement("div");
    newTaskArea.appendChild(taskDate);
    taskDate.style.height = "10%";
    taskDate.textContent = executionDate;
    taskDate.style.fontSize = "14PX";

}

function addTime( newTaskArea, executionTime)
{
    var taskTime = document.createElement("div");
    newTaskArea.appendChild(taskTime);
    taskTime.style.height = "10%";
    taskTime.textContent = executionTime;
    taskTime.style.fontSize = "14PX";

}

function hoverToDelete( newTaskArea )
{
    newTaskArea.addEventListener("mouseover",function(){

        this.firstElementChild.style.display = "block";

    });

    newTaskArea.addEventListener("mouseout",function(){

        this.firstElementChild.style.display = "none";

    });

}
    
    



function emphasize( element )
{
    element.style.border = "thick solid red";
    
}

function cancelEmphasize( element )
{
    element.style.border = "none";
}

function pointAtTextInput()
{
    var inputElement = document.getElementById("taskDescInput");
    var inputRect = inputElement.getBoundingClientRect();

    var pointImg = document.createElement("img");
    pointImg.setAttribute("src", "../images/חץ-אדום-ימינה.jpg");
    pointImg.style.position = "fixed";
    pointImg.style.top = inputRect.top  ;
    pointImg.style.left = inputRect.left + 120;
  //  pointImg.style.display = "inline-block";
    document.getElementById("uperShow").insertBefore( pointImg, inputElement ) ;
    
    
    
}

function showErrorMsg( message )
{
    
   
    var errorMsg = document.createElement("div");
    document.getElementById("errorParent").appendChild(errorMsg);
    errorMsg.className += "alert alert-danger alert-dismissible w3-green w3-round fade in w3-animate-top";
    errorMsg.id = "inputError";
    errorMsg.style.width = "50%";
    
    errorMsg.style.marginTop = "2%";
    errorMsg.style.display = "inline-block"; 
  
    
    var closeLink = document.createElement("link");
    errorMsg.appendChild(closeLink);
  
    
    errorMsg.innerHTML = '<a href="#" class="close" data-dismiss="alert">&times;</a>'+message;
   
 
}

function hideErrorMsg()
{
    var errorMsg = document.getElementById("inputError");
    if(errorMsg)
        errorMsg.remove();
    

}


function fadeIn( element ) 
{
    element.style.webkitAnimation = "fadeIn";
    element.style.animation = "fadeIn";
    element.style.animationDuration = "2s";
    /*
    element.style.WebkitTransition = 'opacity 1s';
    element.style.MozTransition = 'opacity 1s';
    */
    /*
    newTaskArea.style.webkitAnimation = "fadeIn";
    newTaskArea.style.animation = "fadeIn";
    newTaskArea.style.animationDuration = "2s";
    */
    //element.style.opacity = 3;
    //element.style.transition = "opacity 10s";
}
/*
function fadeOut( element ) 
{
    var s = element.style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40000)})();
   // element.style.transition = "opacity 0s";
 //   element.style.opacity = 0;
}
*/

function fadeOut(elem, speed)
{

	if(!elem.style.opacity)
	{
		elem.style.opacity = 1;
	}
	setInterval(function(){elem.style.opacity -= 0.02;}, speed /50);
}


function driveImg()
{
    var theImg = document.getElementsByClassName("taskInputButtom");//movingImgDiv");
    theImg.offsetLeft += 5;
    alert(theImg.offsetLeft);
}