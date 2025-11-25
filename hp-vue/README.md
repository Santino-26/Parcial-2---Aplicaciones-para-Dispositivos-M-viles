# Santino Iuvaro - Diseño y Desarrollo Web - DWM3AP
# Parcial 2 - Aplicaciones para Dipositivos Móviles

**Descripción**  
Aplicación hecha en Vue 3 + Vite + Vuetify que muestra personajes de Harry Potter usando la API pública: https://hp-api.onrender.com/api/characters

**Qué funciona**
- Listado de personajes con imagen y nombre.
- Búsqueda por nombre (frontend).
- Filtro por casa (Gryffindor, Slytherin, Hufflepuff, Ravenclaw).
- Vista de detalle (nombre, casa, actor/actriz, especie, ascendencia, fecha de nacimiento, patronus, varita).
- Agregar / quitar favoritos (guardado en localStorage) y vista de Favoritos.
- UI con Vuetify, diseño mobile-first.

**Qué NO está implementado (por decisión para esta entrega)**
- Autenticación / usuarios.
- Tests automatizados.
- indexedDB / base de datos (se usa localStorage).
- Paginación / lazy-loading de imágenes.

**Instalación & ejecución**
```bash
npm install
npm install vue-router@4
npm install vuetify@3 sass
npm run dev
