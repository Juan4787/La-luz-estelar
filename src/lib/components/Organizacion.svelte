<script lang="ts">
  const HOTMART_URL = "https://pay.hotmart.com/I103134494O?off=oca53u1q&hotfeature=51&_hi=eyJjaWQiOiIxNzY1MTQ3OTQyODI2ODc5NjcyNDc1MzY5NDA1ODAwIiwiYmlkIjoiMTc2NTE0Nzk0MjgyNjg3OTY3MjQ3NTM2OTQwNTgwMCIsInNpZCI6IjQxODI2NTlhMDcwYTQyNWY5NTkzOWY3MWY3YmEyM2QwIn0=.1765348981412";

  const units = [
    {
      number: "01",
      title: "Dominio conceptual y experiencial",
      description: "Adquirirás la terminología precisa de todos los conceptos fundamentales que organizan la temporalidad musical.",
      topics: [
        "Conceptos fundamentales del ritmo y la métrica",
        "Comprensión de la estructura multidimensional de la métrica",
        "Identificación e interpretación de patrones temporales"
      ],
      color: "eva-neon"
    },
    {
      number: "02",
      title: "Decodificación y notación",
      description: "Desarrollarás competencias para la lectura y escritura rítmica, incluyendo recursos de desplazamiento acentual.",
      topics: [
        "Manejo de figuras y signos de prolongación",
        "Síncopa y contratiempo",
        "Compases simples y compuestos",
        "Estructuras acentuales"
      ],
      color: "eva-yellow"
    },
    {
      number: "03",
      title: "La materialidad del ritmo",
      description: "Conocerás los componentes materiales esenciales para la construcción métrica y su vinculación con la notación.",
      topics: [
        "Componentes materiales del ritmo",
        "Propiedades de los elementos rítmicos",
        "Factores acentuales",
        "Vinculación entre percepción y notación escrita"
      ],
      color: "eva-magenta"
    }
  ];
</script>

<section class="section bg-eva-card/30">
  <div class="container-custom">
    <h2 class="heading-lg text-center mb-4 animate-fade-in">
      Cómo está <span class="text-gradient">organizado</span>
    </h2>
    
    <p class="text-center text-lg text-eva-text-secondary max-w-3xl mx-auto mb-16 animate-fade-in animate-delay-100">
      El curso está estructurado en <strong class="text-eva-neon">3 unidades secuenciales</strong> que garantizan la adquisición de competencias de manera gradual, desde las bases hasta la identificación auditiva de compases y su correcta notación rítmica.
    </p>
    
    <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
      {#each units as unit, i}
        <div 
          class="card-hover space-y-6 relative overflow-hidden animate-slide-up"
          style="animation-delay: {i * 150}ms"
        >
          <!-- Background Gradient -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br {unit.color} rounded-full blur-2xl -z-10"></div>
          
          <!-- Unit Number -->
          <div class="flex items-center gap-4">
            <div class="text-6xl font-display font-bold text-eva-neon/20">
              {unit.number}
            </div>
            <div>
              <h3 class="text-xl font-display font-semibold text-eva-text">
                {unit.title}
              </h3>
            </div>
          </div>
          
          <!-- Points -->
          <ul class="space-y-3">
            {#each unit.topics as point}
              <li class="flex items-start gap-3">
                <span class="text-eva-neon mt-1">•</span>
                <span class="text-eva-text-secondary leading-relaxed">{point}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- CTA Button -->
    <div class="text-center animate-fade-in animate-delay-300">
      <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" class="btn-primary-large">
        Comprar curso
      </a>
    </div>
  </div>
</section>

<style>
  .unit-card {
    background: var(--eva-card);
    padding: 2rem;
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .unit-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .unit-number {
    font-size: 3rem;
    font-weight: 800;
    font-family: var(--font-display);
    line-height: 1;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
</style>
