<script lang="ts">
  import Section from '../ui/Section.svelte';
  import Card from '../ui/Card.svelte';
</script>

<Section>
  <div class="text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6 text-texto-principal">
      3 formas simples de vivirlo
    </h2>
  </div>

  <div class="grid md:grid-cols-3 gap-6">
    <Card className="text-center group hover:-translate-y-2 transition-transform duration-300">
      <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-dorado/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
        🌙
      </div>
      <h3 class="text-xl font-serif font-bold text-texto-principal mb-3">Ritual de noche</h3>
      <p class="text-texto-suave mb-4 text-sm uppercase tracking-wider opacity-60">7–12 min</p>
      <p class="text-texto-suave italic">Una lectura, una pregunta, un abrazo. Ideal para bajar revoluciones antes de dormir.</p>
    </Card>

    <Card className="text-center group hover:-translate-y-2 transition-transform duration-300">
      <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-dorado/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
        🧘‍♀️
      </div>
      <h3 class="text-xl font-serif font-bold text-texto-principal mb-3">Lectura para adultos</h3>
      <p class="text-texto-suave mb-4 text-sm uppercase tracking-wider opacity-60">Introspección</p>
      <p class="text-texto-suave italic">Como recordatorio personal: “volvé a casa”. Para leer en silencio cuando necesitás paz.</p>
    </Card>

    <Card className="text-center group hover:-translate-y-2 transition-transform duration-300">
      <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-dorado/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
        👨‍👩‍👧‍👦
      </div>
      <h3 class="text-xl font-serif font-bold text-texto-principal mb-3">Momento compartido</h3>
      <p class="text-texto-suave mb-4 text-sm uppercase tracking-wider opacity-60">Conexión</p>
      <p class="text-texto-suave italic">Para conversar sin imponer, solo abrir el espacio a preguntas profundas.</p>
    </Card>
  </div>
</Section>
