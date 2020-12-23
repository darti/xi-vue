<template></template>

<script lang="ts">
import { ref } from "vue"
import init from "../../pkg/xi_wasm_bg.wasm"

export default {
  props: {
    msg: String,
  },
  async setup() {
    await init()

    return {}
  },
}
</script>
