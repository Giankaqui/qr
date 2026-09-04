# QR dinámico (GitHub Pages)

El QR impreso apunta **siempre** a `https://giankaqui.github.io/qr/`.
Para cambiar a dónde lleva el QR no hace falta reimprimir nada: solo se edita el destino aquí.

## Cambiar el destino (30 segundos, desde el móvil o la web)

1. Abre [`index.html`](index.html) en GitHub y pulsa el lápiz ✏️.
2. Busca el bloque marcado con `EDITA SOLO ESTA LÍNEA`:

   ```html
   <meta http-equiv="refresh" content="0; url=https://example.com">
   ```

3. Cambia la URL (deja el `0;` delante) y pulsa **Commit changes**.
4. En ~1 minuto Pages se actualiza y el QR ya lleva al nuevo destino.

El enlace visible y el fallback en JavaScript leen esa misma etiqueta, así que **solo hay un sitio que tocar**.

## Regenerar el QR

Solo necesario si cambia la URL de Pages (nombre del repo o del usuario).

```bash
npm install
npm run qr        # escribe qr.svg
```

El SVG usa corrección de errores nivel **H** (el más alto), así que sigue leyéndose
con hasta ~30 % del código dañado o tapado por un logo.

## Cómo funciona el redirector

Tres capas, por si alguna falla:

1. `<meta http-equiv="refresh">` — funciona incluso sin JavaScript.
2. `location.replace()` — instantáneo y sin ensuciar el historial del navegador.
3. Un enlace visible, por si el navegador bloquea las dos anteriores.
