

<template>
    <div>
      <div class="h1">
        <h1>Tillykke!</h1>
      </div>
      <div class="p">
        <p>Du er ankommet til Hoetell 2021. </p>
      </div>
      <div class="h3">
        <h3>Her kan du bolle med alle andre end din dame :')</h3>
       </div>
   
    
<div></div>
        <div class="h2">
        <h2>SWIPE LØØØS</h2>
        </div>
        <form @submit.prevent="onSubmit">
        
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">SWIPE LØØØS</button>
        </div>
        <div class="swipe">Vil du swipe løøøs? <router-link to="/swipe">Swipe</router-link></div>

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

<style >
.h1 {
  padding-left: 400px;
  align-items: center;
  background-color: rgb(0, 255, 0);
}

.p{
padding-left: 367px;
align-items: center;
}

.h3{
padding-left: 280px;
align-items: center;
}

.h2{
padding-left: 367px;
align-items: center;
}


</style>