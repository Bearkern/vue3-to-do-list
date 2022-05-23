import request from './request';

const signUp = ({ email, nickname, password }) => request({
  method: 'post',
  url: '/users',
  data: {
    user: {
      email,
      nickname,
      password,
    },
  },
});

export default {
  signUp,
};
