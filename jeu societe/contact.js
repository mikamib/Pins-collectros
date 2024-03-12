document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", onSubmit);
  function onSubmit(event) {
    event.preventDefault();
    const nom = document.getElementById("nom"); //obligatoire
    const email = document.getElementById("email"); //obligatoire, verification
    const message = document.getElementById("message"); //obligatoire
    if (nom.value == "") {
      document.getElementById("nom-erreur").style.display = "block";
      nom.classList.add("erreur");
    } else {
      document.getElementById("nom-erreur").style.display = "none";
      nom.classList.remove("erreur");
    }
    if (
      email.value == "" ||
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
    ) {
      document.getElementById("email-erreur").style.display = "block";
      email.classList.add("erreur");
    } else {
      document.getElementById("email-erreur").style.display = "none";
      email.classList.remove("erreur");
    }
    if (message.value == "") {
      document.getElementById("message-erreur").style.display = "block";
      message.classList.add("erreur");
    } else {
      document.getElementById("message-erreur").style.display = "none";
      message.classList.remove("erreur");
    }
  }
});
