<template lang="pug">
#slm-icon
  i(:class="iconName")
</template>

<script>
import {computed} from 'vue'

export default {
  name: 'SlmInput',
  props: {
    name: {type: String, required: true}
  },
  setup(props) {
    const iconName = computed(() => `slm-icon-${props.name}`)

    return {
      iconName
    }
  }
}
</script>
