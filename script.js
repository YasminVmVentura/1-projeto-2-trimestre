document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("evento-btn");
  btn.addEventListener("click", () => {
    alert("Campo e cidade estão interligados: consumir local, apoiar o produtor e valorizar o que vem da terra transforma a sociedade!");
  });

  if (window.lucide) {
    lucide.createIcons();
  }
});
