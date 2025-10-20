require('@testing-library/jest-dom');

test('existe el div con id="root" en el documento', () => {
  // Simulamos el HTML base (como el index.html real)
  document.body.innerHTML = `
    <div id="root"></div>
  `;

  const rootDiv = document.getElementById('root');
  expect(rootDiv).toBeInTheDocument();
});