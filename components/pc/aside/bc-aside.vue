<template>
    <div class="aside-container">
        <div class="aside-container-top">

        </div>
        <div class="aside-container-next">
            <el-menu>
                <nuxt-link to="/text">
                    <el-menu-item @="addNumber">
                        <i class="el-icon-menu"></i><span>{{ $store.state.student.count }}</span>
                    </el-menu-item>
                </nuxt-link>
                <nuxt-link to="/texte1">
                    <el-menu-item>
                        <i class="el-icon-menu"></i><span>导航一</span>
                    </el-menu-item>
                </nuxt-link>
                <el-menu-item>
                    <i class="el-icon-menu"></i><span>导航一</span>
                </el-menu-item>
                <el-menu-item>
                    <i class="el-icon-menu"></i><span>导航一</span>
                </el-menu-item>
                <el-menu-item>
                    <i class="el-icon-menu"></i><span>导航一</span>
                </el-menu-item>
            </el-menu>
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
    width: 260px;
    height: 100%;
    background-color: #1C1E22;
    box-shadow: 5px 0 5px#1C1F22;
    position: absolute;
    top: 0px;
    transform: none;
}

.aside-container .aside-container-top {
    width: 240px;
    height: 64px;
    padding: 0px 10px 0px 10px;
    border: 0 solid;
    box-shadow: 0px 10px 10px #18191b;
}

.aside-container .aside-container-next {
    width: 240px;
    /* height: 100%; */
    padding: 20px 10px 20px 10px;
}

.aside-container .aside-container-next .el-menu {
    background-color: #1C1E22;
    border: 0 solid;
}

.aside-container .aside-container-next .el-menu-item {
    background-color: #24262B;
    margin-top: 4px;
    color: #67707B;
}
</style>