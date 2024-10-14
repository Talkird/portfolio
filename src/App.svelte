<script lang="ts">
  import Separator from "./lib/components/Separator.svelte";
  import Navbar from "./lib/components/navbar/Navbar.svelte";
  import Introduction from "./lib/components/Introduction.svelte";
  import AboutMe from "./lib/components/AboutMe.svelte";
</script>

<main>
  <Navbar />
  <Introduction />
  <Separator id="aboutme" />
  <AboutMe />
  <Separator />
  <AboutMe />
</main>
