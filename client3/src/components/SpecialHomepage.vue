<template>
<section>
    <div>
        <h1>ADMIN HOMEPAGE</h1>
        <p></p>
        <h3>  </h3>
       
   
    

        <h2>Se brugerliste </h2>
        <form @submit.prevent="onSubmit">
        
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">SWIPE LØØØS</button>
        </div>
        <div>Se brugere af systemet <router-link to="/swipe">Brugere</router-link></div>

      </form>

        <h2>UPDATER SYSTEMETS BRUGERE</h2>
        <form @submit.prevent="onSubmit">
        
        <div class="form-group">
        </div>
        <form>

        <div>VIL DU OPDATERE EN BRUGER?<router-link to="/SpecialUpdateUser"> OPDATER HER</router-link></div>
        
        </form>
      </form>

        <h2>LogOut</h2>
        <form @submit.prevent="LogOut">
        
        <div class="form-group">
          <button @submit.prevent="logOut()">Logout</button>
        </div>
        <div>Vil du logge ud? <router-link to="/login">Logout</router-link></div>

      </form>

      <h2>Delete User</h2>
        <form @submit.prevent="Delete">
        
        <div class="form-group">
        </div>
        <div>Vil du slette en bruger i systemet? <router-link to="/SpecialDeleteUser">SLET HER</router-link></div>

      </form>

     </div>
    
</section>
</template>

<script>





// import { response } from 'express';



// export default {
//   name: 'Logout', 
//   data() {
//     return {
//       email: ""
//     };
//   },
//   methods: {
//     logOut() {
//       axios.post("http://127.0.0.1:7071/api/login/"), {
//         email: this.email,
//       })
//       .then ((response)) => {
        
//       return new Promise((resolve, reject) => {
//         localStorage.removeItem("email");
//       });
//     }
//   }
// };

// new Vue({
// el: '#app',
// data: { 
//     myLocalData: localStorage.getItem('email')
//   },
  
//    methods:{
//      logOut: function () {	
// 		 localStorage.removeItem('email');
//      this.myLocalData = localStorage.getItem('email');
       
//     }
//    }

// });

import axios from 'axios';
export default {
  
  name: 'Home',

   created() {
    let token = localStorage.getItem('token')
       axios
        .post("http://127.0.0.1:7071/api/Iprotect/", {
        token: token
        })
        .then((response) => {
          console.log(response);
          
        })
        .catch((error) => {
                      alert("login again")
          this.$router.push({ path : '/login' });
          console.log(error);
        });
    
    }
}
</script>