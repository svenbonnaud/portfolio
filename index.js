function toggleDetails(button) {
  const details = button.nextElementSibling;
  const isVisible = details.style.display === 'block';

  const title = button.getAttribute('data-title');

  details.style.display = isVisible ? 'none' : 'block';
  button.innerHTML = isVisible
    ? '➕ ' + title
    : '➖ ' + title;
}
