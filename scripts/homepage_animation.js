const path = anime.path('#path');

anime({
  targets: '#butterfly',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  duration: 50000,
  easing: 'linear',
  loop: true
});
