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


<template>
<section v-bind:class="isShake">
    <div>

        <h1>Tillykke!</h1>


        <p>Du er ankommet til SOTELL 2021 </p>


<p></p>

   
    
<div></div>
         <div class="h2">
        <h2>Er du alligevel ikke frisk på at mødes? Nu har det aldrig været nemmere at slette sine matches.</h2>
        </div>
        <form @submit.prevent="onSubmit">
        
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg" ><router-link to="/DeleteMatch">Gå til slet matches</router-link> </button>
        </div>
      

      </form>
    

     </div>
    
</section>
</template>

<script>