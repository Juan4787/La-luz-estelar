<script lang="ts">
  const benefits = [
    {
      icon: "🎯",
      title: "Terminología precisa",
      description: "Adquirí el lenguaje técnico correcto para hablar de ritmo y métrica con claridad profesional."
    },
    {
      icon: "🎼",
      title: "Lectura fluida",
      description: "Desarrollá competencias para leer y escribir ritmos con seguridad, incluyendo síncopa y contratiempo."
    },
    {
      icon: "👂",
      title: "Identificación auditiva",
      description: "Aprendé a identificar compases y estructuras rítmicas de oído, no solo visualmente."
    },
    {
      icon: "🧠",
      title: "Comprensión profunda",
      description: "Entendé la estructura multidimensional de la métrica y cómo se organiza la temporalidad musical."
    },
    {
      icon: "📝",
      title: "Notación correcta",
      description: "Dominá la escritura rítmica y la relación entre lo que percibís y cómo se notata."
    },
    {
      icon: "💪",
      title: "Base sólida permanente",
      description: "Convertí el ritmo en una fuerza poderosa de tu música en lugar de una barrera."
    }
  ];
</script>

<section class="section">
  <div class="container-custom">
    <h2 class="heading-lg text-center mb-4 animate-fade-in">
      Qué vas a <span class="text-eva-neon">conseguir</span>
    </h2>
    
    <p class="text-center text-lg text-eva-text-secondary max-w-2xl mx-auto mb-16 animate-fade-in animate-delay-100">
      Resultados concretos que transformarán tu relación con el ritmo
    </p>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {#each benefits as benefit, i}
        <div 
          class="card-hover animate-slide-up"
          style="animation-delay: {i * 100}ms"
        >
          <div class="text-4xl mb-4">{benefit.icon}</div>
          <h3 class="text-xl font-display font-bold mb-2 text-eva-text">
            {benefit.title}
          </h3>
          <p class="text-eva-text-secondary leading-relaxed">
            {benefit.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
