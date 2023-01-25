const validation = document.querySelector("#validation");

const showResult = document.querySelector("#show");
function verificarIP(ip) {
  let ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  let verificacao = ipRegex.test(ip);

  // Por último, exibe o resultado da verificação

  if (verificacao) {
    showResult.innerHTML = `<div class="showResultGreen">IP valido - ${ip}</div>`;
  } else {
    showResult.innerHTML = `<div class="showResultRed">IP invalido - ${ip}</div>`;
  }
}

validation.addEventListener("click", function () {
  verificarIP(document.querySelector("#input").value);
});
