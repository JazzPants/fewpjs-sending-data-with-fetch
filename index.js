// Add your code here

// document.addEventListener("DOMContentLoaded", submitData)
//submitData(); 
// -> posts multiple times. Why?

//fetch(destinationURL, configurationObject);



let formData = {
    name: "Steve",
    email: "steve@steve.com"
};

let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //data type we are sending
      "Accept": "application/json" //data type we accept in return
    },
    body: JSON.stringify(formData) //convert our request object to string
  };

//   fetch("http://localhost:3000/dogs", configObj)

//     .then(function(response) {
//     return response.json(); //convert body of JSON response to JS object
//   })

//     .then(function(object) { //object is passed to this function
//     console.log(object); //log the result
//     })
//     .catch(function(error){ //e.g. if you forget to set a method
//       alert("Bad things!"); 
//       console.log(error.message);
//   });

function submitData() {
    return fetch('http://localhost:3000/users', configObj)
    .then(response => {
      return response.json();
    })
    .then(object => {
      console.log(object);
      console.log(object.id);
      const newList = document.createElement("ul");
      const element = document.createElement("li");
      element.innerHTML = object.id;
      newList.appendChild(element)
      console.log(newList)
      document.body.appendChild(newList)
    })
    .catch(error => {
      alert("Bad things!");
      const errorMsg = document.createElement("p")
      errorMsg.innerHTML = error.message;
      document.body.appendChild(errorMsg);
    })
}

