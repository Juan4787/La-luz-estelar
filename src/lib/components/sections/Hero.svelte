<script lang="ts">
  import Button from '../ui/Button.svelte';
  import Section from '../ui/Section.svelte';
</script>

<Section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-profundo/20 blur-[100px] rounded-full"></div>
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-dorado/5 blur-[80px] rounded-full"></div>
  </div>

  <div class="grid md:grid-cols-2 gap-12 items-center relative z-10">
    <!-- Text Content -->
    <div class="text-center md:text-left order-2 md:order-1">
      <h1 class="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-texto-principal">
        La luz que buscás afuera… <span class="text-dorado block mt-2">ya vive dentro de vos.</span>
      </h1>
      
      <p class="text-lg md:text-xl text-texto-suave mb-8 font-light leading-relaxed">
        <span class="italic font-serif text-dorado/80">Un cuento ilustrado para niños y adultos que no solo se lee: se siente.</span>
        <br>
        Una historia suave y simbólica para volver a la calma, la confianza y la presencia.
      </p>

      <ul class="space-y-3 mb-10 text-left max-w-md mx-auto md:mx-0">
        <li class="flex items-start gap-3 text-texto-suave/90">
          <svg class="w-5 h-5 text-dorado mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Lectura corta, profunda y amorosa (ideal para la noche).
        </li>
        <li class="flex items-start gap-3 text-texto-suave/90">
          <svg class="w-5 h-5 text-dorado mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Un puente simple para hablar de amor, miedo y “volver a casa”.
        </li>
        <li class="flex items-start gap-3 text-texto-suave/90">
          <svg class="w-5 h-5 text-dorado mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Espiritual, íntimo y sin dogmas: directo al corazón.
        </li>
      </ul>

      <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
        <div class="flex flex-col items-center">
          <Button href="https://pay.hotmart.com/E103406634Y?off=5iwa98p0" target="_blank" rel="noopener noreferrer" variant="primary" className="w-full sm:w-auto shadow-glow">
            Comprar ahora y leer hoy
          </Button>
          <span class="text-xs text-texto-suave/60 mt-2">Desde $15.000 · Acceso inmediato</span>
        </div>
        <Button href="#muestra" variant="ghost" className="w-full sm:w-auto">
          Ver una muestra
        </Button>
      </div>

      <div class="mt-12 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-texto-suave/60">
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Acceso inmediato
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          PDF ilustrado
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Lectura para compartir
        </span>
      </div>
    </div>

    <!-- Image/Visual -->
    <div class="order-1 md:order-2 relative">
      <div class="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
        <div class="absolute inset-0 bg-gradient-to-t from-noche/80 via-transparent to-transparent z-10"></div>
        <!-- Placeholder for Book Cover -->
        <div class="w-full h-full bg-profundo flex items-center justify-center text-texto-suave/20">
          <img src="https://placehold.co/600x800/0B1430/F6E6A8?text=La+Luz+Estelar" alt="Tapa del libro La Luz Estelar" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="absolute -top-10 -right-10 w-24 h-24 bg-dorado/20 blur-2xl rounded-full animate-pulse"></div>
      <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-celeste/20 blur-2xl rounded-full animate-pulse delay-700"></div>
    </div>
  </div>
</Section>
