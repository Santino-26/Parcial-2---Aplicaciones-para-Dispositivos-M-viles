<template>
  <v-select v-model="value" :items="houses" label="Casa" clearable dense hide-details />
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      value: this.modelValue || '',
      houses: ['', 'Gryffindor','Slytherin','Hufflepuff','Ravenclaw']
    }
  },
  watch: {
    value(v) { this.$emit('update:modelValue', v) }
  }
}
</script>
