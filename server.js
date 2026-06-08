const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

// Ruta contador
app.get("/contador", (req, res) => {
  let data = { visitas: 0 };
  const filePath = path.join(__dirname, "contador.json");

  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  data.visitas += 1;
  fs.writeFileSync(filePath, JSON.stringify(data));

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});


