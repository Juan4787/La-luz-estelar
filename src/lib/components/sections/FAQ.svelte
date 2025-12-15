<script lang="ts">
  import Section from '../ui/Section.svelte';
  import { slide } from 'svelte/transition';

  type FAQ = {
    question: string;
    answer: string;
    isOpen: boolean;
  };

  let faqs: FAQ[] = [
    {
      question: "¿Es religioso?",
      answer: "No. Habla de Dios como amor y guía interna, sin instituciones ni dogmas.",
      isOpen: false
    },
    {
      question: "¿Para qué edades es?",
      answer: "Funciona para niños (por su simpleza y simbolismo) y para adultos (por el mensaje). Ideal para leer acompañado.",
      isOpen: false
    },
    {
      question: "¿Cómo lo recibo?",
      answer: "En formato digital (PDF), con acceso inmediato tras la compra.",
      isOpen: false
    },
    {
      question: "¿Puedo imprimirlo?",
      answer: "Sí, podés imprimirlo para uso personal.",
      isOpen: false
    },
    {
      question: "¿Vale la pena pagar un cuento digital?",
      answer: "No es solo un cuento para leer una vez. Es una lectura que podés volver a abrir, compartir y usar como ritual. Si buscás cantidad, no es esto. Si buscás sentido, sí.",
      isOpen: false
    },
    {
      question: "¿Cuánto dura la lectura?",
      answer: "Es corto: perfecto para un ritual de noche.",
      isOpen: false
    }
  ];

  const toggleFAQ = (index: number) => {
    faqs = faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    }));
  };
</script>

<Section id="faq">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4 text-texto-principal">
        Preguntas frecuentes
      </h2>
    </div>

    <div class="space-y-4">
      {#each faqs as faq, i}
        <div class="bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden transition-colors hover:bg-white/[0.06]">
          <button 
            class="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            on:click={() => toggleFAQ(i)}
          >
            <span class="text-lg font-medium text-texto-principal">{faq.question}</span>
            <svg 
              class="w-5 h-5 text-dorado transition-transform duration-300 {faq.isOpen ? 'rotate-180' : ''}" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {#if faq.isOpen}
            <div class="px-6 pb-4 text-texto-suave leading-relaxed" transition:slide>
              {faq.answer}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</Section>
