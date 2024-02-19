<template>
  <div ref="htmlContainer"></div>
</template>

<script>
export default {
  name: 'StaticHtmlLoader',
  mounted() {
    // 使用 fetch 或 XMLHttpRequest 来获取 HTML 内容
    fetch('yinghua.html')
      .then(response => response.text())
      .then(html => {
        console.log(html);
        // 将获取到的 HTML 插入到组件的容器中
        this.$refs.htmlContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching the HTML:', error);
      });
  }
};
</script>

<style scoped>
/* 如果有需要，可以添加一些样式来确保 HTML 正确显示 */
</style>
