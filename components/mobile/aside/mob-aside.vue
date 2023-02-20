<template>
    <div class="aside-container">
        <div class="aside-container-top">

        </div>
</div>
</template>

<script>
export default {
    data() {
        return {
        };
    },

    mounted() {

    },

    methods: {
        addNumber() {
            this.$store.commit('user/')
        }
    },
};
</script>

<style scoped>
.aside-container {
    position: absolute;
    top: 0px;
    width: 260px;
    height: 100%;
    box-shadow: 5px 0 5px#1C1F22;
    background-color: #1C1E22;
    transform: none;
}

.aside-container .aside-container-top {
    width: 240px;
    height: 64px;
    padding: 0px 10px 0px 10px;
    border: 0 solid;
    box-shadow: 0px 10px 10px #18191b;
}


</style>