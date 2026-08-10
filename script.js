// ===== LICE TURISMO — interações =====
(function () {
  "use strict";

  // WhatsApp number (formato internacional, sem símbolos).
  var WHATSAPP = "554188252647";

  // Ano no rodapé
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Envio dos formulários -> abre WhatsApp com a mensagem montada
  function showMsg(form, text, ok) {
    var box = form.querySelector(".form-msg");
    if (!box) {
      box = document.createElement("p");
      box.className = "form-msg";
      form.appendChild(box);
    }
    box.textContent = text;
    box.className = "form-msg " + (ok ? "ok" : "err");
  }

  function handleSubmit(e) {
    e.preventDefault();
    var form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      showMsg(form, "Preencha os campos obrigatórios.", false);
      return;
    }

    var data = new FormData(form);
    var nome = (data.get("nome") || "").toString().trim();
    var tel = (data.get("telefone") || "").toString().trim();
    var pessoas = (data.get("pessoas") || "").toString().trim();
    var msg = (data.get("mensagem") || "").toString().trim();

    var texto =
      "Olá, Lidiane! Quero reservar o Passeio de Trem a Morretes com a LICE TURISMO.\n\n" +
      "*Nome:* " + nome + "\n" +
      "*WhatsApp:* " + tel +
      (pessoas ? "\n*Nº de pessoas:* " + pessoas : "") +
      (msg ? "\n*Mensagem:* " + msg : "");

    var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
    window.open(url, "_blank", "noopener");

    showMsg(form, "Tudo certo! Estamos te redirecionando para o WhatsApp. 🎉", true);
    form.reset();
  }

  ["leadFormHero", "leadFormContato"].forEach(function (id) {
    var form = document.getElementById(id);
    if (form) form.addEventListener("submit", handleSubmit);
  });
})();
