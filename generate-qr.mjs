// Genera qr.svg apuntando a la URL de GitHub Pages (NO a la URL destino:
// así el QR impreso nunca cambia, solo editas index.html).
//
//   npm install
//   npm run qr
//
// Puedes sobreescribir la URL sin tocar el archivo:  node generate-qr.mjs https://otra.url/
import { writeFileSync } from 'node:fs';
import QRCode from 'qrcode';

const PAGES_URL = process.argv[2] || 'https://giankaqui.github.io/qr/';
const OUT = 'qr.svg';

const svg = await QRCode.toString(PAGES_URL, {
  type: 'svg',
  errorCorrectionLevel: 'H', // máxima corrección: aguanta suciedad, logos y arrugas
  margin: 4,                 // "quiet zone" mínima recomendada
  width: 1024,
  color: { dark: '#000000ff', light: '#ffffffff' },
});

writeFileSync(OUT, svg);
console.log(`✓ ${OUT} generado → ${PAGES_URL}`);
