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
        <label
          v-if="currentEditId !== task.id"
          class="form-check-label"
          :class="{ done: task.completed_at }"
          :for="task.id"
        >
          {{ task.content }}
        </label>
      </div>
      <EditTask
        :task="tempToDo"
        @update-task="updateTask"
        @cancel-edit="cancelEdit"
        :isEdit="currentEditId === task.id"
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
import apis from '@/api/apis';

const { toggleCompleteState, updateTask, deleteTask } = apis;

export default {
  data() {
    return {
      currentEditId: null,
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
  emits: ['get-tasks'],
  components: {
    EditTask,
  },
  methods: {
    toggleCompleteState(id) {
      toggleCompleteState(id)
        .then(() => {
          this.$emit('get-tasks');
          this.currentEditId = null;
        })
        .catch((err) => {
          console.dir(err);
          this.$httpMessageState(err.response);
        });
    },
    toggleEditState(task) {
      this.currentEditId = task.id === this.currentEditId ? null : task.id;
      this.tempToDo = { ...task };
    },
    updateTask(task) {
      updateTask(task)
        .then((res) => {
          this.$httpMessageState(res);
          this.$emit('get-tasks');
          this.currentEditId = null;
        })
        .catch((err) => {
          this.$httpMessageState(err.response);
        });
    },
    cancelEdit() {
      this.currentEditId = null;
    },
    deleteTask(id) {
      deleteTask(id)
        .then((res) => {
          this.$httpMessageState(res, '刪除');
          this.$emit('get-tasks');
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '刪除');
        });
    },
  },
};
</script>
