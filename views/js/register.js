var form = document.getElementById("form")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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



    axios.post('localhost:7071/api/register2', {​​​​​​​​
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
})



//     fetch("http://localhost:7071/api/register2", {
//         method: 'POST',
//         body: JSON.stringify({
//             firstName: firstName,
//             lastName: lastName,
//             gender: gender, 
//             email: email,
//             password: password,
//             age: age,
//             hotel: hotel,
//             preferredGender: preferredGender
//         }), 
//         headers: {
//             "Content-Type": "application/json; charset-UTF-8"
//         }
//     })
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     }).catch((err) =>{ // catcher fejl, hvis noget går galt
//         console.log(err)
//     })
// })


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