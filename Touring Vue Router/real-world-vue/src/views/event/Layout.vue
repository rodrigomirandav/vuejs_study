<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>

    <nav>
      <router-link :to="{ name: 'EventDetails' }">Details</router-link> |

      <router-link :to="{ name: 'EventRegister' }">Register</router-link> |

      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </nav>

    <router-view :event="event" />
  </div>
</template>

<script>
import EventServices from "@/services/EventServices"

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventServices.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped></style>
