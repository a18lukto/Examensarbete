//-----------------------------------------------
//----------------Time saver---------------------
var startTime = new Date().getTime();
var counter = parseInt(localStorage.getItem("TimerCounter", 0));
function startMessure() {
    for (i =0; i < 10; i++)   {
        localStorage.setItem("Loaded page", 0 + " \n");
        var endTime = new Date().getTime();
        var theTime = endTime - startTime;
        endTime = localStorage.setItem("Time", JSON.stringify(theTime)); 
        counter++;
        buttonClick();
        localStorage.getItem(startTime);
        var delta = localStorage.getItem("Loaded page");
        var measureDiff = theTime;
        console.log(theTime)
        delta += measureDiff + "\n";
        localStorage.setItem("Loaded page", delta);
    }
}
//-----------------------------------------------
//----------------Clicker------------------------

 function buttonClick() {
    selectedYear = 1968
    var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });            
                                //  
                document.getElementById("Dataset")[1].dispatchEvent(clickEvent) 
                document.getElementById("hamtaData").dispatchEvent(clickEvent)
                for(var x = 0;x < 52; x++){ 
                    let donePageLoading = document.readyState;
                    document.getElementById("LandYear")[x].dispatchEvent(clickEvent)
                        console.log(document.getElementById("LandYear")[x])             
                        document.getElementById("renderMap").dispatchEvent(clickEvent)
                        selectedYear++
                        console.log(selectedYear)
                        console.log(document.getElementById("renderMap").dispatchEvent(clickEvent))
                        console.log("sucessfull timeout")
                        
                      }
}