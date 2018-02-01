
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // TODO 3
    var heightElem = document.getElementById("height");
    var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.onsubmit = function(event) {

    // QUIZ
    // what happens if we don't do this?
    event.preventDefault();

    // QUIZ
    // what happens if we don't do this?
    clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;

    // if they didn't type anything at all, give a different error message,
    // something like "Please provide a height"
    if(heightStr == "")
    {
        displayError("You didn't type anything. Please enter a height.");
        return;
    }
    // figure out the height the user typed (replace the "5" below)
    heightStr = "5";

    // here we convert the string to an int
    height = parseInt(heightStr);

    // if the height is not-a-number, yell at them and exit early
    // negative numbers and zero will also be rejected here
    if (isNaN(height) || height < 1) {
        displayError("That's not a valid height.");
        return;
    }

    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }


    // TODO 2
   
    // draw the pyramid with the given height
    drawPyramid(height);
    
}

/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}



/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError(message) {
    heightElem.className = "";
    document.querySelector(".error-message").innerHTML = "";
}



// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
button = document.getElementById("draw-button");
button.onclick = function() {

// figure out the height the user typed
heightStr = document.getElementById("height").value

// convert the string to an int
height = parseInt(heightStr);
}

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // TODO 4
     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        //rowElem.appendChild(textElem);
        rowElem.innerHTML = rowStr;
        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
}
