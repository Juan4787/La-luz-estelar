<script lang="ts">
  import Section from '../ui/Section.svelte';
  import Button from '../ui/Button.svelte';
  import { onMount } from 'svelte';

  let activeIndex = 0;
  const images = [
    { src: 'https://placehold.co/800x600/0B1430/F6E6A8?text=Tapa', alt: 'Tapa del libro' },
    { src: 'https://placehold.co/800x600/0B1430/F6E6A8?text=Spread+1', alt: 'Interior página 1' },
    { src: 'https://placehold.co/800x600/0B1430/F6E6A8?text=Spread+2', alt: 'Interior página 2' },
    { src: 'https://placehold.co/800x600/0B1430/F6E6A8?text=Spread+3', alt: 'Interior página 3' }
  ];

  const nextSlide = () => {
    activeIndex = (activeIndex + 1) % images.length;
  };

  const prevSlide = () => {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
  };
</script>

<Section id="muestra" className="overflow-hidden">
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4 text-texto-principal">
      Abrilo y sentí el clima.
    </h2>
    <p class="text-lg text-texto-suave max-w-2xl mx-auto">
      Ilustraciones suaves, escenas cósmicas y momentos de silencio.
      <br class="hidden md:block">
      Es de esos cuentos que piden luz baja… y un minuto sin apuro.
    </p>
  </div>

  <div class="relative max-w-4xl mx-auto px-4">
    <!-- Carousel Container -->
    <div class="relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-noche">
      {#each images as image, i}
        <div 
          class="absolute inset-0 transition-opacity duration-500 flex items-center justify-center bg-profundo"
          style="opacity: {i === activeIndex ? 1 : 0}; pointer-events: {i === activeIndex ? 'auto' : 'none'}"
        >
          <img src={image.src} alt={image.alt} class="w-full h-full object-cover" />
        </div>
      {/each}

      <!-- Controls -->
      <button 
        on:click={prevSlide}
        class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-noche/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        on:click={nextSlide}
        class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-noche/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Dots -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {#each images as _, i}
          <button 
            on:click={() => activeIndex = i}
            class="w-2 h-2 rounded-full transition-all duration-300 {i === activeIndex ? 'bg-dorado w-6' : 'bg-white/30 hover:bg-white/50'}"
          ></button>
        {/each}
      </div>
    </div>

    <div class="text-center mt-12">
      <Button href="https://pay.hotmart.com/E103406634Y?off=5iwa98p0" target="_blank" rel="noopener noreferrer" variant="primary" className="shadow-glow">
        Sí, lo quiero
      </Button>
    </div>
  </div>
</Section>
