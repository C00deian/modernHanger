const handleWhatsApp = () => {
  // Replace 'YOUR_PHONE_NUMBER' with your actual phone number.
  const phoneNumber = "919315337736";

  // Replace 'YOUR_MESSAGE' with the desired pre-filled message.
  const preFilledMessage = "Hi! How can I help you ?";

  // Encode the message for the URL.
  const encodedMessage = encodeURIComponent(preFilledMessage);

  // Create a link for sending a WhatsApp message with a pre-filled message.
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open the link in a new tab/window.
  window.open(whatsappLink, "_blank");
  
};





export default handleWhatsApp;
