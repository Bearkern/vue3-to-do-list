<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">To-Do List</RouterLink>
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-2">
          <RouterLink class="nav-link" to="/">登入 Sign in</RouterLink>
        </li>
        <li class="nav-item me-2">
          <a class="nav-link" @click="signOut">登出 Sign out</a>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/register">註冊 Register</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$http
        .delete(`${process.env.VUE_APP_API}/users/sign_out`)
        .then((res) => {
          console.log(res);
          this.$router.push('/signIn');
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>
