import { createStore } from "vuex"
import EventServices from "@/services/EventServices"

export default createStore({
  state: {
    user: "Adam Jahr",
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventServices.postEvent(event)
        .then(() => {
          commit("ADD_EVENT", event)
        })
        .catch((error) => {
          throw error
        })
    },
    fetchEvents({ commit }) {
      return EventServices.getEventsSem()
        .then((response) => {
          commit("SET_EVENTS", response.data)
        })
        .catch((error) => {
          throw error
        })
    },
  },
})
