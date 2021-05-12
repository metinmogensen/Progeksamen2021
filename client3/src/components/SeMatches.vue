
<template>
  <div>
    

    <div class="container">
      <div><h1>Wellcome to SOTELL 2021:  </h1>
      <h2>Her kan du se dine matches </h2>
    </div>
      <div id="errorbox" style="color: red"></div><br>
      <form @submit.prevent="onSubmit">
          <table>
<thead>
                        <tr>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>MatchId</th>

                        </tr>
                      </thead>
                      <tbody>
                    
                        <td> Mikkel </td>
                        <td> Rolf </td>
                        <td> 7 </td>
                        <td></td>
                        <td></td>
                        
                      </tbody>
                </table>

          
          
         <br> <br> 
        <div>Ser du noget, du ikke kan lide? <router-link to="/DeleteMatch">Slet Match</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Register',
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      age: "",
      hotel: "",
      preferredGender: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://127.0.0.1:7071/api/register2/", {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          email: this.email,
          password: this.password,
          age: this.age,
          hotel: this.hotel,
          preferredGender: this.preferredGender
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du er blevet oprettet i vores database, klik OK!")
            this.$router.push({ path : '/login' });
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

<style >
.container {
  padding: 250px;
  align-items: center;
}



</style>

