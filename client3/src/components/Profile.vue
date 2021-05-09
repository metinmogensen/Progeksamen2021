

<template>
    <div>
        <h1>Tillykke!</h1>
        <p>Du er ankommet til Hoetell 2021. </p>
        <h3>Her kan du bolle med alle andre end din dame :')</h3>
       
   
    

        <h2>SWIPE LØØØS</h2>
        <form @submit.prevent="onSubmit">
        
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">SWIPE LØØØS</button>
        </div>
        <div>Vil du swipe løøøs? <router-link to="/swipe">Swipe</router-link></div>

      </form>

        <h2>UPDATE</h2>
        <form @submit.prevent="onSubmit">
        
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">VIL DU UPDATE?</button>
        </div>
        <div>VIL DU UPDATE?<router-link to="/updateUser">Update</router-link></div>

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
<<<<<<< HEAD
=======

>>>>>>> 9d374c989cf1284fd2a6bb7d56bd0cc8f0f5505a
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
<<<<<<< HEAD
//   }
// };
=======

//   }
// };

//   };

>>>>>>> 9d374c989cf1284fd2a6bb7d56bd0cc8f0f5505a

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