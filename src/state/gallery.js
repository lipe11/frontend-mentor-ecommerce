import { writable } from 'svelte/store'
import { images, thumbs } from './catalog'

const modalOpened = writable(false)
const index = writable(0)

const min = 0
const max = images.length - 1

export default {
  modalOpened,
  index,
  images,
  thumbs,
  set(newIndex) {
    index.set(newIndex)
  },
  next() {
    index.update((current) => (current === max ? min : current + 1))
  },
  prev() {
    index.update((current) => (current === min ? max : current - 1))
  },
  toggleModal() {
    modalOpened.update((current) => !current)
  },
}
