

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
        return response.json()
    })
    .then((data) => {
        console.log(data)
    }).catch((err) =>{ // catcher fejl, hvis noget går galt
        console.log("wuups: " + err)
    })
})