import axios from 'axios';

export default {
  state: {
    photos: [],
    isDialogOpen: false,
    currentPhoto: {}
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
    getIsDialogOpen(state) {
      return state.isDialogOpen;
    },
    getCurrentPhoto(state) {
      return state.currentPhoto;
    }
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
    showDialog(state) {
      state.isDialogOpen = true;
    },
    hideDialog(state) {
      state.isDialogOpen = false;
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload;
    },
    addNewPhoto(state, payload) {
      state.photos.push(payload);
    }
  },
  actions: {
    fetchPhotos(context) {
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
        .then(response => context.commit('setPhotos', response.data));
    }
  }
}