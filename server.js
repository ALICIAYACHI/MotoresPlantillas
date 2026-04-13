const express = require('express');
const path = require('path');
const ejs = require('ejs');
const pug = require('pug');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

const mensaje = 'Bienvenidos a los motores de plantilla';

// ─── PUG ────────────────────────────────────────────────────────
app.get('/pug', (req, res) => {
  const filePath = path.join(__dirname, 'views/pug/index.pug');
  const html = pug.renderFile(filePath, { mensaje, motor: 'Pug' });
  res.send(html);
});

// ─── HBS ────────────────────────────────────────────────────────
app.get('/hbs', (req, res) => {
  const filePath = path.join(__dirname, 'views/hbs/index.hbs');
  hbs.__express(filePath, { mensaje, motor: 'Handlebars (HBS)' }, (err, html) => {
    if (err) return res.status(500).send(err.message);
    res.send(html);
  });
});

// ─── EJS ────────────────────────────────────────────────────────
app.get('/ejs', (req, res) => {
  const filePath = path.join(__dirname, 'views/ejs/index.ejs');
  ejs.renderFile(filePath, { mensaje, motor: 'EJS' }, (err, html) => {
    if (err) return res.status(500).send(err.message);
    res.send(html);
  });
});

// ─── INICIO ─────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Motores de Plantilla</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, sans-serif; background: #f5f5f5; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
        .container { text-align: center; padding: 2rem; }
        h1 { font-size: 2rem; margin-bottom: 0.5rem; color: #1a1a1a; }
        p { color: #666; margin-bottom: 2rem; }
        .cards { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
        .card { background: white; border-radius: 12px; padding: 2rem 3rem; border: 1px solid #e0e0e0; text-decoration: none; transition: transform 0.2s; }
        .card:hover { transform: translateY(-4px); }
        .card h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .card p { font-size: 0.9rem; color: #888; margin: 0; }
        .pug { border-top: 4px solid #A44FBF; } .pug h2 { color: #A44FBF; }
        .hbs { border-top: 4px solid #F08030; } .hbs h2 { color: #F08030; }
        .ejs { border-top: 4px solid #3A8FD4; } .ejs h2 { color: #3A8FD4; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>⚙️ Motores de Plantilla</h1>
        <p>Elige un motor para ver el mensaje de bienvenida</p>
        <div class="cards">
          <a href="/pug" class="card pug"><h2>🟣 Pug</h2><p>Sintaxis indentada</p></a>
          <a href="/hbs" class="card hbs"><h2>🟠 Handlebars</h2><p>Sintaxis {{ mustache }}</p></a>
          <a href="/ejs" class="card ejs"><h2>🔵 EJS</h2><p>Sintaxis &lt;% %&gt;</p></a>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});