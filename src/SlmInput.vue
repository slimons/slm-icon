<template lang="pug">
#slm-input
  input(v-model="currentValue")
  p Esto es un SL
</template>

<script>
import {reactive, watch, toRefs} from 'vue'

export default {
  name: 'SlmInput',
  props: {
    modelValue: {type: [String, Number]}
  },
  setup(props, context) {
    // --- data ---
    const data = reactive({
      currentValue: ''
    })

    // --- use currentValue ---
    watch(() => props.modelValue, async newVal => {
      if (!props.modelValue) return

      data.currentValue = newVal
    }, {immediate: true})

    watch(() => data.currentValue, async newVal => {
      context.emit('update:modelValue', newVal)
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>
