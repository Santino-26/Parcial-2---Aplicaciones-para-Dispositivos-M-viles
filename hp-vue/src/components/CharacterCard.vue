<template>
  <v-card class="character-card">
    <v-img v-if="character.image" :src="character.image" class="character-img" cover></v-img>
    <div v-else class="character-img center muted">Sin imagen</div>

    <div class="character-body">
      <div>
        <div class="character-name">{{ character.name }}</div>
        <div class="character-sub">{{ character.house || 'Sin casa' }}</div>
      </div>

      <div class="card-actions">
        <v-btn small :to="detailLink" text>Ver</v-btn>
        <v-btn small @click="toggleFav" :class="isFav ? 'v-btn--outlined' : ''" color="secondary">
          {{ isFav ? 'Quitar' : 'Favorito' }}
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import { ref } from 'vue'
import { isFavorite, addFavorite, removeFavorite } from '../utils/favorites'

export default {
  name: 'CharacterCard',
  props: { character: { type: Object, required: true } },
  setup(props) {
    const isFav = ref(isFavorite(props.character.name))
    const detailLink = `/detalle/${encodeURIComponent(props.character.name)}`

    function toggleFav() {
      if (isFav.value) removeFavorite(props.character.name)
      else addFavorite(props.character.name)
      isFav.value = !isFav.value
    }

    return { isFav, toggleFav, detailLink }
  }
}
</script>

<style scoped>
.character-body { padding: 12px; }
</style>
