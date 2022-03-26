import { writable, derived } from 'svelte/store'
import { product, thumbs } from './catalog'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const visible = writable(false)
const quantity = writable(0)
const total = derived(quantity, ($quantity) =>
  formatter.format($quantity * product.price)
)

export default {
  visible,
  product,
  thumbs,
  quantity,
  total,
  add(n) {
    quantity.update((current) => current + n)
  },
  empty() {
    quantity.set(0)
  },
  toggle() {
    visible.update((current) => !current)
  },
}
