
<template>
  <div>
    <div class="container">
      <div id="errorbox" style="color: red"></div><br>
      <form @submit.prevent="deleteMatch">
          <input
            type="matchId"
            id="matchId"
            v-model="matchId"
            placeholder="matchId"
            class="form-control"
          />
          
          
          <button class="btn btn-primary btn-block btn-lg">Delete</button>
        <div>Vil du alligevel ikke slette et match? <router-link to="/profile">Tilbage til forsiden</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'DeleteMatch',
  data() {
    return {
      matchId: "",
    };
  },
  methods: {
    deleteMatch() {
      axios
        .delete("http://localhost:7071/api/deleteMatch", {
          matchId: this.matchId,
         
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har nu slettet dit match, klik OK!")
            this.$router.push({ path : '/profile' });
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

<!-- <template>
  <div>
    <div class="container">
      <div id="errorbox" style="color: red"></div><br>

        <form @submit.prevent="onSubmit">

      
      
          <input
            type="matchId"
            id="matchId"
            v-model="matchId"
            placeholder="matchId"
            class="form-control"
          />
    
         

          <button class="btn btn-primary btn-block btn-lg">Delete Match</button>
        <div>Vil du alligevel ikke slette et match alligevel? <router-link to="/profile">Tilbage til forsiden</router-link></div>

        <div>Uha, kan du ikke lige huske matchID'et? Tryk her og se dine matches: <router-link to="/SeMatches">Se matches</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'DeleteMatch',
  data() {
    return {
      matchId: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .delete("http://localhost:7071/api/deleteMatch", {
          matchId: this.matchId,
          
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har nu slettet dit match, klik OK!")
            this.$router.push({ path : '/profile' });
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

-->