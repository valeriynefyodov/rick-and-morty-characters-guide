<template>
  <div class="notifications__container">
    <NotificationBar
      v-for="notification in notifications"
      :notification="notification"
      :key="notification.id"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationBar from "./Bar.vue";
export default {
  components: {
    NotificationBar,
  },
  computed: mapState("notifications", ["notifications"]),
  watch: {
    notifications(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.notifications__container {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
