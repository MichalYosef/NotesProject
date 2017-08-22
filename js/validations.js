
/* TODO: add error handling to all the functions!
JavaScript Error Reference - w3schools

try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = 
    err.name + "<br>" + err.message;
}

*/

function validateTaskDescInput()
{
      var taskDescInput = document.getElementById("taskDescInput");
      var txtInput = taskDescInput.value;
    
      if ( txtInput == "") 
      {
          showErrorMsg("Please insert task details !");
          taskDescInput.focus();
       //   pointAtTextInput();
          emphasize( taskDescInput );
          //TODO beep sound!
          return false;
      }
      else
      {
          // Verify XSS !!!
          if(! isInjected(txtInput) )
          {
                showErrorMsg("Text can not include these chars: < >");
                taskDescInput.focus();
                //   pointAtTextInput();
                emphasize( taskDescInput );
                return false;
          }   
      }

      hideErrorMsg();
      cancelEmphasize( taskDescInput );
      return true;

      
}


function isInjected( txtInput )
{
    if(( txtInput.search(/<$/gm) != -1 ) || ( txtInput.search(/>$/gm) != -1 ))
        return false;
    else
        return true;
}



function validateExecutionDate()
{
    var executionDate = document.getElementById("executionDateInput");
    var dateStr = executionDate.value;
    
    if(dateStr == "")
    {
        showErrorMsg("please Insert a <strong>date</strong> ");
        emphasize( executionDate );
        return false;
    }

   // regular expression to match required date format
  //  var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
 /* var regExpDate = /^\d{2}[/]\d{2}[/]\d{2}$/;

    if( dateStr.match(regExpDate) === null) {
      alert("Invalid date format: " + dateStr);
      //form.startdate.focus();
      return false;
    }*/
   /*   
    var test = new RegExp("test");
    var isTrue = test.test("my test");
*/
/*
    var dateValidPattern = new RegExp("^20[1-9][-/.](0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])$");
    var isDate = dateValidPattern.test(dateStr);
    var tmp = dateValidPattern.toString();
    if( ! isDate )
     {
        showErrorMsg("please Insert a <strong> valid date</strong> for task execution!");
        emphasize( executionDate );
        return false;
    }

*/
    var now = new Date();
    var selectedDate = new Date(dateStr);

    
    
    if (selectedDate < now)
    {
        showErrorMsg("Task Execution date can not be in the past");
         emphasize( executionDate );
        return false;
    }

    
    hideErrorMsg();
    cancelEmphasize( executionDate );
    return true;

}



function validateExecutionTime()
{
    var executionTime = document.getElementById("executionTime").value;

}

