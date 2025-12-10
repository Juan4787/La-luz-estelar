<script lang="ts">
  const benefits = [
    {
      icon: "🎯",
      title: "Este curso es para vos si..."
    }
  ];
  
  const items = [
    "Tocás hace tiempo pero sentís que el ritmo y la métrica siguen siendo tu punto débil.",
    "Podés sacar cosas de oído, pero cuando leés una partitura rítmicamente densa te trabás.",
    "El metrónomo te expone: te das cuenta de que no sostenés el pulso con seguridad.",
    "Querés avanzar a materiales más complejos (polimetrías, ritmos irregulares, Nivel 2), pero sabés que primero necesitás ordenar la base.",
    "Te interesa entender el ritmo desde una mirada conceptual y también corporal/aural, no sólo memorizando figuras."
  ];
</script>

<section class="section">
  <div class="container-custom">
    <h2 class="heading-lg text-center mb-12 animate-fade-in">
      Este curso es <span class="text-eva-neon">para vos</span> si...
    </h2>
    
    <div class="max-w-4xl mx-auto space-y-4">
      {#each items as item, i}
        <div 
          class="card-hover flex items-start gap-4 animate-slide-up"
          style="animation-delay: {i * 100}ms"
        >
          <div class="flex-shrink-0 w-6 h-6 mt-1">
            <svg class="w-full h-full text-eva-neon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <p class="text-lg text-eva-text-secondary leading-relaxed flex-1">
            {item}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
