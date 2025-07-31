document.addEventListener("DOMContentLoaded", () => {
  // --- Busca de receitas ---
  const formBusca = document.querySelector("form.d-flex");
  const inputBusca = formBusca.querySelector("input");

  formBusca.addEventListener("submit", (e) => {
    e.preventDefault();
    const termo = inputBusca.value.toLowerCase().trim();

    if (!termo) {
      alert("Digite o nome de uma receita para buscar.");
      return;
    }

    const receitas = document.querySelectorAll(".recipe-card");
    let encontrado = false;

    receitas.forEach(card => {
      const titulo = card.querySelector("h3").textContent.toLowerCase();
      if (titulo.includes(termo)) {
        card.style.display = "block";
        encontrado = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!encontrado) {
      alert(`Nenhuma receita encontrada para: "${termo}"`);
    }
  });

  // --- Formulário de contato ---
  const form = document.getElementById("formContato");
  const feedback = document.getElementById("mensagemFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.style.color = "#d93025"; // vermelho para erro
      return;
    }

    // Opcional: validação simples de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Por favor, informe um e-mail válido.";
      feedback.style.color = "#d93025";
      return;
    }

    // Simula envio do formulário
    feedback.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
    feedback.style.color = "#1e7e34"; // verde para sucesso

    form.reset(); // limpa os campos

    setTimeout(() => {
      feedback.textContent = "";
    }, 4000); // limpa a mensagem depois de 4 segundos
  });
});
