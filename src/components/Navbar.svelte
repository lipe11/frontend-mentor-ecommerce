<script>
  import IconButton from './IconButton.svelte'
  import NavLinks from './NavLinks.svelte'
  import Cart from './Cart.svelte'
  import cart from '../state/cart'
  import sidebar from '../state/sidebar'
  const { quantity } = cart
</script>

<div class="navbar">
  <div class="row">
    <div class="menu">
      <IconButton icon="menu" onClick={sidebar.toggle} />
    </div>
    <div class="logo" />
    <NavLinks links={sidebar.links} />
  </div>
  <div class="row">
    <IconButton icon="cart" tag={$quantity} onClick={cart.toggle}>
      <Cart />
    </IconButton>
    <div class="avatar" on:click={cart.toggle} />
  </div>
</div>

<style lang="scss">
  @import '../styles/shared.scss';
  .navbar {
    @include row-spaced;
    min-height: 4em;
  }
  .row {
    @include row;
  }
  .logo {
    width: 138px;
    height: 20px;
    background-image: url('/images/logo.svg');
  }
  .avatar {
    @include box;
    @include round;
    @include cover-image;
    background-image: url('/images/image-avatar.png');
  }
  @media (min-width: $desktop-breakpoint) {
    .navbar {
      @include border-bottom;
      padding: 0 0.5em;
    }
    .menu {
      display: none;
    }
    .avatar {
      @include box-medium;
    }
  }
</style>
