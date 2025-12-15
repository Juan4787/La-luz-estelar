<script lang="ts">
  import Section from '../ui/Section.svelte';
</script>

<Section className="relative overflow-hidden">
  <!-- Background Glow -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[500px] bg-lavanda/5 blur-[120px] rounded-full pointer-events-none"></div>

  <div class="relative z-10 max-w-4xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-serif font-bold mb-8 text-texto-principal">
        Lo vas a cerrar… y algo adentro se acomoda.
      </h2>
      
      <ul class="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left mx-auto max-w-2xl">
        <li class="flex items-start gap-4">
          <div class="w-6 h-6 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 mt-1">
            <svg class="w-4 h-4 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-texto-suave text-lg">Una sensación de calma real, sin esfuerzo.</span>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-6 h-6 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 mt-1">
            <svg class="w-4 h-4 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-texto-suave text-lg">Un lenguaje simple para hablar de lo invisible con los chicos.</span>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-6 h-6 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 mt-1">
            <svg class="w-4 h-4 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-texto-suave text-lg">Una mirada nueva: menos miedo, más amor.</span>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-6 h-6 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 mt-1">
            <svg class="w-4 h-4 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-texto-suave text-lg">Un recordatorio íntimo: <strong class="text-texto-principal font-medium">no estás solo</strong>.</span>
        </li>
      </ul>
    </div>

    <div class="relative mt-20 text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-6xl text-dorado/20 font-serif">"</div>
      <blockquote class="relative z-10">
        <p class="text-2xl md:text-3xl font-serif italic text-texto-principal mb-4 leading-relaxed">
          “Nada real puede ser amenazado. Nada irreal existe.”
        </p>
        <footer class="text-dorado font-medium tracking-wide">
          En eso radica la paz.
        </footer>
      </blockquote>
    </div>
  </div>
</Section>
