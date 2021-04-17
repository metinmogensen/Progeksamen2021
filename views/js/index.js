var form = document.getElementById("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var gender = document.getElementById("gender").value
    var country = document.getElementById("country").value
    var birthdate = document.getElementById("birthdate").value

    fetch("http://localhost:7071/api/HttpTrigger1")
})