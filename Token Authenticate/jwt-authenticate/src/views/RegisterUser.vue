<template>
    {{  userDto }}

    {{ userStore.user }}
    <form @submit.prevent="sendUser"> 
        <div style="display: flex; flex-direction: column;">
            <label>Username</label>
            <input type="text" v-model="userDto.username">

            <label>Email</label>
            <input type="text" v-model="userDto.email">

            <label>Senha</label>
            <input type="password" v-model="userDto.password">

            <label>Primeiro nome</label>
            <input type="text" v-model="userDto.primeiroNome">

            <label>Ultimo nome</label>
            <input type="text" v-model="userDto.ultimoNome">

            <button type="submit" style="margin-top: 20px;">Enviar</button>
        </div>
    </form>
</template>

<script>
import {useUserStore} from  "@/stores/UserStore"

export default {
    setup() {
        const userStore = useUserStore()

        return {
            userStore
        }
    },
    data() {
        return {
            userDto : {
                username: "",
                email: "",
                password: "",
                primeiroNome: "",
                ultimoNome: ""
            }
        }
    },
    methods: {
        sendUser() {
            console.log("Enviando")

            this.userStore.register(this.userDto)
        }
    }
}
</script>