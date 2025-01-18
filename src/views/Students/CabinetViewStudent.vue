<template>
  <div class="area mt-2">
    <Breadcrumb :Pagetitle="'Area ' + '- ' + data.area_name" />
    <div class="">




      <div v-if="data.area_name == 'TF105'">
        <div class="row" v-if="!loading && data.cabinets.length > 0">
          <div class="col-md-7">
            <h4>Cabinets</h4>


            <div class="row">
              <div v-if="loading" class="col-md-12">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>



              <div v-else class="col-md-12" v-for="cabinet in data.cabinets" :key="cabinet._id">
                <div class="card mt-4 bg-success">
                  <div class="card-body">
                    <p class="text-red">{{ cabinet.name }}</p>


                    <div class="row">

                      <div class="col-md-2" v-for="category in cabinet.categories" :key="category._id">
                        <small>{{ category.name }}</small>
                        <div class="card mt-2" style="height:150px">
                          <div class="card-body">


                            <router-link class="mt-3"
                              :to="{ name: 'CategoryStudent', params: { id: area_id, cabinet_id: cabinet._id, category_id: category._id } }">
                              <button class="me-2 mt-4 btn btn-warning btn-sm">
                                View
                              </button>

                            </router-link>
                          </div>
                        </div>
                      </div>
                       <div v-if="cabinet.name == 'Cabinets B'"  class="col-md-4 mt-4">
                            <div class="card bg-primary">
                              <div class="card-body">
                                <h4 class="card-title">Trolley</h4>

                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="card">
                                      <div class="card-body">
                                       
                                  <router-link to="#" class="me-2 mt-4 btn btn-warning btn-sm">
                                    View
                                  </router-link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <h4>Shelfs</h4>

            <div class="row">
              <div v-if="loading" class="col-md-6">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div v-else-if="data.shelves.length === 0" class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <p><i class="fa-solid fa-circle-exclamation"></i> No shelves in this area</p>
                  </div>
                </div>
              </div>

              <div v-else class="col-md-6" v-for="shelf in data.shelves" :key="shelf._id">
                <div class="card bg-info mt-3 mt-4">
                  <div class="card-body">
                    <h4 class="card-title">{{ shelf.name }}</h4>

                    <div v-if="shelf.name === 'Shelf 1'">

                      <div v-for="n in 6">
                        <hr style="border: 1rem solid gray;">
                      </div>

                    </div>
                    <div v-if="shelf.name === 'Shelf 2'">

                      <div v-for="n in 9">
                        <hr style="border: 1rem solid gray;">
                      </div>

                    </div>





                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        


        <div class="row" v-if="!loading && data.bins.length > 0">
         
          <div v-if="loading" class="col-md-6">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-else-if="data.bins.length === 0" class="col-md-6">
            <div class="card">
              <div class="card-body">
                <p><i class="fa-solid fa-circle-exclamation"></i> No Bins in this area</p>
              </div>
            </div>
          </div>

          <div v-else class="col-md-6">


            <div class="card mt-4 bg-primary" v-for="bin in data.bins" :key="bin._id">
              <div class="card-body">
                <h4 class="card-title">{{ bin.name }}</h4>


                <div class="row">
                  <div class="col-md-3" v-for="k in 4" :key="k">
                    <div class="card">
                      <div class=" text-dark card-body">
                        Component 
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <div class="col-md-1 mt-4">

          </div>

          <div class="col-md-4 mt-4 ">
            <div class="card ms-4" style="border:1px solid gray;height: 350px;">
              <div class="card-body" style="background: lightgreen;">

                <h2 class="text-center">General Items</h2>

              </div>
            </div>
          </div>
          <div class="col-md-1 mt-4">

          </div>

        </div>
      </div>

      <div v-if="data.area_name === 'TF103'">

        <div class="row mt-4">

          <div class="col-md-3">

            <div class="card bg-success">
              <div class="card-body">
                <h4 class="card-title">Work Shelf</h4>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card" style="height:160px">
                      <div class="card-body">
                        Lorem, ipsum dolor.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-6 mt-2" v-for="j in 2" :key="j">
                    <div class="card ">
                      <div class="card-body">

                        Bar 3
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row mt-4">
                  <div class="col-md-6 mt-2" v-for="j in 2" :key="j">
                    <div class="card ">
                      <div class="card-body">

                        Bar 2
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row mt-4">
                  <div class="col-md-6 mt-2" v-for="j in 2" :key="j">
                    <div class="card ">
                      <div class="card-body">

                        Bar 1
                      </div>
                    </div>
                  </div>

                </div>



              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card bg-success">
              <div class="card-body">
                <h4 class="card-title">Exercise Project Shelf</h4>
                <div class="row">
                  <div class="col-md-12 mt-2" v-for="n in reversedRange(5)" :key="n">
                    <div class="card">
                      <div class="card-body">
                        Bar {{ n }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card bg-success">
              <div class="card-body">
                <h4 class="card-title"> Project Shelf 1</h4>
                <div class="row">
                  <div class="col-md-12 mt-2" v-for="n in reversedRange(5)" :key="n">
                    <div class="card">
                      <div class="card-body">
                        Bar {{ n }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card bg-success">
              <div class="card-body">
                <h4 class="card-title"> Project Shelf 2</h4>
                <div class="row">
                  <div class="col-md-12 mt-2" v-for="n in reversedRange(5)" :key="n">
                    <div class="card">
                      <div class="card-body">
                        Bar {{ n }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div class="row mt-3">
          <div class="col-md-4"></div>
          <div class="col-md-3"></div>

          <div class="col-md-5">
            <div class="card bg-info">
              <div class="card-body">
                <h4 class="card-title">AREA 7 3D-PRINTING</h4>

                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-9">
                    <div class="card ">
                      <div class="card-body">
                        A
                        <div class="card bg-warning">
                          <div class="card-body">

                            <small>Tulostustyökalut</small>

                          </div>
                        </div>
                        <div class="card bg-warning mt-2">
                          <div class="card-body">

                            <small>Vetoniitit, o-renkaat, sokat, jouset</small>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="row mt-2">
                  <div class="col-md-3"></div>
                  <div class="col-md-9">
                    <div class="card ">
                      <div class="card-body">
                        B
                        <div class="card bg-warning mt-2">
                          <div class="card-body">

                            <small>APICO LIITTIMET</small>

                          </div>
                        </div>
                        <div class="card bg-warning mt-2">
                          <div class="card-body">

                            <small>JOHTONEN PÄÄTYHOLKKI</small>

                          </div>
                        </div>
                        <div class="card bg-warning mt-2">
                          <div class="card-body">

                            <small>SÄHKÖJOHDOT</small>

                          </div>
                        </div>
                        <div class="card bg-warning mt-2">
                          <div class="card-body">

                            <small>KUTISTESUKAT JA NIPPUSITEET</small>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
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
      isCabinet: false
    }
  },
  components: {
    Breadcrumb,
    Button,
    CabinetCard
  },

  computed: {
    hideDiv() {
      const divToHide = document.getElementById('cabinets'); // replace 'yourDivId' with the actual ID of your div

      if (this.data.cabinets === 0) {
        // If the condition is met (cabinets is 0), hide the div
        divToHide.style.display = 'none';
      } else {
        // If the condition is not met, show the div
        divToHide.style.display = 'block'; // You can also use 'inline-block' or 'flex', depending on your layout
      }
    }


  },

  methods: {

    reversedRange(n) {
      // Generate an array of length n and reverse it
      return Array.from({ length: n }, (_, index) => index + 1).reverse();
    },



    async getCabinetsInArea() {
      const areaId = this.$route.params.id; // Get the 'id' parameter from the URL route
      console.log(areaId);

      try {
        const response = await axios.get('https://robo-rend-api.onrender.com/api/inventory/areas/' + areaId);
        const data = response.data;
        console.log(data)

        setTimeout(() => {
          this.data = data;
          this.loading = false;
          toast.success('Cabinets Fetched Successfully!', {
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
  