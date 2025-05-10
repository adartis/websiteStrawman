// File: script.js
// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', () => {
  // Select the quote element in the hero section
  const quote = document.querySelector('.quote');

  // Add an event listener for scrolling
  window.addEventListener('scroll', () => {
    // Define the scroll distance at which the quote is fully faded
    const fadePoint = 200; // in pixels
    const scrollY = window.scrollY; // current scroll position

    // Calculate new opacity: fades from 1 to 0 over fadePoint distance
    const newOpacity = 1 - scrollY / fadePoint;

    // Apply the opacity, clamped between 0 and 1
    quote.style.opacity = newOpacity > 0 ? newOpacity : 0;
  });
});