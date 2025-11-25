const KEY = 'hp_favoritos_v1'

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

export function isFavorite(name) {
  return getFavorites().includes(name)
}

export function addFavorite(name) {
  const fav = getFavorites()
  if (!fav.includes(name)) {
    fav.push(name)
    localStorage.setItem(KEY, JSON.stringify(fav))
  }
}

export function removeFavorite(name) {
  let fav = getFavorites()
  fav = fav.filter(n => n !== name)
  localStorage.setItem(KEY, JSON.stringify(fav))
}
