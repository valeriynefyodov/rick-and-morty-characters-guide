const FAV_CHARS_LS_KEY = "FAV_CHARS";

export function getFavourites() {
  const favourites = localStorage.getItem(FAV_CHARS_LS_KEY);
  return favourites ? JSON.parse(favourites) : [];
}

export function setFavourites(favourites) {
  localStorage.setItem(FAV_CHARS_LS_KEY, JSON.stringify(favourites));
}
