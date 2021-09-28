let notificationID = 1;

export const namespaced = true;

export const state = {
  notifications: [],
};

export const mutations = {
  ADD(state, notification) {
    state.notifications.push({
      ...notification,
      id: notificationID++,
    });
  },
  REMOVE(state, id) {
    state.notifications = state.notifications.filter(
      (notif) => notif.id !== id
    );
  },
};

export const actions = {
  add(context, notification) {
    context.commit("ADD", {
      ...notification,
      id: notificationID++,
    });
  },
  remove(context, id) {
    context.commit("REMOVE", id);
  },
};
