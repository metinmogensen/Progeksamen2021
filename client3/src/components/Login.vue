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
  // methods: {
  //   onSubmit() {
  //     axios
  //       .post("http://127.0.0.1:7071/api/login/", {
  //         email: this.email,
  //         password: this.password,
  //       })
  //       .then((response) => {
  //         if (response.data.accessToken){
  //           localStorage.setItem('user', JSON.stringify(response.data));
  //         }

<<<<<<< HEAD
  //         return response.data


  //         //redirect logic
  //         if (response.status == 200) {
  //           alert("Now login after u clicked OK!")
  //           this.$router.push({ path : '/profile' });
  //         }
=======
          //redirect logic
          if (response.status == 200) {
            localStorage.setItem("email", response.data);
            alert("Now login after u clicked OK!")
            this.$router.push({ path : '/profile' });
          }
>>>>>>> d7be103e2b085d594a1a5e34c0058b1d3f2df705
          
  //       })
  //       .catch((error) => {
  //         alert("Fejl forkert brugernavn eller password")
  //         console.log(error);
  //       });
  //   },
  // },
};




// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });


</script>


