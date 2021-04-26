var form = document.getElementById("form")


form.addEventListener('submit', function(e) {
    e.preventDefault()

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value


    fetch("http://localhost:7071/api/login", {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
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