

<template>
<section v-bind:class="isShake">
    <div>

        <h1>Tillykke!</h1>


        <p>Du er ankommet til Hoetell 2021. </p>


<p> ................................................................................................</p>

   
    
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
             <button class="btn btn-primary btn-block btn-lg">SWIPE LØØØS</button>
        </div>
        <div>Vil du opdatere din bruger?<router-link to="/updateUser">  Opdater  </router-link></div>

      </form>

        <h2>LogOut</h2>
        <form @submit.prevent="LogOut">
        
        <div class="form-group">
            <button class="btn btn-primary btn-block btn-lg">SWIPE LØØØS</button>
        </div>
        <div>Vil du logge ud? <router-link to="/login">Logout</router-link></div>

      </form>

      <h2>Delete User</h2>
        <form @submit.prevent="Delete">
        
        <div class="form-group">
          <button @submit.prevent="deleteUser()">delete user</button>
        </div>
        <div>Vil du delete din user? <router-link to="/deleteUser">Delete</router-link></div>

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

<style >
html, body{
	width:100%;
	height:100%;
	margin:0px;
	font-family: 'Work Sans', sans-serif;
}

body{
		background-image:url('https://images-assets.nasa.gov/image/6900952/6900952~orig.jpg');
		display: flex;
		flex-direction:column;
		justify-content:center;
    align-items:center;
    
}

section{
	background-color: rgba(0, 0, 0, 0.72);
	width:100%;
	min-height:5%;
	display:flex;
	flex-direction:column;
	/*margin-left:auto;
	margin-right:auto;*/
  
}
form{
	display:flex;
	flex-direction:column;
	padding: 15px; 
  text-align: center;
}
h2{
	font-family: 'Archivo Black', sans-serif;
	color:#e0dada;
	margin-left:auto;
	margin-right:auto;
  text-align: center;
}

.info{
	width:100%;
	text-align:center;
	min-height:45px;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

.info.error{
	border:1px solid #416d50;
	background-color: #ff3c41;
	color:#e0dada;
}
.info p{
	margin:auto;
	padding:5px;
}
.info.good{
	border:1px solid #416d50;
	background-color: #47cf73;
	color:#416d50;
}

input{
	height:35px;
	padding: 5px 5px;
	margin: 10px 0px;
	background-color:#e0dada;
	border:none;
}
button{
	height:40px;
	padding: 5px 5px;
	margin: 10px 0px;
	font-weight:bold;
	background-color:#be5256;
	border:none;
	color:#e0dada;
	cursor:pointer;
	font-size:16px;
}
button:hover{
	background-color:#711f1b;
}

@-webkit-keyframes shake{
	from, to{
		-webkit-transform: translate3d(0, 0, 0);
		transform:translate3d(0,0,0);
	}
	10%,30%,50%,70%,90%{
		-webkit-transform: translate3d(-10px, 0, 0);
		transform:translate3d(-10px,0,0);
	}
	20%,40%,60%,80%{
		-webkit-transform: translate3d(10px, 0, 0);
		transform:translate(10px,0,0);
	}
}

.shake{
	animation-name: shake;
	animation-duration:1s;
	/*animation-fill-mode: both;*/
}

@media screen and (max-width: 780px) {
	section{
		width:90%;
	}
}
h1{
	font-family: 'Archivo Black', sans-serif;
	color:#b18d8d;
	margin-left:auto;
	margin-right:auto;
  text-align: center;
}
h3{
	font-family: 'Archivo Black', sans-serif;
	color:#e0dada;
	margin-left:auto;
	margin-right:auto;
  text-align: center;
}
p{
	font-family: 'Archivo Black', sans-serif;
	color:#e0dada;
	margin-left:auto;
	margin-right:auto;
  text-align: center;
}

</style>