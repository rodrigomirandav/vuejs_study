import { defineStore } from "pinia"

export const useUserStore = defineStore("UserStore", {
    state() {
        return {
            user: "Rodrigo Miranda",
        }
    },
    getters: {
        firstName() {
            return this.user.split(' ')[0]
        }
    }
})