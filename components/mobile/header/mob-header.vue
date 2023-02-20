<template>
    <div class="header-container">

        <div class="header-container-left">
            <img src="@/assets/image/logo.jpg">
        </div>
        <div class="header-container-right">
            <div style="width:150px;height: 40px;">

            </div>
            <p  @click="singIn">
                Sing in
                <van-popup v-model="sing_up" position="right" :style="{ width: '100%',height:'100%',backgroundColor:'#24262C'}" closeable >
                    1231232
                    </van-popup>
            </p>
            <div  class="sing-up">
                <van-button type="primary" class="sing-up-btn" @click="singUp">Sing up</van-button>
                <van-popup v-model="sing_up" position="right" :style="{ width: '100%',height:'100%',backgroundColor:'#24262C'}" closeable >
                12222222
                    </van-popup>
            </div>
        </div>
        <div>
        </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            sing_up: false,
        };
    },

    mounted() {

    },

    methods: {
        singIn() {
            this.sing_up = true;
        },
        singUp() {
            this.sing_up = true;
    },
    },
};
</script>

<style scoped>
.header-container {
    width: 100%;
    height: 40px;
    padding-right: 12px;
    background-color: #24262C;
    border: 0 solid;
    box-shadow: 0px 10px 10px #171a1b;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    padding: 0px 20px 0px 0px;
}
 .header-container-left{
    margin: 3px 0px 0px 13px;
}
 .header-container-left img{
    width: auto;
    height: 23px;
}
 .header-container-right{
    width: auto;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-container .header-container-right p{
    width: 50px;
    height: 25px;
    line-height: 20px;
    color: #8B98A5;
    font-size: 10px;
    display: flex;
    align-items: center;
}
.header-container .header-container-right .sing-up {
    margin-right: 7px;
}
.header-container .header-container-right .sing-up .sing-up-btn{
    width: 50px;
    height: 25px;
    line-height: 25px;
    font-size: 10px;
}
</style>