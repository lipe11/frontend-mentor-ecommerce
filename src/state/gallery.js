import { writable, derived } from 'svelte/store'
import { images, thumbs } from './catalog'

const modalVisible = writable(false)
const index = writable(0)
const currentImage = derived(index, ($index) => {
  return images[$index]
})

const min = 0
const max = images.length - 1

export default {
  modalVisible,
  index,
  currentImage,
  thumbs,
  set(newIndex) {
    index.set(newIndex)
  },
  next() {
    index.update((current) => {
      return current === max ? min : current + 1
    })
  },
  prev() {
    index.update((current) => {
      return current === min ? max : current - 1
    })
  },
  toggleModal() {
    modalVisible.update((current) => !current)
  },
}
