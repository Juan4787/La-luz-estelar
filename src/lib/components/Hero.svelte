<script lang="ts">
  const HOTMART_URL = "https://pay.hotmart.com/I103134494O?off=oca53u1q&hotfeature=51&_hi=eyJjaWQiOiIxNzY1MTQ3OTQyODI2ODc5NjcyNDc1MzY5NDA1ODAwIiwiYmlkIjoiMTc2NTE0Nzk0MjgyNjg3OTY3MjQ3NTM2OTQwNTgwMCIsInNpZCI6IjQxODI2NTlhMDcwYTQyNWY5NTkzOWY3MWY3YmEyM2QwIn0=.1765348981412";
  const INSTAGRAM_URL = "https://www.instagram.com/evagarciaf_music/";
</script>

<section class="hero-section section relative overflow-hidden">
  <!-- Subtle gradient background -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] to-[#111111] -z-10"></div>
  
  <!-- Gradient effects -->
  <div class="absolute top-0 right-0 w-96 h-96 bg-eva-neon/10 rounded-full blur-3xl opacity-30"></div>
  
  <div class="container-custom relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Title with more spacing -->
      <h1 class="heading-xl animate-fade-in mb-8">
        Curso de <span class="text-gradient">Ritmo y Métrica Musical</span>
      </h1>
      
      <!-- Value prop - SHORT and breathable with MORE spacing -->
      <div class="animate-fade-in animate-delay-100 mb-10">
        <p class="text-2xl md:text-3xl font-semibold leading-tight mb-6">
          Dejá de percibir el ritmo como una barrera.<br/>
          Convertilo en una fuerza poderosa de tu música.
        </p>
        
        <p class="text-lg md:text-xl text-eva-text-secondary max-w-2xl mx-auto leading-relaxed">
          Sistema de aprendizaje progresivo que te lleva desde las bases hasta la identificación auditiva de compases y su correcta notación rítmica.
        </p>
      </div>
      
      <!-- CTAs - Side by side, SAME SIZE, bigger spacing -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-2xl mx-auto mt-10 mb-8 animate-fade-in animate-delay-200">
        <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" class="btn-primary-large flex-1 cta-glow">
          Comprar curso
        </a>
        
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" class="btn-secondary-large flex-1">
          Hablar con Eva
        </a>
      </div>
      
      <!-- Authority micro-text with MORE spacing -->
      <p class="text-sm text-eva-text-secondary/70 animate-fade-in animate-delay-300 mt-8">
        Por Eva García Fernández · 1º Premio Compositoras OSESP · Docente UNTREF
      </p>
    </div>
  </div>
</section>

<style>
  .hero-section {
    min-height: 80vh;
    display: flex;
    align-items: center;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
</style>
