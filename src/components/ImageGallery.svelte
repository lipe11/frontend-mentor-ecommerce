<script>
  import ImageSlider from './ImageSlider.svelte'
  import ThumbSelector from './ThumbSelector.svelte'
  export let modalStyle = false
</script>

<div class="gallery">
  <ImageSlider {modalStyle} />
  <ThumbSelector {modalStyle} />
</div>

<style lang="scss">
  @import '../styles/shared.scss';
  @media (min-width: $desktop-breakpoint) {
    .gallery {
      @include column;
      gap: 2em;
      max-width: $column-width;
    }
  }
</style>
