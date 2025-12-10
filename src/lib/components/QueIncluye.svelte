<script lang="ts">
  const HOTMART_URL = "https://pay.hotmart.com/I103134494O?off=oca53u1q&hotfeature=51&_hi=eyJjaWQiOiIxNzY1MTQ3OTQyODI2ODc5NjcyNDc1MzY5NDA1ODAwIiwiYmlkIjoiMTc2NTE0Nzk0MjgyNjg3OTY3MjQ3NTM2OTQwNTgwMCIsInNpZCI6IjQxODI2NTlhMDcwYTQyNWY5NTkzOWY3MWY3YmEyM2QwIn0=.1765348981412";
  
  const includes = [
    {
      icon: "🎬",
      text: "14 videoclases que combinan explicación teórica con ejemplos musicales sonoros y escritos."
    },
    {
      icon: "✍️",
      text: "Videos de ejercitación para cada unidad con sus soluciones completas."
    },
    {
      icon: "🎧",
      text: "Ejercitaciones audioperceptivas y analíticas, para que el aprendizaje no se quede solo en lo visual."
    },
    {
      icon: "📚",
      text: "Bibliografía correspondiente por módulo, asegurando un aprendizaje completo y verificable."
    },
    {
      icon: "💻",
      text: "Sesión de Zoom incluida para resolver dudas. Los alumnos que adquieran el curso durante el primer mes podrán participar en vivo; quienes compren después tendrán acceso a la grabación completa."
    },
    {
      icon: "♾️",
      text: "Acceso permanente e ilimitado al contenido a través de Hotmart."
    }
  ];
</script>

<section class="section">
  <div class="container-custom">
    <div class="max-w-4xl mx-auto">
      <h2 class="heading-lg text-center mb-12 animate-fade-in">
        Qué <span class="text-eva-yellow">incluye</span> el curso
      </h2>
      
      <div class="space-y-6 mb-12">
        {#each includes as item, i}
          <div 
            class="card flex items-start gap-6 animate-slide-up"
            style="animation-delay: {i * 100}ms"
          >
            <div class="text-4xl flex-shrink-0">{item.icon}</div>
            <p class="text-lg text-eva-text-secondary leading-relaxed pt-2">
              {item.text}
            </p>
          </div>
        {/each}
      </div>
      
      <div class="text-center pt-8 animate-fade-in animate-delay-400">
        <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" class="btn-primary-large">
          Comprar curso
        </a>
      </div>
    </div>
  </div>
</section>
