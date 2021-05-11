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
          
          <button class="btn btn-primary btn-block btn-lg">Delete</button>
        <div>Vil du alligevel ikke slette din profil? <router-link to="/login">Tilbage til forsiden</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'DeleteUser',
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .delete("http://localhost:7071/api/deleteUser", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har nu slettet din bruger, klik OK!")
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