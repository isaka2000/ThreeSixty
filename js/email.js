function sendMail(event) {
  event.preventDefault(); // Prevent form from reloading the page

  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  const serviceID = "service_m4ctnnl";
  const templateID = "template_n7m5353";

  emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
          // Clear the input fields
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          // Show the modal
          showModal();
      })
      .catch((err) => {
          console.error("Failed to send email:", err);
      });
}

function showModal() {
  const modal = document.getElementById("thankYouModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("thankYouModal");
  modal.style.display = "none";
}
