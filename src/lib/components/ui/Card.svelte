<script lang="ts">
  export let className: string = '';
</script>

<div class="bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg {className}">
  <slot />
</div>
