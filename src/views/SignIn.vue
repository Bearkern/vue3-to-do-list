<template>
  <div class="container">
    <Form class="offset-md-4 col-md-4" v-slot="{ errors }" @submit="signIn">
      <div class="mb-2">
        <label for="email" class="form-label">email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 email"
          rules="email|required"
          v-model="user.email"
        />
        <ErrorMessage name="email" class="invalid-feedback" />
      </div>
      <div class="mb-2">
        <label for="password" class="form-label">密碼</label>
        <Field
          id="password"
          name="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors['password'] }"
          placeholder="請輸入密碼"
          rules="required"
          v-model="user.password"
        />
        <ErrorMessage name="密碼" class="invalid-feedback" />
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-primary">登入</button>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      this.$http
        .post(`${process.env.VUE_APP_API}/users/sign_in`, { user: this.user })
        .then((res) => {
          const { authorization } = res.headers;
          document.cookie = `toDoToken=${authorization}`;
          console.log(res);
          this.$router.push('/');
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>

<style lang="scss"></style>
