<template>
  <div class="container">
    <h1>To-Do List</h1>
    <form class="row">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Add Item"
          v-model="todo.content"
          @keyup.enter="addToDo"
        />
      </div>
      <div class="col-auto">
        <button type="button" class="btn" @click="addToDo"><i class="bi bi-plus"></i></button>
      </div>
    </form>
    <hr />
    <ul class="item-list">
      <li v-for="item in todos" :key="item.id" class="form-check">
        <input
          type="checkbox"
          :id="item.id"
          class="form-check-input"
          :true-value="1"
          :false-value="0"
          v-model="item.completed_at"
        />
        <input type="text" class="form-control" v-model="item.content">
        <label class="form-check-label" :for="item.id">{{ item.content }}</label>
        <button type="button" class="btn" @click="editItem(item.id, item.content)">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button type="button" class="btn" @click="deleteItem(item.id)">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        content: '',
      },
      todos: [],
    };
  },
  methods: {
    addToDo() {
      if (this.todo.content) {
        this.$http
          .post(`${process.env.VUE_APP_API}/todos`, { todo: this.todo })
          .then((res) => {
            console.log(res);
            this.todo.content = '';
            this.getToDos();
          })
          .catch((err) => {
            console.dir(err);
          });
      }
    },
    getToDos() {
      this.$http
        .get(`${process.env.VUE_APP_API}/todos`)
        .then((res) => {
          this.todos = res.data.todos;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    editItem(id, item) {
      this.todo.content = item;
      this.$http.put(`${process.env.VUE_APP_API}/todos/${id}`, { todo: this.todo })
        .then((res) => {
          console.log(res);
          this.getToDos();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteItem(id) {
      this.$http.delete(`${process.env.VUE_APP_API}/todos/${id}`)
        .then((res) => {
          console.log(res);
          this.getToDos();
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)toDoToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;

    this.$http
      .get(`${process.env.VUE_APP_API}/check`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.dir(err);
        this.$router.push('/signIn');
      });
    this.getToDos();
  },
};
</script>
