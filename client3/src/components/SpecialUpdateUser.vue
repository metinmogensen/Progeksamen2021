<template>
  <div>
    <div class="container">
      <div id="errorbox" style="color: red"></div><br>
      <form @submit.prevent="updateEmail">
        <h1>Opdater emailen på en bruger: </h1>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="E-mail"
            class="form-control"
          />
          <input
            type="int"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
        <div>Vil du alligevel ikke update? <router-link to="/SpecialHomepage">Tilbage til admin homepage</router-link></div>
      </form>
       <form @submit.prevent="updatePassword">
        <h1>Opdater passwordet på en bruger: </h1>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
            class="form-control"
          />
          <input
            type="int"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
      </form>
       <form @submit.prevent="updateFirstName">
        <h1>Opdater firstName på en bruger: </h1>
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            placeholder="FirstName"
            class="form-control"
          />
          <input
            type="int"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
      </form>
      <form @submit.prevent="updateLastName">
        <h1>Opdater LastName på en bruger: </h1>
          <input
            type="text"
            id="LastName"
            v-model="LastName"
            placeholder="LastName"
            class="form-control"
          />
          <input
            type="int"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
      </form>
      <form @submit.prevent="updateHotel">
        <h1>Opdater hvilket hotel en bruger befinder sig på: </h1>
          <input
            type="text"
            id="hotel"
            v-model="hotel"
            placeholder="Hotel"
            class="form-control"
          />
          <input
            type="text"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
      </form>
      <form @submit.prevent="updateHotel">
        <h1>Opdater en brugers alder: </h1>
          <input
            type="int"
            id="age"
            v-model="age"
            placeholder="Age"
            class="form-control"
          />
          <input
            type="int"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
      </form>
      <form @submit.prevent="updateHotel">
        <h1>Opdater en brugers preferred Gender: </h1>
          <input
            type="text"
            id="preferredGender"
            v-model="preferredGender"
            placeholder="Preferred Gender"
            class="form-control"
          />
          <input
            type="int"
            id="userId"
            v-model="userId"
            placeholder="userId"
            class="form-control"
          />
          <button class="btn btn-primary btn-block btn-lg">Update</button>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

// Update Email
export default {
  name: 'SpecialUpdateUserEmail',
  data() {
    return {
      email: "",
      userId: "",
      password:"",
      firstName:"",
      lastName:"",
      hotel:"",
      preferredGender:"",
      age:"",
    };
  },
  methods: {
    updateEmail() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUserEmail", { //API skal være updateUser?
          email: this.email,
          userId: this.userId,

        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
          }
          
        })
        .catch((error) => {
          document.getElementById("errorbox").innerHTML = "Fejl."
          console.log(error);
        });
    },
    updatePassword() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUserPassword", { //API skal være updateUser?
          password: this.password,
          userId: this.userId
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
          }
          
        })
        .catch((error) => {
          document.getElementById("errorbox").innerHTML = "Fejl."
          console.log(error);
        });
    },
    updateFirstName() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUserFirstName", { //API skal være updateUser?
          firstName: this.firstName,
          userId: this.userId
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
          }
          
        })
        .catch((error) => {
          document.getElementById("errorbox").innerHTML = "Fejl."
          console.log(error);
        });
    },
    updateLastName() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUserLastName", { //API skal være updateUser?
          lastName: this.lastName,
          userId: this.userId
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
          }
          
        })
        .catch((error) => {
          document.getElementById("errorbox").innerHTML = "Fejl."
          console.log(error);
        });
    },
      updateHotel() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUserHotel", { //API skal være updateUser?
          hotel: this.hotel,
          userId: this.userId
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
          }
          
        })
        .catch((error) => {
          document.getElementById("errorbox").innerHTML = "Fejl."
          console.log(error);
        });
    },
       updateAge() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUserAge", { //API skal være updateUser?
          age: this.age,
          userId: this.userId
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
          }
          
        })
        .catch((error) => {
          document.getElementById("errorbox").innerHTML = "Fejl."
          console.log(error);
        });
    },
    updatePreferredGender() {
      axios
        .put("http://localhost:7071/api/SpecialUpdateUserPreferredGender", { //API skal være updateUser?
          preferredGender: this.preferredGender,
          userId: this.userId
        })
        .then((response) => {

          //redirect logic
          if (response.status == 200) {
            alert("Du har opdateret dine oplysninger!")
            this.$router.push({ path : '/SpecialHomepage' });
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