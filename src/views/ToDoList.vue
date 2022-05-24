<template>
  <div class="container w-50">
    <form class="row w-50 mx-auto mb-3 mt-4">
      <h3>Hi, {{ nickname }} 歡迎回來！</h3>
      <div class="col inputTask">
        <input
          type="text"
          class="form-control"
          placeholder="Add Task"
          v-model="toDo.content"
          @keyup.enter="addTask"
        />
        <button type="button" class="addTask" @click="addTask">
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
        <Tasks :tasks="toDoTasks" @get-tasks="getTasks" />
      </ul>
      <ul v-if="completedTasks.length" class="item-list completedTasks w-50 mx-auto">
        <h3>Completed Tasks</h3>
        <Tasks :tasks="completedTasks" @get-tasks="getTasks" />
      </ul>
    </div>
  </div>
</template>

<script>
import emitter from '@/utilities/emitter';
import Tasks from '@/components/Tasks.vue';
import apis from '@/api/apis';

const { checkAuth, getTasks, addTask } = apis;

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
    addTask() {
      if (this.toDo.content) {
        addTask(this.toDo.content)
          .then((res) => {
            this.$httpMessageState(res, '新增');
            this.toDo.content = '';
            this.getTasks();
          })
          .catch((err) => {
            this.$httpMessageState(err.response, '新增');
          });
      }
    },
    getTasks() {
      getTasks()
        .then((res) => {
          this.toDos = res.data.todos;
          this.toDoTasks = this.toDos.filter((task) => !task.completed_at);
          this.completedTasks = this.toDos.filter((task) => task.completed_at);
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '取得資料');
        });
    },
  },
  mounted() {
    checkAuth()
      .then((res) => {
        emitter.emit('check-sign-in');
        this.$httpMessageState(res, '驗證');
        this.nickname = this.$route.params.nickname;
        this.getTasks();
      })
      .catch((err) => {
        this.$httpMessageState(err.response, '驗證');
        this.$router.push('/signIn');
      });
  },
};
</script>

<style lang="scss">
.inputTask {
  position: relative;
}
.addTask {
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
