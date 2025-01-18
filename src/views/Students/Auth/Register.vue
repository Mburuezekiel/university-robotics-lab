<template>
     


                  <div class="container">
        <div class="row mt-4">
            <div class="col-md-6">
    
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"> Robo Lend  Student Register</h5>
                <p class="card-text">This card is centered on the page with a background image.</p>

                <form @submit="Register">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input v-model="name" type="text" class="form-control" placeholder="Name">
                    </div>
                     <div class="form-group">
                            <label for="">Email</label>
                            <input v-model="email" type="email" class="form-control" placeholder="abc@fi.ki">
                        </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input v-model="password" type="password" class="form-control" placeholder="Password">
                    </div>

                    <div class="form-group mt-4">
                        <button type="submit" class="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </div>
    
    </div>
    </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import axios from 'axios'

export default {

    data() {

        return {
            name:'',
            email: '',
            password: '',
            loading: '',
            error: '',

        }

    },


    methods: {
        showToatWarning() {
            toast.warning('Wow warning!', {
                autoClose: 1000,
            });
        },

        async Register(event) {
            event.preventDefault();


            await axios.post('https://robo-rend-api.onrender.com/api/users/student/register', {name:this.name, email: this.email, password: this.password })
                .then((response) => {
                    const token = response.data.token;
                    console.log("this is token")
                    console.log(token)

                    localStorage.setItem('mod_token', token);

                    this.$router.push({ name: 'DashboardStudent' });

                    toast.success('Registration Successiful!', {
                        autoClose: 10000,
                    });


                })
                .catch((error) => {


                    toast.error(error.response.data.message, {
                        autoClose: 10000,
                    });

                });
        },

    },
};



</script>





