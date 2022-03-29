<script>
  import ImageGallery from './ImageGallery.svelte'
  import IconButton from './IconButton.svelte'
  import gallery from '../state/gallery'
  const { modalOpened } = gallery
</script>

{#if $modalOpened}
  <div class="modal">
    <div class="overlay" on:click={gallery.toggleModal} />
    <div class="gallery">
      <div class="close">
        <IconButton icon="close-white" onClick={gallery.toggleModal} />
      </div>
      <ImageGallery modalStyle />
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../styles/shared';
  .modal {
    display: none;
  }
  @media (min-width: $desktop-breakpoint) {
    .modal {
      @include fullscreen;
      place-items: center;
      display: grid;
      & > * {
        grid-column: 1;
        grid-row: 1;
      }
    }
    .overlay {
      @include overlay;
      z-index: 1;
    }
    .close {
      position: relative;
      text-align: right;
      top: -1em;
    }
    .gallery {
      max-width: 450px;
      z-index: 2;
    }
  }
</style>
