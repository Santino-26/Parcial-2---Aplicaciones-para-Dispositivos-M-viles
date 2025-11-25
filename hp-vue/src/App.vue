<template>
  <v-app>
    <v-app-bar app flat color="transparent">
      <v-toolbar-title class="app-title">Harry Potter — Personajes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Inicio</v-btn>
      <v-btn text to="/favoritos">Favoritos</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.app-title { font-weight:700; letter-spacing:0.2px; }
.muted { color: rgba(255,255,255,0.6); }
</style>
