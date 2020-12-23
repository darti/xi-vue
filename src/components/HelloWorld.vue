<template>
  <button @click="greet()">Greeting from wasm</button>
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

    return {
      greet: greet,
    }
  },
})
</script>
