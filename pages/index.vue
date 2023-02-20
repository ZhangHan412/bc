<template>
  <div class="main">
    <bc-header />
</div>
</template>

<script>
import bcHeader from '~/components/pc/header/bc-header.vue'
export default {
  components: { bcHeader },
  async asyncDate(ctx) {
    try {
      throw new Error()
    } catch {
      ctx.error({
        statusCode: 500,
        message:'服务器开小差~'
      })
    }
  }
}
</script>
<style scoped>

</style>