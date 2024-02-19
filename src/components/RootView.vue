<template>
  <div id="router-view">
    <!-- 这里放置当前显示的页面 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
export default {
  name: 'RouterView',
  computed: {
    currentComponent() {
      return this.$route.meta.page; // 获取当前页面对象
    }
  }
};
</script>
