import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  cards: [],
  archetypes: [],
});

export function fetchCards() {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

  axios.get(url).then((response) => {
    store.cards = response.data.data;
  });
}

export function fetchArchetypes() {
  const url = "https://db.ygoprodeck.com/api/v7/archetypes.php";

  axios.get(url).then((response) => {
    store.archetypes = response.data;
  });
}
