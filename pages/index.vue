<template>
  <div class="main">
    123
</div>
</template>

<script>
export default {
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