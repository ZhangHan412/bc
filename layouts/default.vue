<template>
    <div>
        <bc-header />
        <bc-aside />
        <div class="main-container">
            <div class="main-container-main">
                <div class="main-box">
                    <nuxt />
                </div>
            </div>
        </div>
</div>
</template>

<script>

import BcAside from '~/components/aside/bc-aside.vue';
import BcHeader from '~/components/header/bc-header.vue';
export default {
    components: {
        BcHeader,
        BcAside

    },
    data() {
        return {

        };
    },

    mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1500)
    })
  },

    methods: {

    },
};
</script>

<style scoped>
.main-container {
    width: 1660px;
    height: 100%;
    background-color: #535458;
    margin-left: 260px;

}

.main-container .main-container-main {
    width: 1660px;
    background-color: cadetblue;
}
.main-container .main-container-main .main-box{
    width: 1308px;
    padding: 0px 40px 0px 40px;
    margin: 0 auto;
    padding: 0 40px;
    background-color: rgb(68, 78, 79);
}
</style>