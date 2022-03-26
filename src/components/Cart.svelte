<script>
  import CartItem from './CartItem.svelte'
  import cart from '../state/cart'
  import { fly, blur } from 'svelte/transition'
  const { quantity, visible } = cart
</script>

{#if $visible}
  <div class="cart" in:fly={{ y: -50, duration: 200 }}>
    <h3 class="cart-title">Cart</h3>
    <div class="cart-content">
      {#if $quantity}
        <CartItem />
        <button class="checkout">Checkout</button>
      {:else}
        <strong in:blur={{ duration: 200 }}> Your cart is empty. </strong>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../styles/shared.scss';
  .cart {
    @include font;
    @include shadow;
    @include rounded;
    @include background-white;
    position: absolute;
    top: 5em;
    left: 1em;
    right: 1em;
    z-index: 1;
  }
  .cart-title {
    @include border-bottom;
    padding: 1.5em 1em;
    text-align: left;
  }
  .cart-content {
    @include column;
    justify-content: center;
    padding: 1em;
    gap: 1.5em;
    min-height: 14em;
  }
  .checkout {
    @include primary-button;
  }
  @media (min-width: $desktop-breakpoint) {
    .cart {
      top: 3em;
      right: -3em;
      left: -19em;
    }
    .cart-content {
      min-height: 12em;
    }
  }
</style>
