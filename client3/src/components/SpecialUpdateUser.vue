<template>
  <div>
    <div class="container">
      <div id="errorbox" style="color: red"></div><br>
      <form @submit.prevent="onSubmit">
        <h1>Her kan du opdatere emailen på en bruger af databasens? </h1>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="E-mail"
            class="form-control"
          />
          <input
            type="userId"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
        <div>Vil du alligevel ikke update? <router-link to="/SpecialHomepage">Tilbage til admin homepage</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'SpecialUpdateUser',
  data() {
    return {
      email: "",
      userId: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUser", { //API skal være updateUser?
          email: this.email,
          userId: this.userId
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
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