<template>
  <div class="notification__container" :class="notificationTypeClass">
    {{ notification.message }}
    <button @click="handleRemove">✕</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
      required: true,
      validator: (value) => value.id && value.message && value.type,
    },
  },
  methods: {
    ...mapActions("notifications", ["remove"]),
    handleRemove() {
      this.remove(this.notification.id);
    },
  },
  computed: {
    notificationTypeClass() {
      return `notification_${this.notification.type}`;
    },
  },
  mounted() {
    this.notificationTimer = setTimeout(() => {
      this.handleRemove();
    }, 5000);
  },
  beforeUnmount() {
    clearTimeout(this.notificationTimer);
  },
};
</script>

<style scoped lang="scss">
.notification__container {
  padding: 16px;
  margin: 8px;
  color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 16px;

  &.notification_success {
    background-color: green;
  }

  &.notification_danger {
    background-color: #ef5350;
  }
}

button {
  background-color: transparent;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  padding: 0px;
  font-size: 18px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>
