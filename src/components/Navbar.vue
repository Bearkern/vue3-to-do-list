<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">To-Do List</RouterLink>
      <ul class="navbar-nav flex-row">
        <li v-if="!signInState" class="nav-item me-2">
          <RouterLink class="nav-link" to="/signIn">登入 Sign in</RouterLink>
        </li>
        <li v-if="!signInState" class="nav-item">
          <RouterLink class="nav-link" to="/signUp">註冊 Sign up</RouterLink>
        </li>
        <li v-if="signInState" class="nav-item me-2">
          <a class="nav-link" href="#" @click="signOut">登出 Sign out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import emitter from '@/utilities/emitter';

export default {
  data() {
    return {
      signInState: false,
    };
  },
  methods: {
    signOut() {
      this.signInState = false;
      this.$http
        .delete(`${process.env.VUE_APP_API}/users/sign_out`)
        .then((res) => {
          this.$httpMessageState(res, '登出');
          this.$router.push('/signIn');
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '登出');
        });
    },
  },
  mounted() {
    emitter.on('check-sign-in', () => {
      this.signInState = true;
    });
  },
};
</script>
