<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" v-model="firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="lastName" v-validate="'required'" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" v-model="gender" v-validate="'required'" name="gender" class="form-control" :class="{ 'is-invalid': submitted && errors.has('gender') }" />
                <div v-if="submitted && errors.has('gender')" class="invalid-feedback">{{ errors.first('gender') }}</div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="email" v-validate="'required'" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="text" v-model="age" v-validate="'required'" name="age" class="form-control" :class="{ 'is-invalid': submitted && errors.has('age') }" />
                <div v-if="submitted && errors.has('age')" class="invalid-feedback">{{ errors.first('age') }}</div>
            </div>
            <div class="form-group">
                <label for="hotel">Hotel</label>
                <input type="text" v-model="hotel" v-validate="'required'" name="hotel" class="form-control" :class="{ 'is-invalid': submitted && errors.has('hotel') }" />
                <div v-if="submitted && errors.has('hotel')" class="invalid-feedback">{{ errors.first('hotel') }}</div>
            </div>
            <div class="form-group">
                <label for="preferredGender">Preferred gender</label>
                <input type="text" v-model="preferredGender" v-validate="'required'" name="preferredGender" class="form-control" :class="{ 'is-invalid': submitted && errors.has('preferredGender') }" />
                <div v-if="submitted && errors.has('preferredGender')" class="invalid-feedback">{{ errors.first('preferredGender') }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="status.registering">Register</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
                firstName: '',
                lastName: '',
                gender: '',
                email: '',
                password: '',
                age: '',
                hotel: '',
                preferredGender: ''
        }
    },
    methods: {
        
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        },

        onSubmit() {
            axios.post("http://localhost:7071/api/register2", {
                firstName: this.firstName,
                lastName: this.lastName,
                gender: this.gender,
                email: this.email,
                password: this.password,
                age: this.age,
                hotel: this.hotel,
                preferredGender: this.preferredGender
            })
        }
    }
};
</script>