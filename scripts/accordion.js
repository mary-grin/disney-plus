document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function() {
      this.parentElement.classList.toggle("active");
    });
  });  