<script lang="ts">
  import { testStore, questions, progress } from '../stores/testStore';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  const HOTMART_URL = "https://pay.hotmart.com/I103134494O?off=oca53u1q&hotfeature=51&_hi=eyJjaWQiOiIxNzY1MTQ3OTQyODI2ODc5NjcyNDc1MzY5NDA1ODAwIiwiYmlkIjoiMTc2NTE0Nzk0MjgyNjg3OTY3MjQ3NTM2OTQwNTgwMCIsInNpZCI6IjQxODI2NTlhMDcwYTQyNWY5NTkzOWY3MWY3YmEyM2QwIn0=.1765348981412";
  const INSTAGRAM_URL = "https://www.instagram.com/evagarciaf_music/";
  
  $: currentQuestion = $testStore.currentQuestion;
  $: score = $testStore.score;
  $: isCompleted = $testStore.isCompleted;
  $: prog = $progress;
  
  function handleYes() {
    testStore.answerYes();
  }
  
  function handleNo() {
    testStore.answerNo();
  }
  
  function restart() {
    testStore.reset();
  }
</script>

<section class="section">
  <div class="container-custom">
    <div class="max-w-2xl mx-auto">
      <!-- Header with MORE spacing -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">
          ¿Este curso es para vos?
        </h2>
        <p class="text-lg text-eva-neon">
          Descubrilo en 15 segundos con este mini-test
        </p>
      </div>
      
      <!-- Game Container -->
      <div class="mini-game-container">
        {#if !isCompleted}
          <!-- Musical Notes Progress -->
          <div class="musical-notes mb-10">
            {#each Array(5) as _, i}
              <div class="note-wrapper">
                <svg 
                  class="music-note"
                  class:active={i <= currentQuestion}
                  class:completed={i < currentQuestion}
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
            {/each}
          </div>
          
          <!-- Question Card wrapper with fixed height -->
          <div class="question-wrapper">
            {#key currentQuestion}
              <div 
                class="question-card"
                in:fly="{{ x: 100, duration: 500, delay: 200, easing: cubicOut }}"
                out:fly="{{ x: -100, duration: 300, easing: cubicOut }}"
              >
                <p class="question-text">
                  "{questions[currentQuestion].text}"
                </p>
              </div>
            {/key}
          </div>
          
          <!-- Answer Buttons -->
          <div class="button-group">
            <button
              on:click={handleYes}
              class="game-button game-button-primary"
            >
              Sí, me pasa
            </button>
            
            <button
              on:click={handleNo}
              class="game-button game-button-secondary"
            >
              No tanto
            </button>
          </div>
        {:else}
          <!-- Results -->
          <div in:fade="{{ duration: 400, delay: 200 }}" class="results-container">
            {#if score >= 2}
              <div class="space-y-6">
                <h3 class="text-3xl md:text-4xl font-display font-bold text-eva-neon">
                  No es que no sirvas para el ritmo.
                </h3>
                
                <p class="text-lg text-eva-text-secondary leading-relaxed">
                  Lo que te pasa no es raro: simplemente nunca tuviste una base clara de métrica y lectura aplicada.
                  <br/><br/>
                  Justo eso es lo que trabajamos paso a paso en <span class="text-eva-text font-semibold">Ritmo y Métrica Musical</span>.
                </p>
              </div>
            {:else}
              <div class="space-y-6">
                <h3 class="text-3xl md:text-4xl font-display font-bold text-eva-yellow">
                  Ya tenés una base, pero la podés afinar.
                </h3>
                
                <p class="text-lg text-eva-text-secondary leading-relaxed">
                  Por lo que marcaste, ya traés algo de seguridad con el ritmo.
                  <br/><br/>
                  El curso <span class="text-eva-text font-semibold">Ritmo y Métrica Musical</span> te puede servir para ordenar conceptos, reforzar la lectura y abrirte la puerta a materiales más complejos.
                </p>
              </div>
            {/if}
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
              <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" class="btn-primary-large">
                Comprar curso
              </a>
              
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" class="btn-secondary-large">
                Hablar con Eva
              </a>
            </div>
            
            <!-- Restart -->
            <button
              on:click={restart}
              class="text-sm text-eva-text-secondary hover:text-eva-neon transition-colors duration-300 underline mt-6"
            >
              Reiniciar test
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .mini-game-container {
    background: #121212;
    border-radius: 28px;
    padding: 32px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
    max-width: 450px;
    margin: 0 auto;
    animation: slideUpFade 400ms ease-out;
  }
  
  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Musical Notes Progress */
  .musical-notes {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 16px;
    height: 60px;
  }
  
  .note-wrapper {
    display: flex;
    align-items: flex-end;
  }
  
  .music-note {
    width: 32px;
    height: 32px;
    color: #2a2a2a;
    transition: all 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: drop-shadow(0 0 0 transparent);
  }
  
  .music-note.active {
    color: #00ffb2;
    filter: drop-shadow(0 0 8px rgba(0, 255, 178, 0.6));
    animation: noteGlow 600ms ease-out;
  }
  
  .music-note.completed {
    color: #00ffb2;
    filter: drop-shadow(0 0 8px rgba(0, 255, 178, 0.4));
  }
  
  @keyframes noteGlow {
    0% {
      transform: scale(0.8) translateY(10px);
      filter: drop-shadow(0 0 0 transparent);
    }
    50% {
      transform: scale(1.3) translateY(-5px);
      filter: drop-shadow(0 0 15px rgba(0, 255, 178, 0.8));
    }
    100% {
      transform: scale(1) translateY(0);
      filter: drop-shadow(0 0 8px rgba(0, 255, 178, 0.6));
    }
  }
  
  .question-wrapper {
    position: relative;
    min-height: 140px;
    margin-bottom: 24px;
  }
  
  .question-card {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #1a1a1a;
    padding: 28px;
    border-radius: 20px;
    min-height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 255, 178, 0.1);
  }
  
  .question-text {
    font-size: 1.125rem;
    line-height: 1.6;
    text-align: center;
    color: var(--eva-text);
  }
  
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .game-button {
    height: 60px;
    width: 100%;
    border-radius: 100px;
    font-size: 1.125rem;
    font-weight: 600;
    transition: all 120ms ease;
    cursor: pointer;
  }
  
  .game-button:active {
    transform: scale(0.96);
  }
  
  .game-button-primary {
    background: #00ffb2;
    color: #000;
    border: none;
    box-shadow: 0 0 20px rgba(0, 255, 178, 0.3);
  }
  
  .game-button-primary:hover {
    box-shadow: 0 0 30px rgba(0, 255, 178, 0.5);
    transform: translateY(-2px);
  }
  
  .game-button-secondary {
    height: 55px;
    background: transparent;
    border: 2px solid #00ffb2;
    color: #00ffb2;
    animation: subtleBounce 2s ease-in-out infinite;
  }
  
  @keyframes subtleBounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
  }
  
  .game-button-secondary:hover {
    background: rgba(0, 255, 178, 0.1);
    animation: none;
  }
  
  .results-container {
    text-align: center;
    padding: 20px 0;
  }
  
  @media (max-width: 640px) {
    .mini-game-container {
      padding: 24px;
      border-radius: 24px;
    }
    
    .musical-notes {
      gap: 12px;
    }
    
    .music-note {
      width: 28px;
      height: 28px;
    }
    
    .question-text {
      font-size: 1rem;
    }
    
    .game-button {
      height: 56px;
      font-size: 1rem;
    }
  }
</style>
