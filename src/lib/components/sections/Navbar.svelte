<script lang="ts">
  import Button from '../ui/Button.svelte';
  import { onMount } from 'svelte';

  let isScrolled = false;
  let isMobileMenuOpen = false;

  const handleScroll = () => {
    isScrolled = window.scrollY > 20;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMobileMenuOpen = false;
    }
  };
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-noche/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}">
  <div class="container mx-auto px-4 h-16 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-xl font-serif font-bold text-texto-principal tracking-wide">
      La Luz Estelar
    </a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8">
      <button on:click={() => scrollToSection('muestra')} class="text-sm text-texto-suave hover:text-dorado transition-colors">
        Muestra
      </button>
      <button on:click={() => scrollToSection('que-incluye')} class="text-sm text-texto-suave hover:text-dorado transition-colors">
        Qué incluye
      </button>
      <button on:click={() => scrollToSection('faq')} class="text-sm text-texto-suave hover:text-dorado transition-colors">
        Preguntas
      </button>
      <Button href="https://pay.hotmart.com/E103406634Y?off=5iwa98p0" target="_blank" rel="noopener noreferrer" variant="primary" className="!py-2 !px-6 !text-sm">
        Quiero leerlo
      </Button>
    </div>

    <!-- Mobile Menu Button -->
    <button class="md:hidden text-texto-principal" on:click={() => isMobileMenuOpen = !isMobileMenuOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div class="md:hidden absolute top-16 left-0 right-0 bg-noche/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4">
      <button on:click={() => scrollToSection('muestra')} class="text-left text-texto-suave hover:text-dorado py-2">
        Muestra
      </button>
      <button on:click={() => scrollToSection('que-incluye')} class="text-left text-texto-suave hover:text-dorado py-2">
        Qué incluye
      </button>
      <button on:click={() => scrollToSection('faq')} class="text-left text-texto-suave hover:text-dorado py-2">
        Preguntas
      </button>
      <Button href="https://pay.hotmart.com/E103406634Y?off=5iwa98p0" target="_blank" rel="noopener noreferrer" variant="primary" className="w-full justify-center">
        Quiero leerlo
      </Button>
    </div>
  {/if}
</nav>
