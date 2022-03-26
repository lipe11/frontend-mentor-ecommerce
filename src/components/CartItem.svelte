<script>
  import IconButton from './IconButton.svelte'
  import cart from '../state/cart'
  const { product, thumbs, quantity, total, empty } = cart
  const thumb = thumbs[0]
</script>

<div class="cart-item">
  <img src={thumb} alt="thumb" />
  <p class="details">
    {product.name} <br />
    {product.salePrice} x {$quantity} <strong>{$total}</strong>
  </p>
  <div>
    <IconButton icon="delete" onClick={empty} />
  </div>
  <div />
</div>

<style lang="scss">
  @import '../styles/shared';
  .cart-item {
    @include row-spaced;
    text-align: left;
  }
  img {
    max-height: 3em;
    border-radius: 5px;
  }
  .details {
    @include stretch;
    line-height: 1.5;
  }
</style>
