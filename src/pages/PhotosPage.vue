<template>
  <div>
    <v-container>
      <PhotoForm @addPhoto="addPhoto" />
      <v-row>
        <Photo
          v-for="photo in getAllPhotos"
          :key="photo.id"
          :photo="photo"
        />
      </v-row>
      <PhotoDialog />
    </v-container>
  </div>
</template>

<script>
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";
import {mapGetters, mapActions, mapMutations} from "vuex";

export default {
  components: {PhotoDialog, Photo, PhotoForm },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getAllPhotos'])
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    ...mapMutations(['addNewPhoto']),
    addPhoto(photo) {
      this.addNewPhoto(photo);
    }
  },
  mounted() {
    this.fetchPhotos();
  }
}
</script>

<style lang="scss" scoped>

</style>