const ramos = [
  // === PRIMER AÑO ===
  // I Semestre
  { nombre: "Fundamentos de Enfermería I", requisitos: [], semestre: "I", abre: ["Integración al Desempeño Profesional I"] },
  { nombre: "Química General y Orgánica", requisitos: [], semestre: "I", abre: ["Bioquímica"] },
  { nombre: "Biología Celular y Genética", requisitos: [], semestre: "I", abre: ["Bioquímica", "Biología del Desarrollo y Embriología Humana", "Histología", "Anatomía", "Fisiología General"] },
  { nombre: "Matemáticas", requisitos: [], semestre: "I", abre: ["Investigación en Salud I"] },
  { nombre: "Física", requisitos: [], semestre: "I", abre: ["Fisiología General", "Investigación en Salud I"] },
  { nombre: "Educación en Salud I", requisitos: [], semestre: "I", abre: ["Educación en Salud II"] },
  { nombre: "Ciencias Sociales y Salud I", requisitos: [], semestre: "I", abre: ["Ciencias Sociales y Salud II"] },
  { nombre: "Curso de Formación General", requisitos: [], semestre: "I", abre: [] },
  { nombre: "Inglés I", requisitos: [], semestre: "I", abre: ["Inglés II"] },

  // II Semestre
  { nombre: "Salud Comunitaria I", requisitos: [], semestre: "II", abre: ["Salud Comunitaria II"] },
  { nombre: "Bioquímica", requisitos: ["Química General y Orgánica", "Biología Celular y Genética"], semestre: "II", abre: ["Farmacología"] },
  { nombre: "Biología del Desarrollo y Embriología Humana", requisitos: ["Biología Celular y Genética"], semestre: "II", abre: ["Obstetricia Fisiológica I", "Neonatología I"] },
  { nombre: "Fisiología General", requisitos: ["Biología Celular y Genética", "Física"], semestre: "II", abre: ["Agentes Vivos de Enfermedad", "Fisiología de Sistemas", "Fundamentos de Enfermería II", "Inmunología", "Neonatología I", "Obstetricia Fisiológica I"] },
  { nombre: "Anatomía", requisitos: ["Biología Celular y Genética"], semestre: "II", abre: ["Obstetricia Fisiológica I", "Neonatología I", "Agentes Vivos de Enfermedad", "Fundamentos de Enfermería II", "Ginecología Fisiológica"] },
  { nombre: "Histología", requisitos: ["Biología Celular y Genética"], semestre: "II", abre: ["Obstetricia Fisiológica I", "Neonatología I", "Agentes Vivos de Enfermedad", "Fundamentos de Enfermería II", "Ginecología Fisiológica"] },
  { nombre: "Integración al Desempeño Profesional I", requisitos: ["Fundamentos de Enfermería I"], semestre: "II", abre: ["Fundamentos de Enfermería II", "Obstetricia Fisiológica I", "Neonatología I"] },
  { nombre: "Curso de Formación General II", requisitos: [], semestre: "II", abre: [] },
  { nombre: "Inglés II", requisitos: ["Inglés I"], semestre: "II", abre: ["Inglés III"] },

  // === SEGUNDO AÑO ===
  // III Semestre
  { nombre: "Fundamentos de Enfermería II", requisitos: ["Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], semestre: "III", abre: ["Integración al Desempeño Profesional II"] },
  { nombre: "Obstetricia Fisiológica I", requisitos: ["Biología del Desarrollo y Embriología Humana", "Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], semestre: "III", abre: ["Obstetricia Fisiológica II"] },
  { nombre: "Neonatología I", requisitos: ["Biología del Desarrollo y Embriología Humana", "Fisiología General", "Anatomía", "Histología", "Integración al Desempeño Profesional I"], semestre: "III", abre: ["Neonatología II"] },
  { nombre: "Fisiología de Sistemas", requisitos: ["Fisiología General"], semestre: "III", abre: ["Obstetricia Fisiológica II", "Farmacología", "Neonatología II", "Fisiopatología", "Reproducción Humana", "Ginecología Fisiológica", "Integración al Desempeño Profesional II"] },
  { nombre: "Inmunología", requisitos: ["Fisiología General"], semestre: "III", abre: [] },
  { nombre: "Agentes Vivos de Enfermedad", requisitos: ["Fisiología General", "Anatomía", "Histología"], semestre: "III", abre: ["Neonatología II", "Infectología"] },
  { nombre: "Ciencias Sociales y Salud II", requisitos: ["Ciencias Sociales y Salud I"], semestre: "III", abre: ["Ciencias Sociales y Salud III"] },
  { nombre: "Inglés III", requisitos: ["Inglés II"], semestre: "III", abre: [] },

  // IV Semestre
  { nombre: "Neonatología II", requisitos: ["Neonatología I", "Fisiología de Sistemas", "Agentes Vivos de Enfermedad"], semestre: "IV", abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Partos I", "Clínica de Puerperio", "Clínica de Atención Primaria I", "Clínica Neonatal I"] },
  { nombre: "Obstetricia Fisiológica II", requisitos: ["Obstetricia Fisiológica I", "Fisiología de Sistemas"], semestre: "IV", abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Partos I", "Clínica de Puerperio", "Clínica de Atención Primaria I"] },
  { nombre: "Ginecología Fisiológica", requisitos: ["Fisiología de Sistemas", "Anatomía", "Histología"], semestre: "IV", abre: ["Clínica de Atención Primaria I"] },
  { nombre: "Fisiopatología", requisitos: ["Fisiología de Sistemas"], semestre: "IV", abre: ["Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio", "Neonatología III", "Obstetricia Patológica"] },
  { nombre: "Infectología", requisitos: ["Agentes Vivos de Enfermedad"], semestre: "IV", abre: ["Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio"] },
  { nombre: "Farmacología", requisitos: ["Fisiología de Sistemas", "Bioquímica"], semestre: "IV", abre: ["Obstetricia Patológica", "Neonatología III", "Clínica de Puerperio", "Clínica de Partos I", "Clínica de Atención Primaria I", "Clínica Neonatal I"] },
  { nombre: "Integración al Desempeño Profesional II", requisitos: ["Fisiología de Sistemas", "Fundamentos de Enfermería II"], semestre: "IV", abre: ["Clínica de Salud Comunitaria", "Clínica Neonatal I", "Clínica de Atención Primaria I", "Clínica de Partos I", "Clínica de Puerperio"] },
  { nombre: "Investigación en Salud I", requisitos: ["Matemáticas", "Física"], semestre: "IV", abre: ["Gestión y Liderazgo en Salud I", "Investigación en Salud II"] },

  // === TERCER AÑO ===
  // V Semestre
  { nombre: "Clínica Neonatal I", requisitos: ["Neonatología II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], semestre: "V", abre: [] },
  { nombre: "Clínica de Partos I", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], semestre: "V", abre: [] },
  { nombre: "Clínica de Atención Primaria I", requisitos: ["Obstetricia Fisiológica II", "Ginecología Fisiológica", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], semestre: "V", abre: ["Ginecología Patológica"] },
  { nombre: "Clínica de Puerperio", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología", "Infectología", "Integración al Desempeño Profesional II"], semestre: "V", abre: [] },
  { nombre: "Clínica de Salud Comunitaria", requisitos: ["Integración al Desempeño Profesional II"], semestre: "V", abre: [] },
  { nombre: "Módulo Integrado Interdisciplinario Multiprofesional I", requisitos: [], semestre: "V", abre: ["Módulo Integrado Interdisciplinario Multiprofesional II"] },

  // VI Semestre
  { nombre: "Neonatología III", requisitos: ["Neonatología II", "Obstetricia Fisiológica II", "Fisiopatología", "Farmacología"], semestre: "VI", abre: ["Enfermería Médico Quirúrgica", "Clínica Neonatal II"] },
  { nombre: "Salud Comunitaria II", requisitos: ["Salud Comunitaria I"], semestre: "VI", abre: ["Clínica de Atención Primaria II"] },
  { nombre: "Obstetricia Patológica", requisitos: ["Obstetricia Fisiológica II", "Fisiopatología", "Farmacología"], semestre: "VI", abre: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico", "Enfermería Médico Quirúrgica", "Clínica de Atención Primaria II"] },
  { nombre: "Gestión y Liderazgo en Salud I", requisitos: ["Investigación en Salud I"], semestre: "VI", abre: ["Gestión y Liderazgo en Salud II"] },
  { nombre: "Educación en Salud II", requisitos: ["Educación en Salud I"], semestre: "VI", abre: [] },
  { nombre: "Investigación en Salud II", requisitos: ["Investigación en Salud I"], semestre: "VI", abre: ["Investigación en Salud III"] },
  { nombre: "Ciencias Sociales y Salud III", requisitos: ["Ciencias Sociales y Salud II"], semestre: "VI", abre: ["Ciencias Sociales y Salud IV"] },
  { nombre: "Curso de Formación General III", requisitos: [], semestre: "VI", abre: [] }, 
 
  // === CUARTO AÑO ===
  // VII Semestre
  { nombre: "Enfermería Médico Quirúrgica", requisitos: ["Neonatología III", "Obstetricia Patológica"], semestre: "VII", abre: ["Clínica de Alto Riesgo Obstétrico", "Clínica de Partos II", "Clínica Neonatal II", "Clínica de Enfermería Médico Quirúrgica"] },
  { nombre: "Reproducción Humana", requisitos: ["Fisiología de Sistemas"], semestre: "VII", abre: [] },
  { nombre: "Ginecología Patológica", requisitos: ["Clínica de Atención Primaria I"], semestre: "VII", abre: ["Clínica de Atención Primaria II", "Clínica de Enfermería Médico Quirúrgica"] },
  { nombre: "Investigación en Salud III", requisitos: ["Investigación en Salud II"], semestre: "VII", abre: ["Seminario Unidad de Investigación I"] },
  { nombre: "Ciencias Sociales y Salud IV", requisitos: ["Ciencias Sociales y Salud III"], semestre: "VII", abre: [] },

  // VIII Semestre
  { nombre: "Clínica Neonatal II", requisitos: ["Neonatología III", "Enfermería Médico Quirúrgica"], semestre: "VIII", abre: ["Internado Neonatología"] },
  { nombre: "Clínica de Partos II", requisitos: ["Obstetricia Patológica", "Enfermería Médico Quirúrgica"], semestre: "VIII", abre: ["Internado Obstetricia"] },
  { nombre: "Clínica de Atención Primaria II", requisitos: ["Obstetricia Patológica", "Ginecología Patológica", "Salud Comunitaria II"], semestre: "VIII", abre: ["Internado Atención Primaria"] },
  { nombre: "Clínica de Alto Riesgo Obstétrico", requisitos: ["Obstetricia Patológica", "Enfermería Médico Quirúrgica"], semestre: "VIII", abre: ["Internado Obstetricia"] },
  { nombre: "Clínica de Enfermería Médico Quirúrgica", requisitos: ["Enfermería Médico Quirúrgica", "Ginecología Patológica"], semestre: "VIII", abre: ["Internado Ginecología"] },
  { nombre: "Modulo Integrado Interdisciplinario Multiprofesional II", requisitos: ["Módulo Integrado Interdisciplinario Multiprofesional I"], semestre: "VIII", abre: [] },

  // === QUINTO AÑO ===
  // IX Semestre
  { nombre: "Internado Neonatología", requisitos: ["Clínica Neonatal II"], semestre: "IX", abre: [] },
  { nombre: "Internado Obstetricia", requisitos: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico"], semestre: "IX", abre: [] },
  { nombre: "Internado Atención Primaria", requisitos: ["Clínica de Atención Primaria II"], semestre: "IX", abre: [] },
  { nombre: "Internado Ginecología", requisitos: ["Clínica de Enfermería Médico Quirúrgica"], semestre: "IX", abre: [] },
  { nombre: "Internado Electivo", requisitos: [], semestre: "IX", abre: [] },
  { nombre: "Seminario Unidad de Investigación I", requisitos: ["Investigación en Salud III"], semestre: "IX", abre: ["Seminario Unidad de Investigación II"] },
  
  // X Semestre
  { nombre: "Internado Neonatología", requisitos: ["Clínica Neonatal II"], semestre: "X", abre: [] },
  { nombre: "Internado Obstetricia", requisitos: ["Clínica de Partos II", "Clínica de Alto Riesgo Obstétrico"], semestre: "X", abre: [] },
  { nombre: "Internado Atención Primaria", requisitos: ["Clínica de Atención Primaria II"], semestre: "X", abre: [] },
  { nombre: "Internado Ginecología", requisitos: ["Clínica de Enfermería Médico Quirúrgica"], semestre: "X", abre: [] },
  { nombre: "Internado Electivo", requisitos: [], semestre: "X", abre: [] },
  { nombre: "Seminario Unidad de Investigación II", requisitos: ["Seminario Unidad de Investigación I"], semestre: "X", abre: [] },
];
