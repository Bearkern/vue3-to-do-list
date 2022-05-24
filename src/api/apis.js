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

const signIn = ({ email, password }) => request({
  method: 'post',
  url: '/users/sign_in',
  data: {
    user: {
      email,
      password,
    },
  },
});

const checkAuth = () => request({
  method: 'get',
  url: '/check',
});

const signOut = () => request({
  method: 'delete',
  url: '/users/sign_out',
});

const getTasks = () => request({
  method: 'get',
  url: '/todos',
});

const addTask = (content) => request({
  method: 'post',
  url: '/todos',
  data: {
    todo: {
      content,
    },
  },
});

const toggleCompleteState = (id) => request({
  method: 'patch',
  url: `/todos/${id}/toggle`,
});

const updateTask = ({ id, content }) => request({
  method: 'put',
  url: `/todos/${id}`,
  data: {
    todo: {
      content,
    },
  },
});

const deleteTask = (id) => request({
  method: 'delete',
  url: `/todos/${id}`,
});

export default {
  signUp,
  signIn,
  checkAuth,
  signOut,
  getTasks,
  addTask,
  toggleCompleteState,
  updateTask,
  deleteTask,
};
