<template>
  <div>
    <div class="container">
      <div id="errorbox" style="color: red"></div><br>
      <form @submit.prevent="specialDelete">
          <input
            type="userId"
            id="userId"
            v-model="userId"
            placeholder="UserId"
            class="form-control"
          />
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Email"
            class="form-control"
          />
          
          <button class="btn btn-primary btn-block btn-lg">Delete</button>
        <div>Delete en bruger <router-link to="/SpecialHomepage">TILBAGE TIL ADMIN HOMEPAGE</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'SpecialDelete',
  data() {
    return {
    userId: "",
    email: ""
      
    };
  },
  methods: {
    specialDelete() {
      axios
        .delete("http://localhost:7071/api/SpecialDeleteUser", {
          userId: this.userId,
          email: this.email,
          
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har nu slettet din bruger, klik OK!")
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