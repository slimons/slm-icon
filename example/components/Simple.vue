<template lang="pug">
slm-input(v-model="valueInput")
p {{valueInput}}
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  setup() {
    const data = reactive({
      valueInput: ''
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style>
</style>
