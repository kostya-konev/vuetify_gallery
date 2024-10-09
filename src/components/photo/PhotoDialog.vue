<template>
  <v-dialog
    v-model="$store.getters.getIsDialogOpen"
    max-width="600"
    @click:outside="$store.commit('hideDialog')"
  >
    <v-card>
      <v-card-title>{{ fullPhotoTitle }}</v-card-title>
      <v-card-text>
        <v-img :src="$store.getters.getCurrentPhoto.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isDialogOpenLocal: false,
    }
  },
  computed: {
    fullPhotoTitle() {
      return `Name of the photo. ${this.$store.getters.getCurrentPhoto.title}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>