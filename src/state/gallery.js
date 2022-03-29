import { get, writable } from 'svelte/store'
import { images, thumbs } from './catalog'

const modalOpened = writable(false)
const galleryIndex = writable(0)
const modalIndex = writable(0)

const min = 0
const max = images.length - 1

let currentIndex = galleryIndex
modalOpened.subscribe(
  (opened) => (currentIndex = opened ? modalIndex : galleryIndex)
)

export default {
  modalOpened,
  galleryIndex,
  modalIndex,
  images,
  thumbs,
  set(newIndex) {
    currentIndex.set(newIndex)
  },
  next() {
    currentIndex.update((current) => (current === max ? min : current + 1))
  },
  prev() {
    currentIndex.update((current) => (current === min ? max : current - 1))
  },
  toggleModal() {
    modalOpened.update((opened) => {
      if (!opened) {
        modalIndex.set(get(galleryIndex))
      }
      return !opened
    })
  },
}
