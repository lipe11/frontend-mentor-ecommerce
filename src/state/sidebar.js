import { writable } from 'svelte/store'

const links = ['Collections', 'Men', 'Women', 'About', 'Contact']
const visible = writable(false)

export default {
  visible,
  links,
  toggle() {
    visible.update((val) => !val)
  },
}
