<template>
  <div id="greetings">
    <label for="name">Your name</label>
    <input id="name" placeholder="Rusty" v-model="name" />
    <button @click="greet(name)">Greeting from rust</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import init, { greet } from "../../pkg/xi_wasm"

export default defineComponent({
  props: {
    msg: String,
  },
  async setup() {
    await init()
    const name = ref("")

    return {
      greet,
      name,
    }
  },
})
</script>

<style scoped>
#greetings {
  display: flex;
  flex-direction: column;
  align-content: center;
}
#greetings > * {
  flex: auto;
  margin: 5px;
  min-width: 200px;
  align-self: center;
  padding: 0px;
}
</style>