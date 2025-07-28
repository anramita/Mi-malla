const ramos = [
  { nombre: "Fundamentos de Enfermería I", requisitos: [], abre: ["Interacción al Desempeño Profesional I"] },
  { nombre: "Química General y Orgánica", requisitos: [], abre: ["Bioquímica"] },
  { nombre: "Biología Celular y Genética", requisitos: [], abre: ["Bioquímica", "Biología del Desarrollo y Embriología Humana", "Histología", "Anatomía", "Fisiología General"] },
  { nombre: "Matemáticas", requisitos: [], abre: ["Investigación en Salud I"] },
  { nombre: "Física", requisitos: [], abre: ["Fisiología General", "Investigación en Salud I"] },
  { nombre: "Educación en Salud I", requisitos: [], abre: ["Educación en Salud II"] },
  { nombre: "Ciencias Sociales y Salud I", requisitos: [], abre: ["Ciencias Sociales y Salud II"] },
  { nombre: "Curso de Formación General", requisitos: [], abre: [] },
  { nombre: "Inglés I", requisitos: [], abre: ["Inglés II"] },
  { nombre: "Salud Comunitaria I", requisitos: [], abre: ["Salud Comunitaria II"] },
  { nombre: "Bioquímica", requisitos: ["Química General y Orgánica", "Biología Celular y Genética"], abre: ["Farmacología"] },
  { nombre: "Biología del Desarrollo y Embriología Humana", requisitos: ["Biología Celular y Genética"], abre: ["Obstetricia Fisiológica I", "Neonatología I"] },
  { nombre: "Fisiología General", requisitos: ["Biología Celular y Genética", "Física"], abre: ["Agentes Vivos de Enfermedad", "Fisiología de Sistemas", "Fundamentos de Enfermería II", "Inmunología", "Neonatología I", "Obstetricia Fisiológica I"] },
  { nombre: "Anatomía", requisitos: ["Biología Celular y Genética"], abre: ["Obstetricia Fisiológica I", "Neonatología I", "Agentes Vivos de Enfermedad", "Fundamentos de Enfermería II", "Ginecología Fisiológica"] },
  { nombre: "Histología", requisitos: ["Biología Celular y Genética"], abre: ["Obstetricia Fisiológica I", "Neonatología I", "Agentes Vivos de Enfermedad", "Fundamentos de Enfermería II", "Ginecología Fisiológica"] },
  { nombre: "Integración al Desempeño Profesional I", requisitos: ["Fundamentos de Enfermería I"], abre: ["Fundamentos de Enfermería II", "Obstetricia Fisiológica I", "Neonatología I"] },
  { nombre: "Curso de Formación General II", requisitos: [], abre: [] },
  { nombre: "Inglés II", requisitos: ["Inglés I"], abre: ["Inglés III"] },
  { nombre: "Fundamentos de Enfermería II", requisitos: ["Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], abre: ["Integración al Desempeño Profesional II"] },
  { nombre: "Obstetricia Fisiológica I", requisitos: ["Biología del Desarrollo y Embriología Humana", "Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], abre: ["Obstetricia Fisiológica II"] },
  { nombre: "Neonatología I", requisitos: ["Biología del Desarrollo y Embriología Humana", "Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], abre: ["Neonatología II"] },
  { nombre: "Fisiología de Sistemas", requisitos: ["Fisiología General"], abre: ["Obstetricia Fisiológica II", "Farmacología", "Neonatología II", "Fisiopatología", "Reproducción Humana", "Ginecología Fisiológica", "Integración al Desempeño Profesional II"] },
  { nombre: "Inmunología", requisitos: ["Fisiología General"], abre: [] },
  { nombre: "Agentes Vivos de Enfermedad", requisitos: ["Fisiología General", "Anatomía", "Histología"], abre: ["Neonatología II", "Infectología"] },
  { nombre: "Ciencias Sociales y Salud II", requisitos: ["Ciencias Sociales y Salud I"], abre: ["Ciencias Sociales y Salud III"] },
  { nombre: "Inglés III", requisitos: ["Inglés II"], abre: [] },
  { nombre: "Neonatología II", requisitos: ["Neonatología I", "Fisiología de Sistemas", "Agentes Vivos de Enfermedad"], abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Partos I", "Clínica de Puerperio", "Clínica de Atención Primaria I", "Clínica Neonatal I"] },
  { nombre: "Obstetricia Fisiológica II", requisitos: ["Obstetricia Fisiológica I", "Fisiología de Sistemas"], abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Partos I", "Clínica de Puerperio", "Clínica de Atención Primaria I"] },
  { nombre: "Ginecología Fisiológica", requisitos: ["Fisiología de Sistemas", "Anatomía", "Histología"], abre: ["Clínica de Atención Primaria I"] },
  { nombre: "Fisiopatología", requisitos: ["Fisiología de Sistemas"], abre: ["Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio", "Neonatología III", "Obstetricia Patológica"] },
  { nombre: "Infectología", requisitos: ["Agentes Vivos de Enfermedad"], abre: ["Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio"] },
  { nombre: "Farmacología", requisitos: ["Fisiología de Sistemas", "Bioquímica"], abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Puerperio", "Clínica de Partos I", "Clínica de Atención Primaria I", "Clínica Neonatal I"] },
  { nombre: "Integración al Desempeño Profesional II", requisitos: ["Fisiología de Sistemas", "Fundamentos de Enfermería II"], abre: ["Clínica de Salud Comunitaria", "Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio"] },
  { nombre: "Investigación en Salud I", requisitos: ["Matemáticas", "Física"], abre: ["Gestión y Liderazgo en Salud I", "Investigación en Salud II"] },
  { nombre: "Clínica Neonatal I", requisitos: ["Neonatología II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Clínica de Partos I", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Clínica de Atención Primaria I", requisitos: ["Obstetricia Fisiológica II", "Ginecología Fisiológica", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: ["Ginecología Patológica"] },
  { nombre: "Clínica de Puerperio", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Clínica de Salud Comunitaria", requisitos: ["Integración al Desempeño Profesional II"], abre: [] },
  { nombre: "Módulo Integrado Interdisciplinario Multiprofesional I", requisitos: [], abre: ["Módulo Integrado Interdisciplinario Multiprofesional II"] },
  { nombre: "Neonatología III", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología"], abre: ["Enfermería Médico Quirúrgica", "Clínica Neonatal II"] },
  { nombre: "Salud Comunitaria II", requisitos: ["Salud Comunitaria I"], abre: ["Clínica de Atención Primaria II"] },
  { nombre: "Obstetricia Patológica", requisitos: ["Obstetricia Fisiológica II", "Fisiopatología", "Farmacología"], abre: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico", "Enfermería Médico Quirúrgica", "Clínica de Atención Primaria II"] },
  { nombre: "Gestión y Liderazgo en Salud I", requisitos: ["Investigación en Salud I"], abre: ["Gestión y Liderazgo en Salud II"] },
  { nombre: "Educación en Salud II", requisitos: ["Educación en Salud I"], abre: [] },
  { nombre: "Investigación en Salud II", requisitos: ["Investigación en Salud I"], abre: ["Investigación en Salud III"] },
  { nombre: "Ciencias Sociales y Salud III", requisitos: ["Ciencias Sociales y Salud II"], abre: ["Ciencias Sociales y Salud IV"] },
  { nombre: "Curso de Formación General III", requisitos: [], abre: [] },
  { nombre: "Enfermería Médico Quirúrgica", requisitos: ["Neonatología III", "Obstetricia Patológica"], abre: ["Clínica de Alto Riesgo Obstétrico", "Clínica de Partos II", "Clínica Neonatal II", "Clínica de Enfermería Médico Quirúrgica"] },
  { nombre: "Reproducción Humana", requisitos: ["Fisiología de Sistemas"], abre: [] },
  { nombre: "Ginecología Patológica", requisitos: ["Clínica de Atención Primaria I"], abre: ["Clínica de Atención Primaria II", "Clínica de Enfermería Médico Quirúrgica"] },
  { nombre: "Investigación en Salud III", requisitos: ["Investigación en Salud II"], abre: ["Seminario Unidad de Investigación I"] },
  { nombre: "Ciencias Sociales y Salud IV", requisitos: ["Ciencias Sociales y Salud III"], abre: [] },
  { nombre: "Clínica Neonatal II", requisitos: ["Neonatología III", "Enfermería Médico Quirúrgica"], abre: ["Internado Neonatología"] },
  { nombre: "Clínica de Partos II", requisitos: ["Obstetricia Patológica", "Enfermería Médico Quirúrgica"], abre: ["Internado Obstetricia"] },
  { nombre: "Clínica de Atención Primaria II", requisitos: ["Obstetricia Patológica", "Ginecología Patológica", "Salud Comunitaria II"], abre: ["Internado Atención Primaria"] },
  { nombre: "Clínica de Alto Riesgo Obstétrico", requisitos: ["Obstetricia Patológica", "Enfermería Médico Quirúrgica"], abre: ["Internado Obstetricia"] },
  { nombre: "Clínica de Enfermería Médico Quirúrgica", requisitos: ["Enfermería Médico Quirúrgica", "Ginecología Patológica"], abre: ["Internado Ginecología"] },
  { nombre: "Modulo Integrado Interdisciplinario Multiprofesional II", requisitos: ["Módulo Integrado Interdisciplinario Multiprofesional I"], abre: [] },
  { nombre: "Internado Neonatología", requisitos: ["Clínica Neonatal II"], abre: [] },
  { nombre: "Internado Obstetricia", requisitos: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico"], abre: [] },
  { nombre: "Internado Atención Primaria", requisitos: ["Clínica de Atención Primaria II"], abre: [] },
  { nombre: "Internado Ginecología", requisitos: ["Clínica de Enfermería Médico Quirúrgica"], abre: [] },
  { nombre: "Internado Electivo", requisitos: [], abre: [] },
  { nombre: "Seminario Unidad de Investigación I", requisitos: ["Investigación en Salud III"], abre: ["Seminario Unidad de Investigación II"] },
  { nombre: "Seminario Unidad de Investigación II", requisitos: ["Seminario Unidad de Investigación I"], abre: [] }
];

const malla = document.getElementById("malla");

// Crear elementos
ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.textContent = ramo.nombre;
  div.dataset.nombre = ramo.nombre;

  // Si tiene requisitos, está bloqueado
  if (ramo.requisitos.length > 0) div.classList.add("bloqueado");

  malla.appendChild(div);
});

malla.addEventListener("click", e => {
  const target = e.target;
  if (!target.classList.contains("ramo") || target.classList.contains("bloqueado")) return;

  // Marcar como aprobado
  target.classList.add("aprobado");

  const nombre = target.dataset.nombre;
  const desbloquea = ramos.find(r => r.nombre === nombre)?.abre || [];

  desbloquea.forEach(nombreDesbloqueado => {
    const desbloqueado = document.querySelector(`[data-nombre='${nombreDesbloqueado}']`);
    if (desbloqueado) {
      const ramoObj = ramos.find(r => r.nombre === nombreDesbloqueado);
      if (ramoObj) {
        // Quitar el requisito aprobado
        ramoObj.requisitos = ramoObj.requisitos.filter(r => r !== nombre);
        if (ramoObj.requisitos.length === 0) desbloqueado.classList.remove("bloqueado");
      }
    }
  });
});
