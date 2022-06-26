<template>
  <div class="toast-container position-fixed pe-3 end-0" style="z-index: 1500">
    <div
      v-for="(msg, index) in messages"
      :Key="index"
      class="toast show"
      :class="`toast${index}`"
      role="alert"
    >
      <div class="toast-header">
        <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button
          type="button"
          class="btn-close"
          @click="hideToast(index)"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('toastMessage', ['showToast', 'hideToast']),
  },
  computed: {
    ...mapState('toastMessage', ['messages']),
  },
};
</script>
