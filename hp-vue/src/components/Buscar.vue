<template>
  <v-text-field v-model="q" label="Buscar..." clearable dense @input="emitValue" />
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const q = ref(props.modelValue || '')
    watch(() => props.modelValue, v => q.value = v)
    function emitValue() { emit('update:modelValue', q.value) }
    return { q, emitValue }
  }
}
</script>
