const app = new Framework7({
  el: '#app',
  name: 'Mi App',
  id: 'com.miempresa.miapp',
  theme: 'auto',
  routes: [
    { path: '/', url: './pages/home.html' },
    { path: '/tienda/', url: './pages/tienda.html' },
    { path: '/ofertas/', url: './pages/ofertas.html' },
    { path: '/registro/', url: './pages/registro.html' },
    { path: '/perfil/', url: './pages/perfil.html' },
    { path: '/carrito/', url: './pages/carrito.html' },
    { path: '/detalles/', url: './pages/detalles.html' },
    { path: '/nosotros/', url: './pages/nosotros.html' },
    { path: '/contacto/', url: './pages/contacto.html' },
    { path: '/privacidad/', url: './pages/privacidad.html' },
  ],
});

$$(document).on('page:init', '.page[data-name="ejemplo"]', function () {
  const button = document.getElementById('demo-alert');
  if (button) button.addEventListener('click', () => app.dialog.alert('Framework7 está funcionando correctamente.', 'Página ejemplo'));
});
