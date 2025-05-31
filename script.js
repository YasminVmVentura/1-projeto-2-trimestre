document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("evento-btn");
  btn.addEventListener("click", () => {
    alert("Campo e cidade estão interligados: consumir local, apoiar o produtor e valorizar o que vem da terra transforma a sociedade!");
  });

  if (window.lucide) {
    lucide.createIcons();
  }
});
.mapa-interativo {
  text-align: center;
  margin: 80px auto 60px;
}

.mapa-interativo h2 {
  font-size: 2rem;
  color: var(--amarelo);
  margin-bottom: 30px;
}

.mapa {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}

.ponto {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f2f2f;
  border: 2px solid var(--verde-oliva);
  border-radius: 15px;
  padding: 20px;
  width: 120px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ponto:hover {
  transform: scale(1.1);
  background-color: #3b3b3b;
}

.ponto i {
  color: var(--azul);
  width: 32px;
  height: 32px;
  margin-bottom: 10px;
}

.ponto span {
  color: var(--branco);
  font-weight: bold;
}

.info-box {
  background-color: #1e1e1e;
  border-left: 5px solid var(--amarelo);
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  color: var(--branco);
  font-size: 1.05rem;
  box-shadow: 0 4px 10px var(--sombra);
}
