const guias = [
  // PLAYSTATION
  {
    id: "ps4-vue", sector: "playstation",
    titulo: "PS4: VUE & AfterFree Exploit",
    descripcion: "Carga de GoldHEN explicada para novatos. Sin riesgo de brick.",
    link: "PlayStation/ps4.html"
  },
  // NINTENDO, XBOX (Igual que antes, agregás tus links)
  
  // KINDLE (NUEVO)
  {
    id: "kindle-jb", sector: "kindle",
    titulo: "Kindle: Jailbreak (LanguageBreak)",
    descripcion: "Desbloqueá tu eReader para instalar salvapantallas personalizados y KOReader.",
    link: "Kindle/jailbreak.html"
  },

  // PC UTILS (NUEVO)
  {
    id: "pc-hxd", sector: "pc",
    titulo: "HxD Editor & UEFITool",
    descripcion: "Las mejores herramientas para modding, edición hexadecimal y flasheo de BIOS/Firmware.",
    link: "PC/herramientas.html"
  }
];

function cargarGuias() {
  guias.forEach(guia => {
    const contenedor = document.getElementById(`grid-${guia.sector}`);
    if (contenedor) {
      contenedor.innerHTML += `
        <div class="card">
          <div>
            <h3>${guia.titulo}</h3>
            <p>${guia.descripcion}</p>
          </div>
          <a href="${guia.link}" class="card-btn">Ver Guía Paso a Paso ➔</a>
        </div>
      `;
    }
  });
}
document.addEventListener("DOMContentLoaded", cargarGuias);