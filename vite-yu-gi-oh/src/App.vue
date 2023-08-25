<script>
import TheHeader from './components/TheHeader.vue';
import TheCardList from './components/TheCardList.vue';
import TheCard from './components/TheCard.vue';
import { store , fetchArchetypes } from "./store"
export default {
    components: { 
      TheHeader,
      TheCard,
      TheCardList,
      
    },

    data() {
    return {
      store
    }
  },
  mounted(){
    fetchArchetypes();
  }
}


</script>

<template>
  <TheHeader></TheHeader>
  <main>
    <div class="container p-5">
      <select class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected v-for="archetype in store.archetypes" >{{ archetype.archetype_name }}></option>
</select>
  </div>
  <div class="container p-5">
    <TheCardList></TheCardList>
  </div>

  </main>


</template>

<style lang="scss">
.container {
  background-color: #d48f38;
}
.colorbutton {
  background-color: white;
  border-radius: 0;
}
</style>
