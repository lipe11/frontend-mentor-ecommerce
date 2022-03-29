<script>
  import { fly } from 'svelte/transition'
  export let icon
  export let large = false
  export let tag = 0
  export let onClick
</script>

<button
  class="dropdown-button"
  class:large
  style="background-image: url({`/images/icon-${icon}.svg`})"
  on:click|stopPropagation={onClick()}
>
  <slot />
  <span>{icon}</span>
  {#if tag > 0}
    <div class="tag" in:fly>{tag}</div>
  {/if}
</button>

<style lang="scss">
  @import '../styles/shared.scss';
  .dropdown-button {
    @include box;
    @include background-image;
    & span {
      color: transparent;
      position: absolute;
    }
  }
  .large {
    @include box-large;
  }
  .tag {
    @include background-primary;
    @include smaller;
    @include bold;
    @include rounded;
    position: relative;
    top: -8px;
    left: 8px;
  }
  @media (min-width: $desktop-breakpoint) {
    .dropdown-button {
      position: relative;
    }
  }
</style>
