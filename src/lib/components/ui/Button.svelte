<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let className: string = '';

  const baseStyles = "inline-flex items-center justify-center rounded-2xl transition-all duration-300 font-medium text-base px-8 py-4";
  
  const variants = {
    primary: "bg-dorado text-noche hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(246,230,168,0.3)] active:scale-[0.98]",
    secondary: "bg-transparent border border-white/10 text-texto-principal hover:bg-white/5 active:scale-[0.98]",
    ghost: "bg-transparent text-texto-principal hover:text-dorado hover:bg-white/5"
  };
</script>

{#if href}
  <a {href} class="{baseStyles} {variants[variant]} {className}" {...$$restProps}>
    <slot />
  </a>
{:else}
  <button {type} class="{baseStyles} {variants[variant]} {className}" {...$$restProps}>
    <slot />
  </button>
{/if}
