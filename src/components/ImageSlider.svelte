<script>
  import FloatButton from './FloatButton.svelte'
  import gallery from '../state/gallery'
  export let modalStyle = false
  const { galleryIndex, modalIndex } = gallery

  $: index = modalStyle ? $modalIndex : $galleryIndex
  $: prevStyle = modalStyle ? 'left: -1.5em' : 'left: 1em'
  $: nextStyle = modalStyle ? 'right: -1.5em' : 'right: 1em'
</script>

<div class="cover-image">
  <div class="controls" class:modalStyle>
    <FloatButton icon="previous" onClick={gallery.prev} style={prevStyle} />
    <FloatButton icon="next" onClick={gallery.next} style={nextStyle} />
  </div>
  {#each gallery.images as image, i}
    <div
      class="image"
      class:visible={i === index}
      style="background-image: url({image})"
      on:click={gallery.toggleModal}
    />
  {/each}
</div>

<style lang="scss">
  @import '../styles/shared.scss';
  .cover-image {
    display: grid;
    place-items: center;
    & > * {
      grid-row: 1;
      grid-column: 1;
    }
  }
  .image {
    @include cover-image;
    min-width: 100%;
    min-height: 400px;
    visibility: hidden;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .visible {
    visibility: visible !important;
  }
  @media (min-width: $desktop-breakpoint) {
    .cover-image {
      @include round;
    }
    .image {
      min-height: 480px;
      border-radius: 15px;
    }
    .controls {
      display: none;
    }
    .modalStyle {
      display: flex !important;
    }
  }
</style>
