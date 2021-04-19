function buttonClick() {
    //Klickar på knappen med id logo
    var clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

        var selectElement = document.getElementById('Dataset')
        var options = selectElement.options;
        for (var i = 0;i < options.length; i++) {
                selectElement.selectedIndex = i;
                selectElement.options.dispatchEvent(clickEvent);
                document.getElementById("Dataset").dispatchEvent(clickEvent)

                var selectElement2 = document.getElementById('Dataset')
                var options2 = selectElement.options;
                console.log(selectElement.options)
                for (var x = 0;x < options2.length; x++) {
                    document.getElementById("hamtaData").dispatchEvent(clickEvent);
                    
                    var selectElement3 = document.getElementById('LandYear')
                    var options3 = selectElement.options;
                    for (var y = 0;y < options3.length; y++) {
                        selectElement3.selectedIndex = i;
                        console.log(selectElement3.options)
                        document.getElementById("LandYear").dispatchEvent(clickEvent)
                        document.getElementById("renderHeatMap").dispatchEvent(clickEvent);
                    
                
                    }
                
                }
                
        }
    /*
    selectTags2 = document.getElementById("hamtaData").options;
    for(var x = 0; x < selectTags.length; x++) {
        document.getElementById("hamtaData").dispatchEvent(clickEvent);
        
        selectTags3 = document.getElementById("LandYear").options;
        for(var y = 0; y < selectTags3.length; y++) {
        selectTags3[y].selectedIndex = 0;
        document.getElementById("LandYear").dispatchEvent(clickEvent);
        console.log(selectTags3)
        document.getElementById("renderHeatMap").dispatchEvent(clickEvent);
        
        } 
    } 
} 
    */
    
    console.log("tryckt knapp")
    //localStorage.setItem('Counter', counter);
}