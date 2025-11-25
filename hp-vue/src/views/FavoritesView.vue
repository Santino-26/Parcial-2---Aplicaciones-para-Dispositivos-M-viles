<template>
  <v-container class="app-container">
    <h2 class="favorites">Favoritos</h2>
    <div v-if="favChars.length === 0" class="center" style="height:150px">No hay favoritos aún</div>

    <v-row v-else>
      <v-col cols="12" sm="6" md="4" v-for="c in favChars" :key="c.name">
        <character-card :character="c" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import CharacterCard from '../components/CharacterCard.vue'
import { fetchAllCharacters } from '../services/hpService'
import { getFavorites } from '../utils/favorites'

export default {
  components: { CharacterCard },
  setup() {
    const favChars = ref([])

    onMounted(async () => {
      const all = await fetchAllCharacters()
      const favNames = getFavorites()
      favChars.value = all.filter(p => favNames.includes(p.name))
    })

    return { favChars }
  }
}
</script>
