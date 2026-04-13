# Motores de Plantilla — Node.js + Express

Proyecto educativo que demuestra el uso de tres motores de plantilla para renderizar el mensaje:
**"Bienvenidos a los motores de plantilla"**

## Estructura del proyecto

```
template-engines/
├── server.js              ← Servidor Express principal
├── package.json
└── views/
    ├── pug/
    │   └── index.pug      ← Vista con Pug
    ├── hbs/
    │   └── index.hbs      ← Vista con Handlebars
    └── ejs/
        └── index.ejs      ← Vista con EJS
```

## Instalación y ejecución

```bash
npm install
node server.js
```

Luego visitar:
- http://localhost:3000       → Menú principal
- http://localhost:3000/pug   → Vista con Pug
- http://localhost:3000/hbs   → Vista con Handlebars
- http://localhost:3000/ejs   → Vista con EJS

## Los tres motores de plantilla

### 1. Pug (antiguo Jade)
- Sintaxis basada en indentación (sin etiquetas de cierre)
- Muy limpia y concisa
- Ejemplo: `h1 #{mensaje}`

### 2. Handlebars (HBS)
- Sintaxis de doble llave {{ }} (mustache)
- Compatible con HTML estándar
- Ejemplo: `<h1>{{mensaje}}</h1>`

### 3. EJS (Embedded JavaScript)
- Etiquetas `<% %>` para código JS embebido
- Muy familiar para desarrolladores HTML/JS
- Ejemplo: `<h1><%= mensaje %></h1>`

## Análisis comparativo (IA)

| Criterio         | Pug          | HBS               | EJS                |
|------------------|--------------|-------------------|--------------------|
| Sintaxis         | Indentada    | Mustache {{ }}    | Etiquetas <% %>    |
| Curva aprendizaje| Media        | Baja              | Muy baja           |
| Lógica en vista  | Sí           | Limitada          | Sí (JS completo)   |
| Compatibilidad   | Alta         | Alta              | Alta               |
| Rendimiento      | Bueno        | Bueno             | Bueno              |
| Popularidad      | Media        | Alta              | Alta               |

**Recomendación**: Para equipos nuevos → EJS (fácil) o HBS (seguro). Para proyectos grandes → Pug (elegante).
