const ramos = [
  { nombre: "Fundamentos de Enfermería I", requisitos: [], abre: ["Integración al Desempeño Profesional I"] },
  { nombre: "Integración al Desempeño Profesional I", requisitos: ["Fundamentos de Enfermería I"], abre: [] },
  { nombre: "Química General y Orgánica", requisitos: [], abre: ["Bioquímica"] },
  { nombre: "Bioquímica", requisitos: ["Química General y Orgánica"], abre: [] }
];

const años = [
  {
    nombre: "Primer Año",
    semestres: [
      { nombre: "I Semestre", nombresRamos: ["Fundamentos de Enfermería I", "Química General y Orgánica"] },
      { nombre: "II Semestre", nombresRamos: ["Integración al Desempeño Profesional I", "Bioquímica"] }
    ]
  }
];

const mallaContainer = document.getElementById("malla-container");
mallaContainer.innerHTML = "";

años.forEach(ano => {
  const anoDiv = document.createElement("div");
  anoDiv.classList.add("ano");

  const tituloAno = document.createElement("h2");
  tituloAno.textContent = ano.nombre;
  anoDiv.appendChild(tituloAno);

  ano.semestres.forEach(semestre => {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");

    const tituloSemestre = document.createElement("h3");
    tituloSemestre.textContent = semestre.nombre;
    semestreDiv.appendChild(tituloSemestre);

    const mallaDiv = document.createElement("div");
    mallaDiv.classList.add("malla");

    semestre.nombresRamos.forEach(nombreRamo => {
      const ramoObj = ramos.find(r => r.nombre === nombreRamo);
      if (!ramoObj) return;

      const ramoDiv = document.createElement("div");
      ramoDiv.classList.add("ramo");
      ramoDiv.textContent = ramoObj.nombre;
      ramoDiv.dataset.nombre = ramoObj.nombre;

      if (ramoObj.requisitos.length > 0) {
        ramoDiv.classList.add("bloqueado");
      }

      mallaDiv.appendChild(ramoDiv);
    });

    semestreDiv.appendChild(mallaDiv);
    anoDiv.appendChild(semestreDiv);
  });

  mallaContainer.appendChild(anoDiv);
});
