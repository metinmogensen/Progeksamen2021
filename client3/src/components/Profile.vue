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
     </div>

</template>

<script>

export default {
  name: 'Home',

  async created() {

    if(!localStorage.getItem("email")) {
      this.$router.push({ path : '/login' });
    }
    //const response = await axios.get('user', {

      // headers: {
      //  Authorization: 'Bearer' + localStorage.getItem('token') 
      // }
    //});



  }

}

</script>

