<template>
  <v-container class="app-container">
    <v-row class="mb-4" align="center">
      <v-col cols="12" sm="6">
        <v-text-field v-model="query" label="Buscar personaje..." clearable hide-details dense />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select v-model="house" :items="houses" label="Filtrar por casa" clearable dense hide-details />
      </v-col>
      <v-col cols="12" sm="2" class="center">
        <v-btn icon @click="resetFilters" title="Reset">
          <v-icon>mdi-filter-remove</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <div v-if="loading" class="center" style="height:160px">Cargando...</div>

    <v-row v-else>
      <v-col cols="12" sm="6" md="4" v-for="c in filtered" :key="c.name">
        <character-card :character="c" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import CharacterCard from '../components/CharacterCard.vue'
import { fetchAllCharacters } from '../services/hpService'

export default {
  components: { CharacterCard },
  setup() {
    const chars = ref([])
    const query = ref('')
    const house = ref('')
    const loading = ref(true)
    const houses = ['', 'Gryffindor','Slytherin','Hufflepuff','Ravenclaw']

onMounted(async () => {
  try {
    const all = await fetchAllCharacters()

    const withImage = all.filter(c => c.image && c.image.trim() !== '')

    function uniqueByName(arr) {
      const map = new Map()
      for (const item of arr) {
        const key = (item.name || '').trim().toLowerCase()
        if (!map.has(key) && key) map.set(key, item)
      }
      return Array.from(map.values())
    }

    chars.value = uniqueByName(withImage)

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})

    const filtered = computed(() =>
      chars.value.filter(p => {
        const matchQuery = p.name?.toLowerCase().includes(query.value.toLowerCase())
        const matchHouse = house.value ? p.house === house.value : true
        return matchQuery && matchHouse
      })
    )

    function resetFilters() { query.value = ''; house.value = '' }

    return { chars, query, house, houses, filtered, loading, resetFilters }
  }
}
</script>
