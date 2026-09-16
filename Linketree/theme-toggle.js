// theme-toggle.js
// Adiciona um botão fixo no canto da tela que muda a cor de fundo da página
// quando o mouse passa por cima (hover).

document.addEventListener('DOMContentLoaded', function () {
  // Paleta de cores que serão usadas no fundo da página
  var backgrounds = [
    'linear-gradient(135deg, #0a2a6e 0%, #1a4fc4 50%, #0d3b9e 100%)', // original
    'linear-gradient(135deg, #6e0a2a 0%, #c41a4f 50%, #9e0d3b 100%)',
    'linear-gradient(135deg, #0a6e2a 0%, #1ac44f 50%, #0d9e3b 100%)',
    'linear-gradient(135deg, #6e5a0a 0%, #c4a41a 50%, #9e800d 100%)',
    'linear-gradient(135deg, #3a0a6e 0%, #7a1ac4 50%, #5b0d9e 100%)'
  ];

  var originalBackground = document.body.style.background;

  // Cria o botão
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'color-toggle-btn';
  btn.textContent = '🎨';
  btn.title = 'Passe o mouse para mudar a cor da página';
  btn.setAttribute('aria-label', 'Mudar cor da página');

  // Estilo do botão (canto superior direito da tela, estilo "header")
  var style = btn.style;
  style.position = 'fixed';
  style.top = '16px';
  style.right = '16px';
  style.zIndex = '9999';
  style.width = '46px';
  style.height = '46px';
  style.borderRadius = '50%';
  style.border = '1px solid rgba(255, 255, 255, 0.35)';
  style.background = 'rgba(255, 255, 255, 0.15)';
  style.color = '#ffffff';
  style.fontSize = '1.25rem';
  style.lineHeight = '1';
  style.cursor = 'pointer';
  style.backdropFilter = 'blur(8px)';
  style.webkitBackdropFilter = 'blur(8px)';
  style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.25)';
  style.transition = 'background 0.2s ease, transform 0.15s ease';

  // Ao passar o mouse (hover): muda a cor de fundo da página aleatoriamente
  btn.addEventListener('mouseenter', function () {
    var random = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.background = random;
    style.background = 'rgba(255, 255, 255, 0.3)';
    style.transform = 'scale(1.08)';
  });

  // Ao tirar o mouse: volta o botão ao normal (mantém a cor escolhida na página)
  btn.addEventListener('mouseleave', function () {
    style.background = 'rgba(255, 255, 255, 0.15)';
    style.transform = 'scale(1)';
  });

  // Clique: volta ao fundo original
  btn.addEventListener('click', function () {
    document.body.style.background = originalBackground || '';
  });

  document.body.appendChild(btn);
});
