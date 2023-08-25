<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="card h-100">
    <img :src="card.card_images[0].image_url" alt="card">
    <div class="card-body d-flex flex-column">
      <strong class="text-center mb-3">{{ card.name }}</strong>
      <div class="mt-auto text-center">{{ card.archetype }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>