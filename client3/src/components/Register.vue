<template>
  <div>
    

    <div class="container">
      <div><h1>Wellcome to SOTELL 2021 </h1>
    </div>
      <div id="errorbox" style="color: red"></div><br>
      <form @submit.prevent="onSubmit">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="E-mail"
            class="form-control"
          />
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
            class="form-control"
          />
          <input
            type="text"
            v-model="firstName"
            placeholder="Fornavn"
            class="form-control"
          />
          <input
            type="text"
            v-model="lastName"
            placeholder="Efternavn"
            class="form-control"
          />
          <input
            type="number"
            v-model="age"
            placeholder="Alder"
            class="form-control"
          />
          <input
            type="text"
            v-model="gender"
            placeholder="Køn"
            class="form-control"
          />
          <input
            type="text"
            v-model="preferredGender"
            placeholder="Hvem foretrækker du"
            class="form-control"
          />
          <input
            type="text"
            v-model="hotel"
            placeholder="Hotel"
            class="form-control"
          />
          <input
            type="text"
            placeholder="Min age"
            class="form-control"
          />
          <input
            type="text"
            placeholder="Max age"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Register</button>
        <div>Allerede en bruger? <router-link to="/login">Login</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Register',
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      age: "",
      hotel: "",
      preferredGender: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://127.0.0.1:7071/api/register2/", {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          email: this.email,
          password: this.password,
          age: this.age,
          hotel: this.hotel,
          preferredGender: this.preferredGender
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du er blevet oprettet i vores database, klik OK!")
            this.$router.push({ path : '/login' });
          }
          
        })
        .catch((error) => {
          document.getElementById("errorbox").innerHTML = "Fejl."
          console.log(error);
        });
    },
  },
};
</script>

<style >
.container {
  padding: 250px;
  align-items: center;
}



</style>