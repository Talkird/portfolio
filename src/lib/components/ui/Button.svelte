<script lang="ts">
  import { cva } from "class-variance-authority";
  import classNames from "classnames";

  const buttonVariants = cva(
    "px-4 py-2 transition rounded-md font-medium flex gap-3 items-center",
    {
      variants: {
        variant: {
          default: "bg-neutral text-light hover:opacity-90",
          outline:
            "border border-neutral text-neutral hover:bg-neutral hover:text-light",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  export let variant: "default" | "outline" = "default";
  export let className: string | undefined = "";
</script>

<button class={classNames(buttonVariants({ variant }), className)}>
  <slot></slot>
</button>
