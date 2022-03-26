<script>
  import FloatButton from './FloatButton.svelte'
  export let url
  export let onNext
  export let onPrev
  export let onClick
  export let modalStyle = false
  $: prevStyle = modalStyle ? 'left: -1.5em' : 'left: 1em'
  $: nextStyle = modalStyle ? 'right: -1.5em' : 'right: 1em'
</script>

<div class="cover-image">
  <div class="controls" class:modalStyle>
    <FloatButton icon="previous" onClick={onPrev} style={prevStyle} />
    <FloatButton icon="next" onClick={onNext} style={nextStyle} />
  </div>
  <div class="image" style="background-image: url({url})" on:click={onClick} />
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
  }
  .controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .modalStyle {
    display: flex !important;
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
  }
</style>
