<script lang="ts">
  import Button from "../ui/Button.svelte";
  import { BookText } from "lucide-svelte";
</script>

<div
  class="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-blue-300 to-violet-300"
>
  <h1 class="text-8xl text-neutral font-bold">Juan Andrés Losauro</h1>
  <h2 class="text-5xl text-neutral/80 font-semibold">
    Analista en Informática
  </h2>
  <Button className="mt-24 px-8 py-4 text-3xl"><BookText /> Download CV</Button>
</div>
