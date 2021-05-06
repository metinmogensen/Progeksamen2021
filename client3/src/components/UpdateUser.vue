<template>
  <div>
    <div class="container">
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
          <button class="btn btn-primary btn-block btn-lg">Update</button>
        <div>Vil du alligevel ikke update? <router-link to="/Profile">Go back to profile</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'UpdateUser',
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
        .put("http://localhost:7071/api/updateUser", { //API skal være updateUser?
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
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/profile' });
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