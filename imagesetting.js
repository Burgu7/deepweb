document.addEventListener('keydown', (event) => {
  if (event.key === 'F12' || event.ctrlKey && event.shiftKey && event.key === 'I') {
    event.preventDefault();
  }
});

setInterval(() => {
  if (window.outerWidth - window.innerWidth > 100) {
    console.clear();
    location.reload();
  }
}, 500);
