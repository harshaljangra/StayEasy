// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Make filters shift down when hamburger menu is clicked
document.addEventListener('DOMContentLoaded', function() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarCollapse) {
    // Listen for Bootstrap collapse events
    navbarCollapse.addEventListener('show.bs.collapse', function() {
      document.body.classList.add('navbar-expanded');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function() {
      document.body.classList.remove('navbar-expanded');
    });
  }
});
