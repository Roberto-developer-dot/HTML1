document.querySelectorAll('.card-flip').forEach(function(card) {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});