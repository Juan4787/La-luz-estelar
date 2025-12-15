<script lang="ts">
  import Section from '../ui/Section.svelte';
  import Card from '../ui/Card.svelte';
</script>

<Section className="bg-gradient-to-b from-noche to-profundo/30">
  <div class="text-center max-w-3xl mx-auto mb-16">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-texto-principal">
      Una historia sobre recordar.
    </h2>
    <p class="text-lg text-texto-suave leading-relaxed">
      Hace mucho, en lo profundo del universo, existía una gran Luz. Algunas almas eligieron explorar lejos de esa Unidad… y, en la aventura, olvidaron. Hasta que en medio del miedo, una voz interna vuelve a hablarles: la guía siempre estuvo ahí.
    </p>
  </div>

  <div class="grid md:grid-cols-3 gap-6">
    <Card className="hover:bg-white/[0.08] transition-colors">
      <h3 class="text-xl font-serif font-bold text-dorado mb-3">El origen</h3>
      <p class="text-texto-principal font-medium mb-2">Una Luz de amor y unidad.</p>
      <p class="text-sm text-texto-suave italic">Te devuelve perspectiva.</p>
    </Card>

    <Card className="hover:bg-white/[0.08] transition-colors">
      <h3 class="text-xl font-serif font-bold text-dorado mb-3">El olvido</h3>
      <p class="text-texto-principal font-medium mb-2">Separación, confusión, miedo.</p>
      <p class="text-sm text-texto-suave italic">Te ayuda a nombrar lo que se siente.</p>
    </Card>

    <Card className="hover:bg-white/[0.08] transition-colors">
      <h3 class="text-xl font-serif font-bold text-dorado mb-3">El regreso</h3>
      <p class="text-texto-principal font-medium mb-2">Una guía interna que nunca se fue.</p>
      <p class="text-sm text-texto-suave italic">Te deja en paz.</p>
    </Card>
  </div>
</Section>
