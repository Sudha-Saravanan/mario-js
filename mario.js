
drawPyramid(5);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += " "; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // you can delete this now
        console.log(rowStr)

        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">

        /* //create a <p> element
        rowElem = document.createElement("p");

        //set rowStr to be the inner text of the <p>
        rowElem.innerHTML = rowStr;

        // insert the paragraph as a child of the <div>
        container.appendChild(rowElem);*/
        var pyramidDiv  = document.getElementById("pyramid");
        var pyramidPara = document.createElement("p")
        var pyramidRow = document.createTextNode(rowStr);

        pyramidDiv.appendChild(pyramidPara).appendChild(pyramidRow);
    }
}