<script lang="ts">
  const HOTMART_URL = "https://pay.hotmart.com/I103134494O?off=oca53u1q&hotfeature=51&_hi=eyJjaWQiOiIxNzY1MTQ3OTQyODI2ODc5NjcyNDc1MzY5NDA1ODAwIiwiYmlkIjoiMTc2NTE0Nzk0MjgyNjg3OTY3MjQ3NTM2OTQwNTgwMCIsInNpZCI6IjQxODI2NTlhMDcwYTQyNWY5NTkzOWY3MWY3YmEyM2QwIn0=.1765348981412";
</script>

<section class="section cta-section relative overflow-hidden">
  <!-- Dramatic Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-b from-eva-card/0 via-eva-card/30 to-eva-dark"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
    <div class="absolute top-0 left-0 w-96 h-96 bg-eva-neon/20 rounded-full blur-3xl animate-glow-pulse"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-eva-magenta/20 rounded-full blur-3xl animate-glow-pulse" style="animation-delay: 1s"></div>
  </div>
  
  <div class="container-custom relative z-10">
    <div class="max-w-7xl mx-auto text-center">
      <!-- Main headline with MORE spacing -->
      <h2 class="heading-xl animate-fade-in mb-8">
        El ritmo no tiene por qué <br/> ser
        tu <span class="text-eva-neon">cuenta pendiente</span>
      </h2>
      
      <!-- Contrast text blocks with MORE spacing between them -->
      <div class="animate-fade-in animate-delay-200 mb-10">
        
        <div class="cta-highlight-box">
          <p class="text-lg md:text-xl leading-relaxed">
            <strong class="text-eva-neon">Ritmo y Métrica Musical</strong> usa un sistema de aprendizaje progresivo que te guía desde las bases hasta dominar la identificación auditiva, la lectura y la notación rítmica. Dejarás de percibir el ritmo como una barrera y lo convertirás en una fuerza poderosa de tu música.
          </p>
        </div>
      </div>
      
      <!-- CTA Button -->
      <div class="text-center pt-10">
        <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" class="btn-primary-large cta-glow">
          Comprar curso
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-section {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  
  .cta-highlight-box {
    background: rgba(0, 255, 179, 0.05);
    border: 1px solid rgba(0, 255, 179, 0.2);
    border-radius: 1.5rem;
    padding: 2.5rem;
    max-width: 700px;
    margin: 0 auto;
  }
  
  .cta-glow {
    animation: glowPulseStrong 2s ease-in-out infinite;
  }
  
  @keyframes glowPulseStrong {
    0%, 100% {
      box-shadow: 0 0 30px rgba(0, 255, 179, 0.4);
    }
    50% {
      box-shadow: 0 0 50px rgba(0, 255, 179, 0.6);
    }
  }
  
  @media (max-width: 768px) {
    .cta-highlight-box {
      padding: 1.5rem;
    }
  }
</style>
