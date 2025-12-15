<script lang="ts">
  import Section from '../ui/Section.svelte';
  import Card from '../ui/Card.svelte';
</script>

<Section className="bg-profundo/20">
  <div class="text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-texto-principal">
      Si alguna vez sentiste que necesitabas volver a vos… <span class="block text-dorado mt-2">es para vos.</span>
    </h2>
  </div>

  <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <Card className="hover:-translate-y-1 transition-transform duration-300">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 text-2xl">
          🌙
        </div>
        <div>
          <h3 class="text-xl font-serif font-bold text-texto-principal mb-2">Mamá / Papá</h3>
          <p class="text-texto-suave">Un ritual de lectura para dormir en calma.</p>
        </div>
      </div>
    </Card>

    <Card className="hover:-translate-y-1 transition-transform duration-300">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 text-2xl">
          ✨
        </div>
        <div>
          <h3 class="text-xl font-serif font-bold text-texto-principal mb-2">Adultos sensibles</h3>
          <p class="text-texto-suave">Una historia que se siente como meditación.</p>
        </div>
      </div>
    </Card>

    <Card className="hover:-translate-y-1 transition-transform duration-300">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 text-2xl">
          🌱
        </div>
        <div>
          <h3 class="text-xl font-serif font-bold text-texto-principal mb-2">Docentes / guías</h3>
          <p class="text-texto-suave">Un disparador amoroso para conversar.</p>
        </div>
      </div>
    </Card>

    <Card className="hover:-translate-y-1 transition-transform duration-300">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-full bg-dorado/10 flex items-center justify-center shrink-0 text-2xl">
          🕊️
        </div>
        <div>
          <h3 class="text-xl font-serif font-bold text-texto-principal mb-2">Personas en búsqueda</h3>
          <p class="text-texto-suave">Espiritualidad simple, sin rigidez.</p>
        </div>
      </div>
    </Card>
  </div>
</Section>
