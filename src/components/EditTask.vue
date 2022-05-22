<template>
  <input v-if="isEdit"
    type="text"
    class="form-control"
    v-model="tempTask.content"
    @keyup.enter="$emit('update-task', tempTask)"
    @keyup.esc="$emit('cancel-edit')"
    @blur="$emit('cancel-edit')"
  />
</template>

<script>
export default {
  data() {
    return {
      tempTask: {},
    };
  },
  props: {
    task: {
      type: Object,
      default() {
        return {};
      },
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    task() {
      this.tempTask = this.task;
    },
  },
};
</script>
