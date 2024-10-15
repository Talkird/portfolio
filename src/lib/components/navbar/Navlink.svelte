<script lang="ts">
  import classNames from "classnames";

  export let href: string;
  export let className: string | undefined = "";
  export let target: string | undefined = "";
</script>

<a
  {target}
  class={classNames(
    "flex items-center select-none justify-center gap-3 p-4 rounded-md hover:bg-light/10 hover:opacity-90 hover:text-accent text-light font-medium text-xl transition",
    className
  )}
  {href}
>
  <slot></slot>
</a>
