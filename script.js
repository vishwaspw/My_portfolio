// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Typing effect for the hero section
  const typingEffect = () => {
    const text = "Passionate about technology and data science.";
    const typingSpeed = 100; // typing speed in milliseconds
    let index = 0;
  
    function type() {
      if (index < text.length) {
        document.querySelector(".typing-effect").textContent += text[index];
        index++;
        setTimeout(type, typingSpeed);
      }
    }
  
    document.querySelector(".typing-effect").textContent = ""; // Clear existing text
    type();
  };
  typingEffect();
  
  // Contact form validation
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Simulate form submission success
    alert("Thank you for your message! I'll get back to you soon.");
    document.querySelector("form").reset();
  });
  
  // jQuery for fade-in animations
  $(document).ready(function () {
    $(".projects .project-card, .about .profile-card").hide().fadeIn(1500);
  });
  