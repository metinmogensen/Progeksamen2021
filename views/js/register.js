window.getRunningScript = () => {
    return () => {      
        return new Error().stack.match(/([^ \n])*([a-z]*:\/\/\/?)*?[a-z0-9\/\\]*\.js/ig)[0]
    }
}

console.log('%c Currently running script:', 'color: blue', getRunningScript()())

var form = document.getElementById("form")


form.addEventListener('submit', function(e) {
    e.preventDefault()

    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var gender = document.getElementById("gender").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var age = document.getElementById("age").value
    var hotel = document.getElementById("hotel").value
    var preferredGender = document.getElementById("preferredGender").value
    
/*
function onSubmit(){
    axios.post('localhost:3000/user' {​​​​​​​​
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
        password: password,
        age: age,
        hotel: hotel,
        preferredGender: preferredGender
      }​​​​​​​​)
      .then(function (response) {​​​​​​​​
        console.log(response);
      }​​​​​​​​)
      .catch(function (error) {​​​​​​​​
        console.log(error);
      }​​​​​​​​);
}
*/

    fetch("http://localhost:7071/api/register2", {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            gender: gender, 
            email: email,
            password: password,
            age: age,
            hotel: hotel,
            preferredGender: preferredGender
        }), 
        headers: {
            "Content-Type": "application/json; charset-UTF-8"
        }
    })
    .then((response) => {
        return response.json()//vores server bruger tekst -> så det burde være res.tekst
    })
    .then((data) => {
        console.log(data)
    }).catch((err) =>{ // catcher fejl, hvis noget går galt
        console.log("wuups: " + err)
    })
})


// var getButton = document.getElementById("getUsers")

// getButton.addEventListener("click", function(){
//     var name1 = document.getElementById("name").value
//     fetch(`http://localhost:7071/api/user?name=${name1}`)
//         .then(
//             function(response){
//                 if (response.status !== 200){
//                     console.log("Noget gik galt" + response.status);
//                     return;
//                 }

//                 response.json().then(function (data) {
//                     console.log(data);
//                 });
//             }
//         )
//         .catch(function (err){
//             console.log(err);
//         });
// })
document.location.port;