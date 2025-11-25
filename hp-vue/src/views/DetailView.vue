<template>
  <v-container class="app-container">
    <div v-if="!character.name" class="center" style="height:200px">Personaje no encontrado</div>

    <div v-else class="detail-grid">
      <div class="detail-card">
        <v-img v-if="character.image" :src="character.image" height="350" cover />
        <div v-else class="center muted" style="height:350px">Sin imagen</div>

        <div style="margin-top:12px; display:flex; gap:8px;">
          <div v-if="isFav" class="fav-chip">Favorito</div>
          <v-btn small @click="toggleFav">{{ isFav ? 'Quitar favorito' : 'Agregar favorito' }}</v-btn>
        </div>
      </div>

      <div class="detail-card">
        <h1>{{ character.name }}</h1>
        <p><strong>Casa:</strong> <span class="muted">{{ character.house || '—' }}</span></p>
        <p><strong>Actor:</strong> <span class="muted">{{ character.actor || '—' }}</span></p>
        <p><strong>Especie:</strong> <span class="muted">{{ character.species || '—' }}</span></p>
        <p><strong>Ancestry:</strong> <span class="muted">{{ character.ancestry || '—' }}</span></p>
        <p v-if="character.dateOfBirth"><strong>Fecha de nacimiento:</strong> <span class="muted">{{ character.dateOfBirth }}</span></p>
        <p v-if="character.patronus"><strong>Patronus:</strong> <span class="muted">{{ character.patronus }}</span></p>

        <div style="margin-top:16px;">
          <h3>Varita</h3>
          <p class="muted">Madera: {{ character.wand?.wood || '—' }} · Núcleo: {{ character.wand?.core || '—' }} · Longitud: {{ character.wand?.length || '—' }}</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { fetchAllCharacters } from '../services/hpService'
import { isFavorite, addFavorite, removeFavorite } from '../utils/favorites'

export default {
  props: ['name'],
  setup(props) {
    const character = ref({})
    const isFav = ref(false)

    onMounted(async () => {
      const all = await fetchAllCharacters()
      const match = all.find(p => p.name === decodeURIComponent(props.name))
      if (match) {
        character.value = match
        isFav.value = isFavorite(match.name)
      }
    })

    function toggleFav() {
      if (isFav.value) removeFavorite(character.value.name)
      else addFavorite(character.value.name)
      isFav.value = !isFav.value
    }

    return { character, isFav, toggleFav }
  }
}
</script>
