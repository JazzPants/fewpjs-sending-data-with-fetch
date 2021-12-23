// Add your code here

// document.addEventListener("DOMContentLoaded", submitData)
//submitData(); 
// -> posts multiple times. Why?

//fetch(destinationURL, configurationObject);



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

let saveButton = document.getElementById("saveButton")
saveButton.addEventListener("click", submitData)
// saveButton.addEventListener("click", function(event) {
//   submitData();
//   event.preventDefault();
// },false)


function submitData() {
    let nameInput = document.getElementById("uname").value;
    let emailInput = document.getElementById("email").value;
    let formData = {
      name: nameInput,
      email: emailInput
  };

  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //data type we are sending
        "Accept": "application/json" //data type we accept in return
      },
      body: JSON.stringify(formData) //convert our request object to string
    };
    return fetch('http://localhost:3000/users', configObj)
    .then(response => {
      return response.json();
    })
    .then(object => {
      // console.log(object);
      // console.log(object.id);
      // const newList = document.createElement("ul");
      // const element = document.createElement("li");
      // element.innerHTML = object.id;
      // newList.appendChild(element)
      // console.log(newList)
      // document.body.appendChild(newList)
      document.body.innerHTML = object[ "id" ]
    })
    .catch(error => {
      alert("Bad things!");
      const errorMsg = document.createElement("p")
      errorMsg.innerHTML = error.message;
      document.body.appendChild(errorMsg);
    })
}



// Lab solution
// function submitData( name, email ) {
//   return fetch( 'http://localhost:3000/users', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify( {
//         name,
//         email
//       } )
//     } )
//     .then( function ( response ) {
//       return response.json()
//     } )
//     .then( function ( object ) {
//       document.body.innerHTML = object[ "id" ]
//       console.log(object["id"])
//     } )
//     .catch( function ( error ) {
//       document.body.innerHTML = error.message
//     } )
    
// }