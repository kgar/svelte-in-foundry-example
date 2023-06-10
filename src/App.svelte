<!-- App.svelte -->
<script>
  import { count } from "./stores/test-store";

  export let name = "world";

  function increment() {
    count.update((n) => n + 1);
  }
</script>

<div>Hello {name}!</div>
<p>Just trying to get this work!</p>
<button on:click={increment}>Clicked {$count} times</button>

<style>
  button {
    color: rebeccapurple;
  }
</style>
