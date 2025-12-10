<script lang="ts">
  import Accordion from './Accordion.svelte';
  
  const faqs = [
    {
      question: "¿Cómo funciona el 'Plazo de Garantía'?",
      answer: "El Plazo de Garantía es el periodo que tienes para pedir el reembolso integral del valor de tu compra, en caso de que el producto no sea satisfactorio."
    },
    {
      question: "¿Qué es y cómo funciona el Certificado de Conclusión digital?",
      answer: "Algunos cursos online ofrecen un certificado digital de conclusión. Los alumnos pueden emitir este certificado dentro del curso o ponerse en contacto con el Autor o Autora. Estos certificados pueden compartirse en redes sociales como LinkedIn e incluirse en informaciones curriculares."
    },
    {
      question: "¿Cómo acceder al producto?",
      answer: "Recibirás el acceso por email. Podrás acceder al contenido o descargarlo en una computadora, smartphone, tablet u otro dispositivo digital. También puedes acceder al producto que has comprado en esta página:<br><br>01 - Inicia sesión Hotmart haciendo clic en 'Entrar'<br>02 - Ve al menú lateral y después a 'Mi cuenta'<br>03 - Haz clic en 'Mis compras' y allí encontrarás todos los productos que has adquirido."
    },
    {
      question: "¿Necesito saber mucha teoría para aprovechar el curso?",
      answer: "No necesitás ser un experto en teoría. El curso empieza desde las bases (Unidad 1) y va construyendo la complejidad paso a paso. Si ya tocás un instrumento o cantás, tenés todo lo necesario para empezar."
    },
    {
      question: "¿Cuánto tiempo me va a llevar?",
      answer: "El curso está diseñado para que lo hagas a tu ritmo. Son 14 clases grabadas más ejercitación. Si le dedicás 2 horas por semana, podés completarlo cómodamente en 2 meses, pero tenés acceso de por vida para volver cuando quieras."
    }
  ];
</script>

<section class="section">
  <div class="container-custom">
    <h2 class="heading-lg text-center mb-12 animate-fade-in">
      Preguntas <span class="text-gradient">Frecuentes</span>
    </h2>
    
    <div class="max-w-3xl mx-auto space-y-4">
      {#each faqs as faq, i}
        <div 
          class="animate-slide-up"
          style="animation-delay: {i * 100}ms"
        >
          <Accordion title={faq.question}>
            <p class="text-eva-text-secondary leading-relaxed">
              {@html faq.answer}
            </p>
          </Accordion>
        </div>
      {/each}
    </div>
  </div>
</section>
