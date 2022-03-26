<script>
  import IconButton from './IconButton.svelte'
  import cart from '../state/cart'
  let quantity = 0

  function decrement() {
    if (quantity > 0) quantity -= 1
  }

  function increment() {
    quantity += 1
  }

  function addToCart() {
    if (quantity > 0) {
      cart.add(quantity)
      quantity = 0
    }
  }
</script>

<div class="column">
  <div class="plus-minus">
    <IconButton large icon="minus" onClick={decrement} />
    <span>{quantity}</span>
    <IconButton large icon="plus" onClick={increment} />
  </div>
  <button class="primary-button" on:click={addToCart}>
    <span class="white-cart-icon" />
    <span>Add to cart</span>
  </button>
</div>

<style lang="scss">
  @import '../styles/shared';
  .column {
    @include column;
  }
  .plus-minus {
    @include row-spaced;
    @include background-light;
    @include rounded;
  }
  .plus-minus > span {
    @include bold;
    text-align: center;
    min-width: 2ch;
  }
  .primary-button {
    @include primary-button;
  }
  .white-cart-icon {
    @include box-small;
    background-image: url('/images/icon-cart-white.svg');
    background-size: cover;
  }
  @media (min-width: $buttons-breakpoint) {
    .column {
      flex-direction: row;
    }
  }
</style>
