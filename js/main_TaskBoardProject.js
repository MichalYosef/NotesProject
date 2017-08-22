

var tasks = [];


function load()
{
    
    addEventListeners();

    loadDefaultTimeDate();

    loadExistingTasks();

    loadInterval();
    
}



function deleteAll()
{
    localStorage.removeItem("taskArr");
    window.location.reload();
   
    playDeleteAudio();
}

/*
function todayDateInputValue() 
{
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
}
*/
function playDeleteAudio()
{
    // todo check if exist first
    var theAudio = document.createElement("AUDIO");
    theAudio.src = "../media/ninja_throwing_star_whoosh.mp3";
    theAudio.volume = 0.1;
    theAudio.play();
}