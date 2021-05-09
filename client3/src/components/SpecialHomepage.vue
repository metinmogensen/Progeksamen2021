<template>
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

        <div>VIL DU OPDATERE EN BRUGERS EMAIL?<router-link to="/SpecialUpdateUser"> OPDATER HER</router-link></div>
        
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
          <button @submit.prevent="deleteUser()">Logout</button>
        </div>
        <div>Vil du delete din user? <router-link to="/deleteUser">Delete</router-link></div>

      </form>

     </div>
    

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

  async created() {

    const response = await axios.post('http://127.0.0.1:7071/api/Iprotect/', {

      headers: {
       Authorization: 'Bearer' + localStorage.getItem('token') 
      }
    })
    if(!response)
      this.$router.push({ path : '/login' });
    }
    
    };


</script>