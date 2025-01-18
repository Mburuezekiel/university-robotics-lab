<template>
     
   <div class="container mt-4">
    <div class="row mt-4">
        <div class="col-md-6">
             <div class="card">
            <div class="card-body">
                <h5 class="card-title"> Robo Lend Student Login</h5>
                <p class="card-text">This card is centered on the page with a background image.</p>

                <form @submit="login">
                    <div class="form-group mt-2">
                        <label for="">Email</label>
                        <input v-model="email" type="email" class="form-control mt-2" placeholder="username">
                    </div>
                    <div class="form-group mt-2">
                        <label for="">Password</label>
                        <input v-model="password" type="password" class="form-control mt-2" placeholder="Password">
                    </div>
                    <div class="form-group mt-2">
                        <p>Dont Have an account?<span> 
                            <router-link
                            :to="{ name: 'StudentRegister' }"
                            >
                            Create Account
                        </router-link>
                        </span></p>
                    </div>

                    <div class="form-group mt-4">
                        <button type="submit" class="btn btn-success">Login</button>
                    </div>

                </form>
            </div>
        </div>
        </div>
         <div class="col-md-6">

                    <!-- img -->

                    <img src="https://otomatiks.com/wp-content/uploads/2023/08/Robotics-lab-img.jpg" class="" alt="hero img" style="border-radius: 8px;width:700px;">

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

            email: "",
            password: "",
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

       async login(event) {
            event.preventDefault();


           await axios.post('https://robo-rend-api.onrender.com/api/users/student/login', { email: this.email, password: this.password })
                .then((response) => {
                    const token = response.data.token;
                    console.log("this is token")
                    console.log(token)

                    localStorage.setItem('mod_token', token);
                    localStorage.setItem('student_email', response.data.email);
                   
                    this.$router.push({ name: 'DashboardStudent' });

                    toast.success('Login Successiful!', {
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



