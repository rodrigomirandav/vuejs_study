import { defineStore } from 'pinia'
import axios from "axios"

export const useUserStore = defineStore("UserStore", {
    state() {
        return {
            user: {}
        }
    },
    actions: {
        register(user){
            return axios.post("https://localhost:7142/api/Account/Register", user)
            .then(
                ({ data })  => {
                    this.user = data
                }
            )
        }
    }
})

