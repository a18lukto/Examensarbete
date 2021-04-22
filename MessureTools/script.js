//-----------------------------------------------
//----------------Time saver---------------------
var startTime = new Date().getTime();
var counter = parseInt(localStorage.getItem("TimerCounter", 0));
function startUp() {
     /* Om det är första gången det startas sätts start värdet till 0 och med,
     ett ',' efter för tydlighet. */
    if (localStorage.getItem("Loaded page") == null) {
        localStorage.setItem("Loaded page", 0 + " \n");
    }
    // Om countern är null sätts den till 0. 
    if (localStorage.getItem("TimerCounter") == null) {
        localStorage.setItem("TimerCounter", 0) + " \n";
    }
    // Ser till att den itereras endast 5 gånger.
    for (i =0; i < 500; i++)   {
        //delta = 0;
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
    //selectedDataset = "folktathet"
    //Klickar på knappen med id logo
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
                        console.log(document.getElementById("LandYear")[x])             // Click hamtaData button
                        document.getElementById("renderMap").dispatchEvent(clickEvent)
                        selectedYear++
                        console.log(selectedYear)
                        console.log(document.getElementById("renderMap").dispatchEvent(clickEvent))
                        console.log("sucessfull timeout")
                        
                      }
}