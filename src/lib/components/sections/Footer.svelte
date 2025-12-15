<script lang="ts">
  import Section from '../ui/Section.svelte';
  import Button from '../ui/Button.svelte';
</script>

<Section className="!border-b-0 pb-24">
  <div class="text-center max-w-2xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-texto-principal">
      Un cuento para recordar lo esencial
    </h2>
    
    <div class="space-y-2 mb-12 text-xl text-texto-suave">
      <p>Hay historias que entretienen.</p>
      <p class="text-dorado font-medium">Y hay historias que te devuelven.</p>
    </div>

    <Button 
      href="https://pay.hotmart.com/E103406634Y?off=5iwa98p0" 
      variant="primary" 
      className="w-full sm:w-auto shadow-glow !text-lg !px-12 !py-5"
      target="_blank"
      rel="noopener noreferrer"
    >
      Comprar y leer ahora
    </Button>
  </div>

  <footer class="mt-24 pt-8 border-t border-white/10 text-center text-sm text-texto-suave/40">
    <p>&copy; {new Date().getFullYear()} La Luz Estelar. Todos los derechos reservados.</p>
  </footer>
</Section>
