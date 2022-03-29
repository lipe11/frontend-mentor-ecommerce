<script>
  import gallery from '../state/gallery'
  const { galleryIndex, modalIndex } = gallery
  export let modalStyle

  $: index = modalStyle ? $modalIndex : $galleryIndex
</script>

<div class="thumbs">
  {#each gallery.thumbs as thumb, i}
    <div class={index === i ? 'thumb active' : 'thumb'}>
      <img src={thumb} alt="thumb" on:click={() => gallery.set(i)} />
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../styles/shared.scss';
  .thumbs {
    display: none;
  }
  @media (min-width: $desktop-breakpoint) {
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
