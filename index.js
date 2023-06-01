// Add your code here

//fetch(destinationURL, configurationObject);
// const formData = {
//     dogName: "Byron",
//     dogBreeed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },

//     body: JSON.stringify(formData),
//     };

//     fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!")
//         console.log(error.message);
//     });


function submitData(userName,userEmail) {
    //event.preventDefault(); 
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
               
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
      const getId = object.id
      document.body.append(getId);
    
      //console.log(getId);
    })

    .catch(function(error) {
        document.body.append(error);
        
    })
    // wants the id number, and appends it to the DOM
    // takes the post made in submitData, and returns it as an object

    
}

// preventDefault

function patchData(name,email) {
    fetch("http://localhost:3000/users/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify({
            userName: name,
            userEmail: email,
        }),
    });
}

function putData(name,email) {
    fetch("http://localhost:3000/users", {
        method: "PUT",
        headers: { // info about our request
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify({ //.stringify converts data into json
            userName: name,
            userEmail: email,
        }),
    });
}

function deleteData() {
    fetch("http://localhost:3000/users", { // this is an object
        method: "DELETE", // type of operation
     
    });
}

deleteData("userName","userEmail");
//


