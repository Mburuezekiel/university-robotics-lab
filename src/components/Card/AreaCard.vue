<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between">
    <span>{{ CardTitle }}</span>
    <div class="mt-0">
        
    </div>
  </div>
        <div class="card-body">
            <h5 class="card-title">{{ CardTitle }}</h5>
            <p class="card-text">{{ CardTitle }}</p>

            <button class="btn btn-success text-white">
               <router-link class="text-white"
                    :to="{ name: 'CabinetView', params: { id: CardLink } }"
                    >Explore</router-link>

            </button>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        CardTitle: String,
        CardLink:String,
    }
}
</script>

<style scoped>
.card {
    border-bottom: 1px solid aquamarine;
}
</style>