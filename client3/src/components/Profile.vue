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
     </div>

</template>

