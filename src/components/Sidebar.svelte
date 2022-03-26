<script>
  import IconButton from './IconButton.svelte'
  import sidebar from '../state/sidebar'
  import { fly } from 'svelte/transition'
  const { visible } = sidebar
</script>

{#if $visible}
  <div class="sidebar">
    <div class="overlay" on:click={sidebar.toggle} />
    <nav class="panel" in:fly={{ x: -200, duration: 200 }}>
      <div class="close">
        <IconButton icon="close" large onClick={sidebar.toggle} />
      </div>
      <ul>
        {#each sidebar.links as link}
          <li><a href="/" alt="nowhere">{link}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
{/if}

<style lang="scss">
  @import '../styles/shared.scss';
  .panel {
    @include background-white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: $sidebar;
    padding: 6em 2em;
    z-index: 2;
    & ul {
      @include column;
      gap: 1.5em;
      & a {
        @include medium;
        @include dark;
        @include bold;
        &:hover {
          @include primary;
        }
      }
    }
  }
  .overlay {
    @include overlay;
    z-index: 2;
  }
  .close {
    display: block;
    position: absolute;
    top: 1em;
    left: 1em;
    z-index: 3;
  }
  @media (min-width: $desktop-breakpoint) {
    .sidebar {
      display: none;
    }
  }
</style>
