<template>
    <div class="card bg-new">
        <div class="card-header d-flex justify-content-between">
            <span>{{ CardLocation }}</span>
            <div class="mt-0"><span class="badge badge-success">room - [Top-Left]</span></div>
        </div>
        <div class="card-body">

                <div class="row">
                    <div class="col-md-6" v-for="(content, index) in CardContent" :key="index">
                        <div class="card mt-2 bg-green" >
                    <div class="card-body">
                       

                <span class="badge badge-success mb-1">label [ {{ content }}]</span>
                    </div>
                </div>
                    </div>
                </div>


        </div>
    </div>
</template>

<script>
export default {
    props: {
        CardLocation: String,
        CardTitle: String,
        CardContent: Array,

    }
}
</script>

<style scoped>

.bg-new{
    background: #c9cfde;
}

.bg-green{
    background: rgb(38, 189, 71);
    border-left: 2px solid gray;
    border-right: 8px solid gray;
    border-bottom: 4px solid gray;
    border-top: 4px solid gray;
}

</style>