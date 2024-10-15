<script lang="ts">
  import Button from "../ui/Button.svelte";
  import { BookText } from "lucide-svelte";
</script>

<div
  class="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-blue-300 to-violet-300 p-12"
>
  <h1 class="text-8xl text-neutral font-bold">Juan Andrés Losauro</h1>
  <h2 class="text-5xl text-neutral/80 font-semibold">
    Information Technology Analyst
  </h2>
  <Button className="mt-24 px-8 py-4 text-3xl hover:scale-105 duration-300"
    ><BookText />Download CV</Button
  >
</div>
