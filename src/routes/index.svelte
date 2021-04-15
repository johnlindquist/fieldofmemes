<script context="module">
  export async function preload() {
    const res = await this.fetch(`images.json`);
    const images = await res.json();

    return { images };
  }
</script>

<script>
  export let images;
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }


  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  .container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
  }

</style>

<svelte:head>
  <title>Field of Memes</title>
</svelte:head>

<h1>Field of Memes</h1>

<div class="container">
  {#each images as image}
    <img src={image} alt="" loading="lazy" />
  {/each}
</div>
