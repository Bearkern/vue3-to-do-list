<template>
  <div class="container">
    <h1>註冊帳號</h1>
    <Form class="offset-md-4 col-md-4" v-slot="{ errors }" @submit="register">
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
        <label for="nickname" class="form-label">暱稱</label>
        <Field
          id="nickname"
          name="nickname"
          type="input"
          class="form-control"
          :class="{ 'is-invalid': errors['nickname'] }"
          placeholder="請輸入暱稱"
          rules="required"
          v-model="user.nickname"
        />
        <ErrorMessage name="nickname" class="invalid-feedback" />
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
        <ErrorMessage name="password" class="invalid-feedback" />
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-primary">註冊</button>
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
        nickname: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      this.$http
        .post(`${process.env.VUE_APP_API}/users`, { user: this.user })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>
