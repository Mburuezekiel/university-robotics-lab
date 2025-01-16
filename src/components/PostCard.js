<template>
    <div class="card mt-2 shadow">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="40"
                        alt="Black and White Portrait of a Man" loading="lazy" style="border:3px solid #15c694" />
                    <span class="ms-2">Samuelkago</span>
                </div>

                <p>
                    <i class="fas fa-ellipsis-h"></i>
                </p>
            </div>

            <img :src="image" class="card-img-top"
                alt="Fissure in Sandstone"  style="border-radius: 5px;"/>

            <div class="reaction mt-2">
                <div class="d-flex justify-content-between">
                    <div class="left">
                        <!-- inline -->
                        <div class="d-flex align-items-center">
                            <p class="ms-2">
                                <i class="far fa-heart"></i>
                                <span class="ms-1">{{ likes }}k</span>
                            </p>
                            <p class="ms-2">

                                <i class="far fa-comment"></i>
                                <span class="ms-1">1.2k</span>
                            </p>
                            <p class="ms-3">
                                <i class="far fa-share-square"></i>
                                <span class="ms-1"></span>

                            </p>

                        </div>


                    </div>
                    <!-- save -->
                    <div class="right">
                        <div class="d-flex align-items-center me-2">
                            <i class="far fa-bookmark"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <p>
                    <span>Samuel_kago</span> {{ content  }}
                </p>
            </div>
        </div>

    </div>
</template>

<script>



export default {
    name: 'PostCard',
   
    components: {
     
    },
    props: {
        image: {
            type: String,
            required: true
        }
        ,
        content: {
            type: String,
            required: true
        }
        ,
        likes:
        {
            type: Number,
            default : 0,
            required: false
        }
        

    }

}

</script>