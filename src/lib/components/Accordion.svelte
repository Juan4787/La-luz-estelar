<script lang="ts">
  let isOpen = false;
  export let title: string;
  let contentEl: HTMLDivElement;
  
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="border-b border-white/10">
  <button
    on:click={toggle}
    class="w-full py-6 flex items-center justify-between text-left hover:text-eva-neon transition-colors duration-300"
  >
    <span class="text-lg md:text-xl font-semibold pr-4">{title}</span>
    <svg
      class="w-6 h-6 transition-transform duration-300 flex-shrink-0"
      class:rotate-180={isOpen}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
  
  <div
    bind:this={contentEl}
    class="overflow-hidden transition-all duration-300"
    style="max-height: {isOpen ? contentEl?.scrollHeight + 'px' : '0'}"
  >
    <div class="pb-6 text-eva-text-secondary leading-relaxed">
      <slot />
    </div>
  </div>
</div>
