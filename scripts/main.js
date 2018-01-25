// NO ARROW FUNCTIONS METHOD

function getText(){
  fetch('sample.txt')                                     // ~~~~~  fetch and then the file you want to fetch. Can be a local file, json, or 
  .then(function(res){                                    // ~~~~~ .then is what you do after, passing in the response. Must pass in response
  console.log(res.text);                                  // ~~~~~ .consolelog the res lets you seee the status // ~~~~~ .res.text(); will give the response of the promise with the text + the status // ~~~~~ Needs specificity of the file type. ie: if the file is a json then you'd have res.json
  return res.text();                                      // ~~~~~  need to return the res.text to actually use the data in the following .then
})

  .then(function(data){                                   // ~~~~~  pass in the data that is returned 2nd then function
  console.log(data);                                      // ~~~~~  just shows the data without the status msg
});
}

// WITH ARROW FUNCTIONS METHOD      // If you want to do more than one thing with the data you have to make a curly brace code block


 
                           // End of getText2 function



window.onload = function() {
    fetch('https://tor020.github.io') 
  .then((res) => res.text())
  .then((data) => { 
    console.log(data);             

    });     
}


