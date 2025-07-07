function toggleDetails(button) {
  const details = button.nextElementSibling;
  const isVisible = details.style.display === 'block';

  details.style.display = isVisible ? 'none' : 'block';
  button.innerHTML = isVisible
    ? '➕ ' + button.innerHTML.slice(2)
    : '➖ ' + button.innerHTML.slice(2);
}
