<script lang="ts">
  import Separator from "./lib/components/Separator.svelte";
  import Navbar from "./lib/components/navbar/Navbar.svelte";
  import Introduction from "./lib/components/views/Introduction.svelte";
  import AboutMe from "./lib/components/views/AboutMe.svelte";
  import Projects from "./lib/components/views/Projects.svelte";
  import Skills from "./lib/components/views/Skills.svelte";
  import Footer from "./lib/components/footer/Footer.svelte";
</script>

<main>
  <Navbar />
  <Introduction />
  <Separator />
  <AboutMe />
  <Separator />
  <Projects />
  <Separator />
  <Skills />
  <Footer />
</main>
