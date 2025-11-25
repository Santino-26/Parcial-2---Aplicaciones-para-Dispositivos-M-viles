const BASE = 'https://hp-api.onrender.com/api/characters'

export async function fetchAllCharacters() {
  const res = await fetch(BASE)
  if (!res.ok) throw new Error('Error al obtener personajes')
  return res.json()
}
