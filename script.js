// TODOS LOS RAMOS con sus requisitos y apertura

const ramos = [
  // Primer Año
  { nombre: "Fundamentos de Enfermería I", requisitos: [], abre: ["Integración al Desempeño Profesional I"] },
  { nombre: "Química General y Orgánica", requisitos: [], abre: ["Bioquímica"] },
  { nombre: "Biología Celular y Genética", requisitos: [], abre: ["Bioquímica", "Biología del Desarrollo y Embriología Humana", "Histología", "Anatomía", "Fisiología General"] },
  { nombre: "Matemáticas", requisitos: [], abre: ["Investigación en Salud I"] },
  { nombre: "Física", requisitos: [], abre: ["Fisiología General", "Investigación en Salud I"] },
  { nombre: "Educación en Salud I", requisitos: [], abre: ["Educación en Salud II"] },
  { nombre: "Ciencias Sociales y Salud I", requisitos: [], abre: ["Ciencias Sociales y Salud II"] },
  { nombre: "Curso de Formación General", requisitos: [], abre: [] },
  { nombre: "Inglés I", requisitos: [], abre: ["Inglés II"] },

  // Segundo semestre primer año
  { nombre: "Salud Comunitaria I", requisitos: [], abre: ["Salud Comunitaria II"] },
  { nombre: "Bioquímica", requisitos: ["Química General y Orgánica", "Biología Celular y Genética"], abre: ["Farmacología"] },
  { nombre: "Biología del Desarrollo y Embriología Humana", requisitos: ["Biología Celular y Genética"], abre: ["Obstetricia Fisiológica I", "Neonatología I"] },
  { nombre: "Fisiología General", requisitos: ["Biología Celular y Genética", "Física"], abre: ["Agentes Vivos de Enfermedad", "Fisiología de Sistemas", "Fundamentos de Enfermería II", "Inmunología", "Neonatología I", "Obstetricia Fisiológica I"] },
  { nombre: "Anatomía", requisitos: ["Biología Celular y Genética"], abre: ["Obstetricia Fisiológica I", "Neonatología I", "Agentes Vivos de Enfermedad", "Fundamentos de Enfermería II", "Ginecología Fisiológica"] },
  { nombre: "Histología", requisitos: ["Biología Celular y Genética"], abre: ["Obstetricia Fisiológica I", "Neonatología I", "Agentes Vivos de Enfermedad", "Fundamentos de Enfermería II", "Ginecología Fisiológica"] },
  { nombre: "Integración al Desempeño Profesional I", requisitos: ["Fundamentos de Enfermería I"], abre: ["Fundamentos de Enfermería II", "Obstetricia Fisiológica I", "Neonatología I"] },
  { nombre: "Curso de Formación General II", requisitos: [], abre: [] },
  { nombre: "Inglés II", requisitos: ["Inglés I"], abre: ["Inglés III"] },

  // Segundo año
  { nombre: "Fundamentos de Enfermería II", requisitos: ["Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], abre: ["Integración al Desempeño Profesional II"] },
  { nombre: "Obstetricia Fisiológica I", requisitos: ["Biología del Desarrollo y Embriología Humana", "Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], abre: ["Obstetricia Fisiológica II"] },
  { nombre: "Neonatología I", requisitos: ["Biología del Desarrollo y Embriología Humana", "Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], abre: ["Neonatología II"] },
  { nombre: "Fisiología de Sistemas", requisitos: ["Fisiología General"], abre: ["Obstetricia Fisiológica II", "Farmacología", "Neonatología II", "Fisiopatología", "Reproducción Humana", "Ginecología Fisiológica", "Integración al Desempeño Profesional II"] },
  { nombre: "Inmunología", requisitos: ["Fisiología General"], abre: [] },
  { nombre: "Agentes Vivos de Enfermedad", requisitos: ["Fisiología General", "Anatomía", "Histología"], abre: ["Neonatología II", "Infectología"] },
  { nombre: "Ciencias Sociales y Salud II", requisitos: ["Ciencias Sociales y Salud I"], abre: ["Ciencias Sociales y Salud III"] },
  { nombre: "Inglés III", requisitos: ["Inglés II"], abre: [] },

  // Cuarto semestre (segundo año)
  { nombre: "Neonatología II", requisitos: ["Neonatología I", "Fisiología de Sistemas", "Agentes Vivos de Enfermedad"], abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Partos I", "Clínica de Puerperio", "Clínica de Atención Primaria I", "Clínica Neonatal I"] },
  { nombre: "Obstetricia Fisiológica II", requisitos: ["Obstetricia Fisiológica I", "Fisiología de Sistemas"], abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Partos I", "Clínica de Puerperio", "Clínica de Atención Primaria I"] },
  { nombre: "Ginecología Fisiológica", requisitos: ["Fisiología de Sistemas", "Anatomía", "Histología"], abre: ["Clínica de Atención Primaria I"] },
  { nombre: "Fisiopatología", requisitos: ["Fisiología de Sistemas"], abre: ["Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio", "Neonatología III", "Obstetricia Patológica"] },
  { nombre: "Infectología", requisitos: ["Agentes Vivos de Enfermedad"], abre: ["Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio"] },
  { nombre: "Farmacología", requisitos: ["Fisiología de Sistemas", "Bioquímica"], abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Puerperio", "Clínica de Partos I", "Clínica de Atención Primaria I", "Clínica Neonatal I"] },
  { nombre: "Integración al Desempeño Profesional II", requisitos: ["Fisiología de Sistemas", "Fundamentos de Enfermería II"], abre: ["Clínica de Salud Comunitaria", "Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio"] },
  { nombre: "Investigación en Salud I", requisitos: ["Matemáticas", "Física"], abre: ["Gestión y Liderazgo en Salud I", "Investigación en Salud II"] },

  // Tercer año - V semestre
  { nombre: "Clínica Neonatal I", requisitos: ["Neonatología II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Clínica de Partos I", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Clínica de Atención Primaria I", requisitos: ["Obstetricia Fisiológica II", "Ginecología Fisiológica", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: ["Ginecología Patológica"] },
  { nombre: "Clínica de Puerperio", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Clínica de Salud Comunitaria", requisitos: ["Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Módulo Integrado Interdisciplinario Multiprofesional I", requisitos: [], abre: ["Módulo Integrado Interdisciplinario Multiprofesional II"] },

  // VI semestre (tercer año)
  { nombre: "Neonatología III", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología"], abre: ["Enfermería Médico Quirúrgica", "Clínica Neonatal II"] },
  { nombre: "Salud Comunitaria II", requisitos: ["Salud Comunitaria I"], abre: ["Clínica de Atención Primaria II"] },
  { nombre: "Obstetricia Patológica", requisitos: ["Obstetricia Fisiológica II", "Fisiopatología", "Farmacología"], abre: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico", "Enfermería Médico Quirúrgica", "Clínica de Atención Primaria II"] },
  { nombre: "Gestión y Liderazgo en Salud I", requisitos: ["Investigación en Salud I"], abre: ["Gestión y Liderazgo en Salud II"] },
  { nombre: "Educación en Salud II", requisitos: ["Educación en Salud I"], abre: [] },
  { nombre: "Investigación en Salud II", requisitos: ["Investigación en Salud I"], abre: ["Investigación en Salud III"] },
  { nombre: "Ciencias Sociales y Salud III", requisitos: ["Ciencias Sociales y Salud II"], abre: ["Ciencias Sociales y Salud IV"] },
  { nombre: "Curso de Formación General III", requisitos: [], abre: [] },

  // Cuarto año - VII semestre
  { nombre: "Enfermería Médico Quirúrgica", requisitos: ["Neonatología III", "Obstetricia Patológica"], abre: ["Clínica de Alto Riesgo Obstétrico", "Clínica de Partos II", "Clínica Neonatal II", "Clínica de Enfermería Médico Quirúrgica"] },
  { nombre: "Reproducción Humana", requisitos: ["Fisiología de Sistemas"], abre: [] },
  { nombre: "Ginecología Patológica", requisitos: ["Clínica de Atención Primaria I"], abre: ["Clínica de Atención Primaria II", "Clínica de Enfermería Médico Quirúrgica"] },
  { nombre: "Investigación en Salud III", requisitos: ["Investigación en Salud II"], abre: ["Seminario Unidad de Investigación I"] },
  { nombre: "Ciencias Sociales y Salud IV", requisitos: ["Ciencias Sociales y Salud III"], abre: [] },

  // VIII semestre
  { nombre: "Clínica Neonatal II", requisitos: ["Neonatología III", "Enfermería Médico Quirúrgica"], abre: ["Internado Neonatología"] },
  { nombre: "Clínica de Partos II", requisitos: ["Obstetricia Patológica", "Enfermería Médico Quirúrgica"], abre: ["Internado Obstetricia"] },
  { nombre: "Clínica de Atención Primaria II", requisitos: ["Obstetricia Patológica", "Ginecología Patológica", "Salud Comunitaria II"], abre: ["Internado Atención Primaria"] },
  { nombre: "Clínica de Alto Riesgo Obstétrico", requisitos: ["Obstetricia Patológica", "Enfermería Médico Quirúrgica"], abre: ["Internado Obstetricia"] },
  { nombre: "Clínica de Enfermería Médico Quirúrgica", requisitos: ["Enfermería Médico Quirúrgica", "Ginecología Patológica"], abre: ["Internado Ginecología"] },
  { nombre: "Modulo Integrado Interdisciplinario Multiprofesional II", requisitos: ["Módulo Integrado Interdisciplinario Multiprofesional I"], abre: [] },

  // Quinto año IX semestre
  { nombre: "Internado Neonatología", requisitos: ["Clínica Neonatal II"], abre: [] },
  { nombre: "Internado Obstetricia", requisitos: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico"], abre: [] },
  { nombre: "Internado Atención Primaria", requisitos: ["Clínica de Atención Primaria II"], abre: [] },
  { nombre: "Internado Ginecología", requisitos: ["Clínica de Enfermería Médico Quirúrgica"], abre: [] },
  { nombre: "Internado Electivo", requisitos: [], abre: [] },
  { nombre: "Seminario Unidad de Investigación I", requisitos: ["Investigación en Salud III"], abre: ["Seminario Unidad de Investigación II"] },

  // X semestre
  { nombre: "Internado Neonatología", requisitos: ["Clínica Neonatal II"], abre: [] },
  { nombre: "Internado Obstetricia", requisitos: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico"], abre: [] },
  { nombre: "Internado Atención Primaria", requisitos: ["Clínica de Atención Primaria II"], abre: [] },
  { nombre: "Internado Ginecología", requisitos: ["Clínica de Enfermería Médico Quirúrgica"], abre: [] },
  { nombre: "Internado Electivo", requisitos: [], abre: [] },
  { nombre: "Seminario Unidad de Investigación II", requisitos: ["Seminario Unidad de Investigación I"], abre: [] }
];

// Ahora vamos a organizar los ramos en años y semestres para mostrar:

const años = [
  {
    nombre: "Primer Año",
    semestres: [
      { nombre: "I Semestre", nombresRamos: [
        "Fundamentos de Enfermería I", "Química General y Orgánica", "Biología Celular y Genética", "Matemáticas", "Física", "Educación en Salud I", "Ciencias Sociales y Salud I", "Curso de Formación General", "Inglés I"
      ]},
      { nombre: "II Semestre", nombresRamos: [
        "Salud Comunitaria I", "Bioquímica", "Biología del Desarrollo y Embriología Humana", "Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I", "Curso de Formación General II", "Inglés II"
      ]}
    ]
  },
  {
    nombre: "Segundo Año",
    semestres: [
      { nombre: "III Semestre", nombresRamos: [
        "Fundamentos de Enfermería II", "Obstetricia Fisiológica I", "Neonatología I", "Fisiología de Sistemas", "Inmunología", "Agentes Vivos de Enfermedad", "Ciencias Sociales y Salud II", "Inglés III"
      ]},
      { nombre: "IV Semestre", nombresRamos: [
        "Neonatología II", "Obstetricia Fisiológica II", "Ginecología Fisiológica", "Fisiopatología", "Infectología", "Farmacología", "Integración al Desempeño Profesional II", "Investigación en Salud I"
      ]}
    ]
  },
  {
    nombre: "Tercer Año",
    semestres: [
      { nombre: "V Semestre", nombresRamos: [
        "Clínica Neonatal I", "Clínica de Partos I", "Clínica de Atención Primaria I", "Clínica de Puerperio", "Clínica de Salud Comunitaria", "Módulo Integrado Interdisciplinario Multiprofesional I"
      ]},
      { nombre: "VI Semestre", nombresRamos: [
        "Neonatología III", "Salud Comunitaria II", "Obstetricia Patológica", "Gestión y Liderazgo en Salud I", "Educación en Salud II", "Investigación en Salud II", "Ciencias Sociales y Salud III", "Curso de Formación General III"
      ]}
    ]
  },
  {
    nombre: "Cuarto Año",
    semestres: [
      { nombre: "VII Semestre", nombresRamos: [
        "Enfermería Médico Quirúrgica", "Reproducción Humana", "Ginecología Patológica", "Investigación en Salud III", "Ciencias Sociales y Salud IV"
      ]},
      { nombre: "VIII Semestre", nombresRamos: [
        "Clínica Neonatal II", "Clínica de Partos II", "Clínica de Atención Primaria II", "Clínica de Alto Riesgo Obstétrico", "Clínica de Enfermería Médico Quirúrgica", "Modulo Integrado Interdisciplinario Multiprofesional II"
      ]}
    ]
  },
  {
    nombre: "Quinto Año",
    semestres: [
      { nombre: "IX Semestre", nombresRamos: [
        "Internado Neonatología", "Internado Obstetricia", "Internado Atención Primaria", "Internado Ginecología", "Internado Electivo", "Seminario Unidad de Investigación I"
      ]},
      { nombre: "X Semestre", nombresRamos: [
        "Internado Neonatología", "Internado Obstetricia", "Internado Atención Primaria", "Internado Ginecología", "Internado Electivo", "Seminario Unidad de Investigación II"
      ]}
    ]
  }
];

const mallaContainer = document.getElementById("malla-container");

// Función para crear y mostrar la malla
function mostrarMalla() {
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
        if (!ramoObj) return; // si no existe el ramo, saltear

        const ramoDiv = document.createElement("div");
        ramoDiv.classList.add("ramo");
        ramoDiv.textContent = ramoObj.nombre;
        ramoDiv.dataset.nombre = ramoObj.nombre;

        // Si tiene requisitos pendientes, bloqueado
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
}

// Función para manejar clicks y desbloquear
mallaContainer.addEventListener("click", e => {
  if (!e.target.classList.contains("ramo")) return;
  if (e.target.classList.contains("bloqueado")) return;

  // Si ya está aprobado, no hace nada
  if (e.target.classList.contains("aprobado")) return;

  e.target.classList.add("aprobado");

  const nombre = e.target.dataset.nombre;
  const desbloquea = ramos.find(r => r.nombre === nombre)?.abre || [];

  desbloquea.forEach(nombreDesbloqueado => {
    const ramoObj = ramos.find(r => r.nombre === nombreDesbloqueado);
    if (!ramoObj) return;

    // Quitar requisito aprobado
    ramoObj.requisitos = ramoObj.requisitos.filter(r => r !== nombre);

    // Si ya no tiene requisitos, desbloquear en la UI
    if (ramoObj.requisitos.length === 0) {
      const elementoDesbloqueado = [...document.querySelectorAll(".ramo")].find(
        div => div.dataset.nombre === nombreDesbloqueado
      );
      if (elementoDesbloqueado) {
        elementoDesbloqueado.classList.remove("bloqueado");
      }
    }
  });
});

mostrarMalla();
