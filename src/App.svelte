<script lang="ts">
  import Navbar from './lib/components/sections/Navbar.svelte';
  import Hero from './lib/components/sections/Hero.svelte';
  import Intro from './lib/components/sections/Intro.svelte';
  import Emotional from './lib/components/sections/Emotional.svelte';
  import Target from './lib/components/sections/Target.svelte';
  import Showcase from './lib/components/sections/Showcase.svelte';
  import Includes from './lib/components/sections/Includes.svelte';
  import Usage from './lib/components/sections/Usage.svelte';
  import Pricing from './lib/components/sections/Pricing.svelte';
  import Guarantee from './lib/components/sections/Guarantee.svelte';
  import Author from './lib/components/sections/Author.svelte';
  import FAQ from './lib/components/sections/FAQ.svelte';
  import Footer from './lib/components/sections/Footer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section > div').forEach((el) => {
      el.classList.add('fade-in-section');
      observer.observe(el);
    });
  });
</script>

<main class="bg-noche min-h-screen text-texto-principal selection:bg-dorado selection:text-noche overflow-x-hidden">
  <Navbar />
  <Hero />
  <Intro />
  <Emotional />
  <Target />
  <Showcase />
  <Includes />
  <Usage />
  <Pricing />
  <Guarantee />
  <Author />
  <FAQ />
  <Footer />
</main>


