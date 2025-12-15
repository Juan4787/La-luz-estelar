<script lang="ts">
  export let id: string = '';
  export let className: string = '';
</script>

<section {id} class="relative py-16 md:py-24 border-b border-white/[0.08] last:border-0 {className}">
  <div class="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
    <slot />
  </div>
</section>
