<script>
  import IconButton from './IconButton.svelte'
  export let icon
  export let onClick
  export let style
</script>

<div class="relative" {style}>
  <IconButton {icon} {onClick} large />
</div>

<style lang="scss">
  @import '../styles/shared';
  .relative {
    position: relative;
    @include round;
    @include background-white;
  }
</style>
