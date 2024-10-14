<script lang="ts">
  import classNames from "classnames";
  import Navlink from "./Navlink.svelte";
  import { BookText, Github, Linkedin } from "lucide-svelte";

  const sectionLinks: { href: string; text: string }[] = [
    {
      href: "#aboutme",
      text: "About me",
    },
    {
      href: "#projects",
      text: "Projects",
    },
    {
      href: "#skills",
      text: "Skills",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];

  const contactLinks: { href: string; icon: any; text: string }[] = [
    {
      href: "https://drive.google.com/file/d/1XFi0-eNCUpmy137IRp_avL0y9h18BNcC/view?usp=drive_link",
      icon: BookText,
      text: "CV",
    },
    {
      href: "https://github.com/Talkird/",
      icon: Github,
      text: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/losauro-juan-6a2745299/",
      icon: Linkedin,
      text: "LinkedIn",
    },
  ];

  export let className: string | undefined = "";
</script>

<nav
  class={classNames(
    "flex items-center p-4 justify-between bg-neutral",
    className
  )}
>
  <!-- Left div -->
  <div class="flex items-center p-4 gap-6">
    {#each sectionLinks as link}
      <Navlink href={link.href}>{link.text}</Navlink>
    {/each}
  </div>

  <!-- Right div -->
  <div class="flex items-center p-4 gap-6">
    {#each contactLinks as link}
      <Navlink target="_blank" href={link.href}>
        <svelte:component this={link.icon} size={24} />
        {link.text}
      </Navlink>
    {/each}
  </div>
</nav>
