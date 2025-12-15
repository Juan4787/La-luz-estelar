<script lang="ts">
  import Section from '../ui/Section.svelte';
</script>

<Section id="que-incluye" className="bg-profundo/10">
  <div class="grid md:grid-cols-2 gap-12 items-center">
    <div class="order-2 md:order-1">
      <h2 class="text-3xl md:text-4xl font-serif font-bold mb-8 text-texto-principal">
        Qué recibís al comprar
      </h2>

      <ul class="space-y-6 mb-8">
        <li class="flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 text-dorado">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <strong class="block text-texto-principal text-lg mb-1">PDF ilustrado (16 páginas)</strong>
            <span class="text-texto-suave">Listo para leer. Diseño cuidado y tipografía legible.</span>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 text-dorado">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <strong class="block text-texto-principal text-lg mb-1">Acceso inmediato</strong>
            <span class="text-texto-suave">Descarga automática tras la compra. Sin esperas.</span>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 text-dorado">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <strong class="block text-texto-principal text-lg mb-1">Multiformato</strong>
            <span class="text-texto-suave">Ideal para lectura en pantalla (celular/tablet) o para imprimir en casa.</span>
          </div>
        </li>
      </ul>

      <div class="bg-white/[0.04] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
        <p class="text-texto-suave italic text-sm leading-relaxed">
          <span class="text-dorado font-bold not-italic block mb-2">Nota de la autora:</span>
          Es un cuento inspirado en una mirada espiritual amorosa y profunda. No busca convencer, sino recordar.
        </p>
      </div>
    </div>

    <div class="order-1 md:order-2 flex justify-center">
      <div class="relative w-full max-w-sm aspect-[3/4] bg-profundo rounded-xl shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
        <img src="https://placehold.co/600x800/0B1430/F6E6A8?text=Interior+PDF" alt="Vista previa del PDF" class="w-full h-full object-cover rounded-xl opacity-80" />
        <div class="absolute inset-0 bg-gradient-to-t from-noche/50 to-transparent rounded-xl"></div>
      </div>
    </div>
  </div>
</Section>
