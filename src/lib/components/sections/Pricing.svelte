<script lang="ts">
  import Section from '../ui/Section.svelte';
  import Button from '../ui/Button.svelte';
</script>

<Section id="comprar" className="relative">
  <!-- Glow Effect -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-[400px] bg-dorado/10 blur-[100px] rounded-full pointer-events-none"></div>

  <div class="text-center mb-12 relative z-10">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4 text-texto-principal">
      Leelo hoy
    </h2>
  </div>

  <div class="max-w-md mx-auto relative z-10">
    <div class="bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
      <!-- Card Glow -->
      <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div class="text-center relative z-10">
        <h3 class="text-2xl font-serif font-bold text-texto-principal mb-2">
          La Luz Estelar
        </h3>
        <p class="text-dorado font-medium mb-6">Dios en nuestro corazón</p>

        <div class="flex items-center justify-center gap-2 mb-8 text-texto-suave/80 text-sm">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          PDF ilustrado + acceso inmediato
        </div>

        <div class="mb-8">
          <span class="text-5xl font-bold text-texto-principal tracking-tight">$15.000</span>
          <span class="text-texto-suave/60 text-lg ml-1">ARS</span>
        </div>

        <Button 
          href="https://pay.hotmart.com/E103406634Y?off=5iwa98p0" 
          variant="primary" 
          className="w-full shadow-glow mb-4 !text-lg !py-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar ahora
        </Button>

        <p class="text-xs text-texto-suave/40 flex items-center justify-center gap-1">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Pago seguro por Hotmart
        </p>
      </div>
    </div>

    <div class="text-center mt-8">
      <p class="text-texto-suave italic text-sm">
        Si llegaste hasta acá, ya sabés que este cuento te está llamando.
      </p>
    </div>
  </div>
</Section>
