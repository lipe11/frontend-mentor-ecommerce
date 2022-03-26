<script>
  import CoverImage from './CoverImage.svelte'
  import gallery from '../state/gallery'
  const { currentImage, index } = gallery
  export let modalStyle = false
</script>

<div class="gallery">
  <CoverImage
    url={$currentImage}
    onPrev={gallery.prev}
    onNext={gallery.next}
    onClick={gallery.toggleModal}
    {modalStyle}
  />
  <div class="thumbs">
    {#each gallery.thumbs as thumb, i}
      <div class={$index === i ? 'thumb active' : 'thumb'}>
        <img src={thumb} alt="thumb" on:click={() => gallery.set(i)} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import '../styles/shared.scss';
  .thumbs {
    display: none;
  }
  @media (min-width: $desktop-breakpoint) {
    .gallery {
      @include column;
      gap: 2em;
      max-width: $column-width;
    }
    .thumbs {
      @include row-spaced;
    }
    .thumb {
      @include rounded;
      overflow: hidden;
      background-color: $white;
      & img {
        display: block;
        max-width: 100%;
      }
      & img:hover {
        opacity: 0.7;
      }
    }
    .active {
      @include outline;
      & img {
        opacity: 0.4;
      }
    }
  }
</style>
