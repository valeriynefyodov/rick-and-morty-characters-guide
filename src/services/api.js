import axios from "axios";

const client = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export function getCharacters({ page, name, species }) {
  const urlQuery = new URLSearchParams();

  if (page) {
    urlQuery.set("page", page);
  }

  if (name) {
    urlQuery.set("name", name);
  }

  if (species) {
    urlQuery.set("species", species);
  }

  return client.get(`/character?${urlQuery.toString()}`);
}

export function getCharacter(id) {
  return client.get(`/character/${id}`);
}
