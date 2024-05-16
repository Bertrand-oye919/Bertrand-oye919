document.addEventListener("DOMContentLoaded", function() {
    createOvals();
  });
  
  function createOvals() {
    const container = document.getElementById("container");
    const numOvals = 5; // Number of ovals to create
  
    for (let i = 0; i < numOvals; i++) {
      const oval = document.createElement("div");
      oval.classList.add("oval");
      oval.style.left = `${getRandomPosition()}%`; // Random horizontal position
      oval.style.animationDelay = `${getRandomDelay()}s`; // Random animation delay
      container.appendChild(oval);
    }
  }
  
  function getRandomPosition() {
    return Math.random() * 100; // Random horizontal position
  }
  
  function getRandomDelay() {
    return Math.random() * 5; // Random animation delay (0-5 seconds)
  }
  