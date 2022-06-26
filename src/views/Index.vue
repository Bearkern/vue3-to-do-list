<template>
  <Navbar />
  <ToastMessage />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ToastMessage from '@/components/ToastMessage.vue';

export default {
  components: {
    Navbar,
    ToastMessage,
  },
};

</script>
<style lang="scss">
.nav {
  padding: 30px;
  a {
    padding: 0 20px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
