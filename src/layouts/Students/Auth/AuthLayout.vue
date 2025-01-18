<template>
     <nav class="navbar navbar-expand-lg bg-nav   " style="border-bottom: 1px solid white;">
                <!-- Container wrapper -->
                <div class="container">
                    <!-- Toggle button -->
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <!-- Collapsible wrapper -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Navbar brand -->
                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <i class="fa-2x text-white fas fa-robot"></i>

                        </a>

                        <!-- Left links -->
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <a class="nav-link text-bold fw-bold  me-hover" href="#">University of Oulu Robotics Lab</a>
                            </li>

                        </ul>
                        <!-- Left links -->
                    </div>
                    <!-- Collapsible wrapper -->
                    <!-- Right elements -->
                    <div class="d-flex align-items-center">
                        <!-- Icon -->

                        <router-link to="/student"><a class="nav-link text-bold  fw-bold  bth"
                                href="#">Menu</a></router-link>

               



                    </div>
                    <!-- Right elements -->
                </div>
                <!-- Container wrapper -->
       
            </nav>
    
             <nav class="navbar navbar-expand-lg bg-nav   ">
                    <!-- Container wrapper -->
                    <div class="container">
                        <!-- Toggle button -->
               

                        <!-- Collapsible wrapper -->
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <!-- Navbar brand -->
                            <a class="navbar-brand mt-2 mt-lg-0" href="#">
                     

                            </a>

                            <!-- Left links -->
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                       

                            </ul>
                            <!-- Left links -->
                        </div>
                        <!-- Collapsible wrapper -->
                        <!-- Right elements -->
                        <div class="d-flex align-items-center">
                            <!-- Icon -->

                            <router-link to="/student"><a class="nav-link text-bold bth fw-bold "
                                    href="#">For Students</a></router-link>

                            <router-link to="/auth"><a class="nav-link text-bold ms-2  bth fw-bold "
                                    href="#">For Staff</a></router-link>



                        </div>
                        <!-- Right elements -->
                    </div>
                    <!-- Container wrapper -->
       
                </nav>
    <div class="login">
        <router-view></router-view>
</div>
      <Footer/>

</template>

<script>


import Footer from "../../../components/Footer/Footer.vue";

export default {

    components: {
        Footer

    },


   
};



</script>

<style scoped>
.bg-color {
    /* background: #f7e5e9; */
    background: white;


}

.bg-nav {
    /* background: #f7e5e9; */
    background: #23408f;

}

.me-hover {
    color: white;
}

.me-hover:hover {
    color: #00aeef
}

.bth {
    padding: 10px 8px 8px 8px;
    border-radius: 2px;
    color: white;

}

.bth:hover {

    background: #00aeef;
    color: black;
}
</style>



