<template>
    <div>
        <h2>ADMIN LOGIN</h2>
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
          <input
            type="isAdmin"
            id="isAdmin"
            v-model="isAdmin"
            placeholder="Are u Admin?"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">ADMIN Login</button>
        </div>
        <div>Ikke admin? <router-link to="/">Register</router-link><br><router-link to="/Login">Login</router-link></div>
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
      password: "",
      isAdmin:""
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://127.0.0.1:7071/api/adminLogin/", {
          email: this.email,
          password: this.password,
          isAdmin: this.isAdmin,
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
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