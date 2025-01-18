<template>
  <div class="area mt-2">
    <Breadcrumb :Pagetitle="'Category'" />
    <div class="">
      <div class="d-flex justify-content-end bd-highlight mb-2">


        <div>
          <router-link 
             :to="{ name: 'AddDoor', params: { id: $route.params.id, cabinetId: $route.params.cabinet_id, category_id: $route.params.category_id } }"
            >
              <Button buttonClass="me-2 btn btn-outline-success btn-sm">
                <i class="fa-solid fa-plus"></i> Add Door
              </Button>
            </router-link>
         
        </div>

      </div>






      <div class="row">
        <h4>{{ data.name }}</h4>

        <div v-if="loading" class="col-md-12">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div v-else-if="data.length === 0" class="col-md-12">
          <div class="card">
            <div class="card-body">
              <p><i class="fa-solid fa-circle-exclamation"></i> No Cabinets in this area</p>
            </div>
          </div>
        </div>

        <div v-else class="col-md-12">
          <div class="card mt-4 bg-success">
            <div class="card-body">

              <div class="row">
                <div class="col-md-6" v-for="door in data.doors" :key="door._id">
                  <div class="card mt-3" style="height: 250px;">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <span> {{ door.name }}</span>
                         <span><i class="fas fa-door-closed"></i></span>   
                      </div>
                 

                      <hr style="border: 1rem solid gray;">
                      <hr style="border: 1rem solid gray;">
                      <hr style="border: 1rem solid gray;">
                      <hr style="border: 1rem solid gray;">
                    </div>
                  </div>
                </div>

              </div>



              <router-link to="/">


              </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  
<script>
import axios from 'axios'
import { toast } from 'vue3-toastify';
import Breadcrumb from '@/components/BreadCrumb/Breadcrumb.vue';
import Button from '@/components/Button/Button.vue';

import CabinetCard from '@/components/Card/CabinetCard.vue';

export default {
  data() {
    return {
      data: [],
      loading: true,
      name:''
    }
  },
  components: {
    Breadcrumb,
    Button,
    CabinetCard
  },

  computed: {

  },

  methods: {



    async getCabinetsInArea() {
      const areaId = this.$route.params.id;
      const cabinet_id = this.$route.params.cabinet_id

      const category_id = this.$route.params.category_id

      // Get the 'id' parameter from the URL route
      console.log(areaId);

      try {
        const response = await axios.get('https://robo-rend-api.onrender.com/api/inventory/category/' + areaId + '/' + cabinet_id + '/' + category_id);
        // localhost: 5000 / api / inventory / category / 654c856938e0c6bc2d276ea4 / 654c8591067c77e7bc40e875
        // const response = await axios.get('https://robo-rend-api.onrender.com/api/inventory/category/654c856938e0c6bc2d276ea4/654c8591067c77e7bc40e875');
        const data = response.data;
        console.log(data)



        setTimeout(() => {
          this.data = data;
          this.loading = false;
          toast.success('Categories Fetched Successfully!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
          });
        }, 3000); // Set a 5-second timeout
      } catch (err) {
        console.error(err);
        toast.error('An Error Occured!', {
          autoClose: 3000,
        });
      }
    },

   async addDoor(){
       const areaId = this.$route.params.id;
      const cabinet_id = this.$route.params.cabinet_id

      const category_id = this.$route.params.category_id
    // localhost: 5000 / api / inventory / door / 654c856938e0c6bc2d276ea4 / 654c8591067c77e7bc40e875 / 654c88a238e0c6bc2d276ece
      await axios.post('https://robo-rend-api.onrender.com/api/inventory/door', { name: this.name })
        .then((response) => {
          console.log(response.data);



          this.$router.push({ name: 'AreaView' });

          toast.success('Area added Successiful!', {
            autoClose: 10000,
          });


        })
        .catch((error) => {


          toast.error(error.response.data.message, {
            autoClose: 10000,
          });

        });

    }



  },
  mounted() {
    this.getCabinetsInArea()
  }



};
</script>


<style scoped>
.cabinets {
  border-bottom: 1px solid aqua;
}

.shelf {
  border-bottom: 1px solid green;
}

.bins {
  border-bottom: 1px solid goldenrod;
}
</style>
  





