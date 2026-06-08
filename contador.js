// Llamar al backend y mostrar visitas
fetch("/contador")
  .then(res => res.json())
  .then(data => {
    document.getElementById("contador").textContent = data.visitas;
  })
  .catch(err => console.error("Error al obtener contador:", err));
