<script lang="ts">
  const INSTAGRAM_URL = "https://www.instagram.com/evagarciaf_music/";
  const YOUTUBE_URL = "https://www.youtube.com/@EvaGarciaF";
</script>

<section class="section">
  <div class="container-custom">
    <h2 class="heading-lg text-center mb-12 animate-fade-in">
      Sobre <span class="text-gradient">Eva García Fernández</span>
    </h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="space-y-4 text-eva-text-secondary leading-relaxed">
        <p>
          <strong class="text-eva-text">Eva García Fernández</strong> es compositora, saxofonista y profesora de Buenos Aires, Argentina.
        </p>
        
        <p>
          Es Licenciada en Música por la Universidad Nacional de Tres de Febrero y docente en la Licenciatura en Música de la UNTREF y en la Diplomatura Superior en Música Contemporánea del Conservatorio Manuel de Falla.
        </p>
        
        <p>
          Su trabajo como compositora incluye música de cámara, música sinfónica, medios mixtos, obras para instrumentos solistas, teatro instrumental, arte sonoro y post-rock instrumental. Sus obras fueron interpretadas en Argentina, Uruguay, Brasil, Alemania, España y Estados Unidos.
        </p>
        
        <p>
          Ha recibido diversos reconocimientos, entre ellos el <strong class="text-eva-neon">1º premio del Concurso Compositoras Latinoamericanas de la OSESP</strong> (Orquesta Sinfónica del Estado de Sao Paulo) y premios TRINAC del Consejo Argentino de la Música.
        </p>
        
        <p>
          Desde 2021 crea contenido sobre música contemporánea y, más recientemente, sobre análisis métrico y rítmico en Instagram, YouTube y TikTok, acercando conceptos complejos de forma clara, rigurosa y accesible.
        </p>
        
        <!-- Social Links below text -->
        <div class="flex gap-4 pt-6 justify-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" 
             class="social-link"
             aria-label="Instagram de Eva García Fernández">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
             class="social-link"
             aria-label="YouTube de Eva García Fernández">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background-color: var(--eva-card);
    border-radius: 9999px;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background-color: var(--eva-neon);
    color: var(--eva-dark);
    transform: scale(1.1);
  }
</style>
