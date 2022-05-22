<template>
  <div class="container w-50">
    <form class="row w-50 mx-auto mb-3">
      <h3>Hi, {{ nickname }} 歡迎回來！</h3>
      <div class="col inputToDo">
        <input
          type="text"
          class="form-control"
          placeholder="Add Task"
          v-model="toDo.content"
          @keyup.enter="addToDo"
        />
        <button type="button" class="addToDo" @click="addToDo">
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </form>
    <div v-if="!toDos.length" class="w-50 mx-auto">
      <h3>開始新增待辦事項吧！</h3>
    </div>
    <div v-else>
      <ul v-if="toDoTasks.length" class="item-list toDoTasks w-50 mx-auto">
        <h3>To Do Tasks</h3>
        <Tasks :tasks="toDoTasks" @get-to-dos="getToDos" />
      </ul>
      <ul v-if="completedTasks.length" class="item-list completedTasks w-50 mx-auto">
        <h3>Completed Tasks</h3>
        <Tasks :tasks="completedTasks" @get-to-dos="getToDos" />
      </ul>
    </div>
  </div>
</template>

<script>
import emitter from '@/utilities/emitter';
import Tasks from '@/components/Tasks.vue';

export default {
  data() {
    return {
      nickname: '',
      toDo: {
        content: '',
      },
      toDos: [],
      toDoTasks: [],
      completedTasks: [],
      tempToDo: {},
      isEdit: false,
    };
  },
  components: { Tasks },
  methods: {
    addToDo() {
      if (this.toDo.content) {
        this.$http
          .post(`${process.env.VUE_APP_API}/todos`, { todo: this.toDo })
          .then((res) => {
            this.$httpMessageState(res, '新增');
            this.toDo.content = '';
            this.getToDos();
          })
          .catch((err) => {
            this.$httpMessageState(err.response, '新增');
          });
      }
    },
    getToDos() {
      this.$http
        .get(`${process.env.VUE_APP_API}/todos`)
        .then((res) => {
          this.toDos = res.data.todos;
          this.toDoTasks = this.toDos.filter((task) => !task.completed_at);
          this.completedTasks = this.toDos.filter((task) => task.completed_at);
        })
        .catch((err) => {
          console.dir(err);
          this.$httpMessageState(err.response, '取得資料');
        });
    },
    toggleCompleteState(id) {
      this.$http
        .patch(`${process.env.VUE_APP_API}/todos/${id}/toggle`)
        .then(() => {
          this.getToDos();
        })
        .catch((err) => {
          this.$httpMessageState(err.response);
        });
    },
    toggleEditState(task) {
      if (this.isEdit) {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
      this.tempToDo = { ...task };
    },
    updateTask(task) {
      this.$http
        .put(`${process.env.VUE_APP_API}/todos/${task.id}`, { todo: { content: task.content } })
        .then((res) => {
          this.$httpMessageState(res);
          this.getToDos();
          this.isEdit = false;
        })
        .catch((err) => {
          this.$httpMessageState(err.response);
        });
    },
    cancelEdit() {
      this.isEdit = false;
    },
    deleteTask(id) {
      this.$http
        .delete(`${process.env.VUE_APP_API}/todos/${id}`)
        .then((res) => {
          this.$httpMessageState(res, '刪除');
          this.getToDos();
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '刪除');
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)toDoToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;

    this.$http
      .get(`${process.env.VUE_APP_API}/check`)
      .then((res) => {
        emitter.emit('check-sign-in');
        this.$httpMessageState(res, '驗證');
        this.nickname = this.$route.params.nickname;
      })
      .catch((err) => {
        this.$httpMessageState(err.response);
        this.$router.push('/signIn');
      });
    this.getToDos();
  },
};
</script>

<style lang="scss">
.inputToDo {
  position: relative;
}
.addToDo {
  position: absolute;
  border: none;
  background: transparent;
  top: 6px;
  right: 14px;
}
.done {
  text-decoration: line-through;
  color: gray;
}
.item-list {
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.toDoTasks {
  background-color: #f6f9ff;
}
.completedTasks {
  background-color: #99ddd6;
}
</style>
