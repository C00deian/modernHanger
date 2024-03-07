const handleWhatsApp = () => {
  // Replace 'YOUR_PHONE_NUMBER' with your actual phone number.
  const phoneNumber = "919315337736";

  // Create a link for sending a WhatsApp message.
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  // Open the link in a new tab/window.
  window.open(whatsappLink, "_blank");
};

export default handleWhatsApp;