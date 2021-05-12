<template>
    <div>
        <h1>Like personen</h1>
        <form @submit.prevent="onSubmit"> 
        
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">SWIPE LØØØS</button>
        </div>
        <div>Ingen bruger? <router-link to="/">Register</router-link></div>
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
        .get("http://localhost:7071/api/Swipe", { // HER SKAL VI JO SÅ GETTE ALLE BRUGERNE FRA "BRUGER DATABASEN"
          email: this.email,
          password: this.password,
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

