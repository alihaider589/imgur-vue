import api from '../../api/imgur'

const state = {
    images: []
}
const getters = {
    allImages: state => state.images
}
const actions = {
    fetchImages() {
api.fetchImages()
    }
}
const mutations = {
    SetImage: (state, images) => {
        state.images = images
    }
}