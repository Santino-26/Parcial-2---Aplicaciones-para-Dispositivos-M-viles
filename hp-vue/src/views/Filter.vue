<template>
  <v-select :items="houses" v-model="value" label="Filtrar por casa" clearable />
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      value: this.modelValue || '',
      houses: ['', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
    }
  },
  watch: {
    value(v) { this.$emit('update:modelValue', v) }
  }
}
</script>
