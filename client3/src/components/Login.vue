<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="E-mail"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">Login</button>
        </div>
        <div>Ingen bruger? <router-link to="/">Register</router-link></div>
        <div>Login som admin? <router-link to="/adminLogin">ADMIN</router-link></div>
      </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login', 
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://127.0.0.1:7071/api/login/", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            localStorage.setItem("email", response.payload);
            alert("Now login after u clicked OK!")
            this.$router.push({ path : '/profile' });
          }
          
        })
        .catch((error) => {
          alert("Fejl forkert brugernavn eller password")
          console.log(error);
        });
    },
  },
};


</script>


