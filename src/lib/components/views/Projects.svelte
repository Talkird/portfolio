<script lang="ts">
  import Button from "../ui/Button.svelte";
  import sentiment from "../../../assets/projects/sentiment.png";
  import { ExternalLink } from "lucide-svelte";
</script>

<div
  class="flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-blue-300 to-violet-300 p-12"
  id="projects"
>
  <h1 class="text-8xl text-neutral font-bold mb-12">Projects</h1>
  <div
    class="w-full max-w-6xl flex gap-8 justify-center items-center bg-neutral text-light p-6 rounded-lg shadow-lg shadow-neutral"
  >
    <img src={sentiment} alt="Placeholder" class="object-cover shadow-md" />

    <div class="flex flex-col gap-8">
      <div>
        <h1 class="text-4xl text-light font-bold">Sentiment</h1>
        <p class="text-lg">
          An electron app that allows users to extract valuable information from
          twitter posts. Powered using Selenium and Python.
        </p>
      </div>
      <div>
        <Button
          className="bg-gradient-to-r from-blue-300 to-violet-300 text-neutral font-bold text-xl px-8 py-4 hover:scale-105 duration-300"
        >
          <ExternalLink /> Check the code out on GitHub
        </Button>
      </div>
    </div>
  </div>
</div>
