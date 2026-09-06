/*
 * Shopify Product Optimization
 * Lightweight interaction for product highlights
 */

document.addEventListener('DOMContentLoaded', () => {
  const highlights = document.querySelectorAll('.product-highlight');

  highlights.forEach((highlight) => {
    highlight.addEventListener('mouseenter', () => {
      highlight.classList.add('is-active');
    });

    highlight.addEventListener('mouseleave', () => {
      highlight.classList.remove('is-active');
    });
  });
});
