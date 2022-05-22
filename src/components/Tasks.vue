<template>
  <li v-for="task in tasks" :key="task.id" class="d-flex justify-content-between">
    <div class="d-flex align-items-center">
      <div class="form-check">
        <input
          type="checkbox"
          :id="task.id"
          class="form-check-input"
          :true-value="task.completed_at"
          @change="toggleCompleteState(task.id)"
        />
        <label class="form-check-label" :class="{ done: task.completed_at }" :for="task.id">
          {{ task.content }}
        </label>
      </div>
      <EditTask
        :task="tempToDo"
        @update-task="updateTask"
        @cancel-edit="cancelEdit"
        :isEdit="isEdit"
      />
    </div>
    <div>
      <button type="button" class="btn" @click="toggleEditState(task)">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button type="button" class="btn" @click="deleteTask(task.id)">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </li>
</template>

<script>
import EditTask from '@/components/EditTask.vue';

export default {
  data() {
    return {
      isEdit: false,
      tempToDo: {},
    };
  },
  props: {
    tasks: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['get-to-dos'],
  components: {
    EditTask,
  },
  methods: {
    toggleCompleteState(id) {
      this.$http
        .patch(`${process.env.VUE_APP_API}/todos/${id}/toggle`)
        .then(() => {
          this.$emit('get-to-dos');
        })
        .catch((err) => {
          console.dir(err);
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
          this.$emit('get-to-dos');
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
          this.$emit('get-to-dos');
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '刪除');
        });
    },
  },
};
</script>
