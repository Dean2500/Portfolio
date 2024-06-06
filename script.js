/**
 * Swap the displayed content to the div
 * that matches the provided id
 * @param {*} id 
 */
function changeContent(id) {
     document.querySelectorAll('#main > div').forEach(function(element) {
        //check to see if the current element id matches the id 
        //that was requested to be displayed and makes it visible if it does
        if( id == element.id )
        {
            element.style.display = 'block';
        }

        //hide the field
        else
        {
            element.style.display = 'none';
        }
       
    });
    
 }

 

  