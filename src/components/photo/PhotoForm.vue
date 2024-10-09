<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" />
      <v-file-input v-model="img" />
      <v-btn @click="addPhoto">Add photo</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      img: null
    }
  },
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.readAsDataURL(this.img);
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result
        };
        this.$emit('addPhoto', photo);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>