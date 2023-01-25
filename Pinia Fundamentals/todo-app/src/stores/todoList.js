import { defineStore } from "pinia"
import { toHandlers } from "vue"

export const useTodoListStore = defineStore("todoList", {
   state: () => ({
    todoList: [],
    id: 0,
   }) ,
   actions: {
    addTodo(item) {
        this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(itemId) {
        toHandlers.todoList = this.todoList.filter((object) => {
            return object.id != itemId
        })
    }
   }
})