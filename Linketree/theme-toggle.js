// theme-toggle.js
// Adiciona um botão fixo no canto da tela que alterna a página
// entre tema claro e tema escuro ao passar o mouse (hover).

document.addEventListener('DOMContentLoaded', function () {
  // Estilos do tema claro (injetados dinamicamente, sem tocar no style.css)
  var lightThemeCSS = [
    'body.light-theme {',
    '  background: linear-gradient(135deg, #eef1f8 0%, #e3e7f4 50%, #d8deee 100%) !important;',
    '}',
    'body.light-theme .profile-name {',
    '  color: #101a3d;',
    '}',
    'body.light-theme .profile-bio {',
    '  color: rgba(16, 26, 61, 0.72);',
    '}',
    'body.light-theme .link-btn {',
    '  background: rgba(16, 26, 61, 0.06);',
    '  border-color: rgba(16, 26, 61, 0.16);',
    '  color: #101a3d;',
    '}',
    'body.light-theme .link-btn:hover {',
    '  background: rgba(16, 26, 61, 0.12);',
    '}',
    'body.light-theme .footer {',
    '  color: rgba(16, 26, 61, 0.45);',
    '}',
    'body.light-theme #theme-toggle-btn {',
    '  background: rgba(16, 26, 61, 0.08) !important;',
    '  border-color: rgba(16, 26, 61, 0.25) !important;',
    '  color: #101a3d !important;',
    '}'
  ].join('\n');

  var styleTag = document.createElement('style');
  styleTag.textContent = lightThemeCSS;
  document.head.appendChild(styleTag);

  // Cria o botão
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'theme-toggle-btn';
  btn.textContent = '🌙';
  btn.title = 'Passe o mouse para alternar entre tema claro e escuro';
  btn.setAttribute('aria-label', 'Alternar tema claro/escuro');

  // Estilo do botão (canto superior direito da tela)
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

  // Ao passar o mouse (hover): ativa o tema claro
  btn.addEventListener('mouseenter', function () {
    document.body.classList.add('light-theme');
    btn.textContent = '☀️';
    style.transform = 'scale(1.08)';
  });

  // Ao tirar o mouse: volta para o tema escuro (original)
  btn.addEventListener('mouseleave', function () {
    document.body.classList.remove('light-theme');
    btn.textContent = '🌙';
    style.transform = 'scale(1)';
  });

  document.body.appendChild(btn);
});
