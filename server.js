const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

const mensaje = 'Bienvenidos a los motores de plantilla';

app.get('/pug', (req, res) => {
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, 'views/pug'));
  res.render('index', { mensaje, motor: 'Pug', color: '#A44FBF' });
});

app.get('/hbs', (req, res) => {
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'views/hbs'));
  res.render('index', { mensaje, motor: 'Handlebars (HBS)', color: '#F08030' });
});

app.get('/ejs', (req, res) => {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views/ejs'));
  res.render('index', { mensaje, motor: 'EJS', color: '#3A8FD4' });
});

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