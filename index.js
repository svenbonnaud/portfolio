function toggleDetails(button) {
  const details = button.nextElementSibling;
  const isVisible = details.style.display === 'block';

  details.style.display = isVisible ? 'none' : 'block';
  button.innerHTML = isVisible
    ? '➕ Réécriture de la commande cat en C'
    : '➖ Réécriture de la commande cat en C';
}
