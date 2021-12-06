//Dont display the pop up initially, only when something is done
let popUpDivJs = document.getElementById("popUp");
popUp.style.display = 'none';

//Create the click Me button
let ClickMeButtonJs = document.getElementById("clickMeButton");

//Add an event listner so when the Click Me button is clicked, the pop up shows up
ClickMeButtonJs.addEventListener("click", function(){
    popUpDivJs.style.display = 'inline';
    console.log("Click Me Button Clicked");
});

//Create the Yes Button 
let yesButtomJs = document.getElementById("yesButton");

//when the yes button is clicked, stop displaying the pop up
yesButtomJs.addEventListener("click", function(){
    popUpDivJs.style.display = 'none';
    //display your action when the yes button is clicked
    let yesClicked = document.createElement("P");
    yesClicked.innerHTML = 'You just clicked Yes'
    document.body.appendChild(yesClicked);
    //log your action
    console.log("Close Button Clicked");
});

//Create the Cancel Button 
let cancelButtomJs = document.getElementById("cancelButton");

//when the cancel button is clicked, stop displaying the pop up
cancelButtomJs.addEventListener("click", function(){
    popUpDivJs.style.display = 'none';
    //display your action when the cancel button is clicked
    let cancelClicked = document.createElement("P");
    cancelClicked.innerHTML = 'You just clicked Cancel'
    document.body.appendChild(cancelClicked);
    //log your action
    console.log("Cancel Button Clicked");
});

