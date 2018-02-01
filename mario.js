printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    for(var i = 0; i < height; i++)
    {
        var line = "";
        for(var j = 0; j < height + 2; j++)
        {
            if(j >= height - i)
            {
                line += "#";
            }
            else
            {
                line += " ";
            }
        }
        console.log(line);
    }
}
    
   /* for(var i=0; i<height; i++){
        var row = '##'
        for(var j=0; j<i; j++){
            row +='#'
        } 
            console.log(row.padStart(height+1, ''))
    }
}*/
        /* how to pad a string with another string to a certain length.

String.prototype.padStart()
The padStart() method pads a string with another string to a certain length from the start of the string and returns a resulting string
that reaches the certain length.

The following illustrates the padStart() method:

String.prototype.padStart(padLength [,padString]);
 
The padStart() method takes two parameters:

The padLength is the length of the resulting string once it is padded. If the padLength is less than the string’s length, the string is returned
as is without padding.
The padString is an optional argument which is used to pad the string. The default value for this parameter is ‘ ‘. If the padString is greater
than padLength, the padString will be truncated and only the left-most part will be padded.
*/
    