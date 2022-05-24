<template>
  <div class="container">
    <Form class="offset-md-4 col-md-4 mt-4" v-slot="{ errors }" @submit="signUp">
      <h3>註冊帳號</h3>
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
        <input
          id="nickname"
          name="nickname"
          type="input"
          class="form-control"
          placeholder="請輸入暱稱"
          v-model="user.nickname"
        />
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
      <ul v-if="errorSignUp.length">
        <li v-for="(error, index) in errorSignUp" :key="index">
          <p class="text-danger">{{ error }}</p>
        </li>
      </ul>
      <div class="text-end">
        <button type="submit" class="btn btn-primary">註冊</button>
      </div>
    </Form>
  </div>
</template>

<script>
import apis from '@/api/apis';

const { signUp } = apis;

export default {
  data() {
    return {
      user: {
        email: '',
        nickname: '',
        password: '',
      },
      errorSignUp: [],
    };
  },
  methods: {
    signUp() {
      signUp(this.user)
        .then((res) => {
          this.$httpMessageState(res, '註冊');
          this.$router.push('/signIn');
        })
        .catch((err) => {
          this.errorSignUp = this.errorSignUp.concat(err.response.data.error);
          this.$httpMessageState(err.response, '註冊');
        });
    },
  },
};
</script>
