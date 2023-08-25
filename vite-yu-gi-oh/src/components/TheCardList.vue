<script>

import { store , fetchCards } from "../store"
import TheCard from "./TheCard.vue"
export default {
  components: {
    TheCard,
  },
  data() {
    return {
      store
    }
  },
  mounted(){
    fetchCards();
  }
}
</script>

<template>
  <div class="row gy-3">
    <div class="col-3" v-for="singleCard in store.cards">
      <TheCard :card="singleCard" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>