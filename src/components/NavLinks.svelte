<script>
  export let links
</script>

<nav class="links">
  <ul>
    {#each links as link}
      <li><a href="/">{link}</a></li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @import '../styles/shared.scss';
  .links {
    display: none;
  }
  @media (min-width: $desktop-breakpoint) {
    .links {
      display: block;
    }
    ul {
      @include row;
      gap: 2ch;
      & a {
        @include neutral;
        display: inline-block;
        padding: 2em 0;
        border-top: 8px solid transparent;
        border-bottom: 3px solid transparent;
        &:hover {
          border-bottom: 3px solid $orange;
        }
      }
    }
  }
</style>
