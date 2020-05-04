<!-- 组件说明 -->
<template>
  <div id='main'>
    <!-- 引用组件 -->
    <Header title="我的喵喵"/>
    <div id="content">
      <!-- 添加登录组件 -->
      <Login />
    </div>
    <TabBar />
  </div>
</template>
<!-- 这里是 JavaScript 代码 -->
<script>
  // 引入组件
  import Header from '@/components/Header';
  import TabBar from '@/components/Tabbar';
  import Login from '@/components/Login';

  export default {
    name: 'Mine',
    components: {
      Header,
      TabBar,
      Login
    }
  }
</script>
<!-- 这里是样式 -->
<style lang='scss' scoped>
</style>