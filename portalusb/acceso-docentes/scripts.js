// === Datos dummy de Profesores y Coordinadores ===
const professors = [
{
  name: "Leonardo Hernández Martínez",
  program: "Especialidad en Logística y Mercadotecnia Estratégica",
  sessions: [
    // Nuevos registros
    { login: "21 Nov, 9:49 am", logout: "21 Nov, 9:59 am", duration: "10 minutos" },
    { login: "12 Nov, 1:44 pm", logout: "12 Nov, 1:54 pm", duration: "10 minutos" },

    // Sesiones originales
    { login: "18 Sep, 6:23 pm", logout: "18 Sep, 6:33 pm", duration: "10 minutos" },
    { login: "27 Ago, 7:16 pm", logout: "27 Ago, 7:26 pm", duration: "10 minutos" },
    { login: "27 Ago, 7:02 pm", logout: "27 Ago, 7:12 pm", duration: "10 minutos" }
  ],
  img: "./img/profile.jpg",
  role: "professor"
},
{
  name: "Fernando Radillo Ruíz",
  program: "Especialidad en Logística y Mercadotecnia Estratégica",
  sessions: [
    // Nuevas
    { login: "19 Nov, 5:23 pm", logout: "19 Nov, 5:33 pm", duration: "10 minutos" },
    { login: "19 Nov, 4:39 am", logout: "19 Nov, 4:49 am", duration: "10 minutos" },
    { login: "18 Nov, 5:32 pm", logout: "18 Nov, 5:42 pm", duration: "10 minutos" },
    { login: "3 Nov, 3:46 pm", logout: "3 Nov, 3:56 pm", duration: "10 minutos" },

    // Septiembre (originales)
    { login: "23 Sep, 7:32 pm", logout: "23 Sep, 7:42 pm", duration: "10 minutos" },
    { login: "23 Sep, 6:49 pm", logout: "23 Sep, 6:59 pm", duration: "10 minutos" },
    { login: "22 Sep, 3:56 pm", logout: "22 Sep, 4:06 pm", duration: "10 minutos" },
    { login: "22 Sep, 3:20 pm", logout: "22 Sep, 3:30 pm", duration: "10 minutos" },
    { login: "11 Sep, 6:31 pm", logout: "11 Sep, 6:41 pm", duration: "10 minutos" },
    { login: "9 Sep, 11:28 am", logout: "9 Sep, 11:38 am", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "professor"
}
,
 {
  name: "Felipe De Jesús Castro Hernández",
  program: "Especialidad en Logística y Mercadotecnia Estratégica",
  sessions: [
    // Nuevos registros
    { login: "2 Dic, 12:33 pm", logout: "2 Dic, 12:39 pm", duration: "6 minutos" },
    { login: "29 Nov, 7:41 pm", logout: "29 Nov, 8:04 pm", duration: "23 minutos" },
    { login: "22 Nov, 5:04 pm", logout: "22 Nov, 5:14 pm", duration: "10 minutos" },
    { login: "21 Nov, 3:10 pm", logout: "21 Nov, 3:20 pm", duration: "10 minutos" },
    { login: "18 Nov, 9:10 pm", logout: "18 Nov, 9:20 pm", duration: "10 minutos" },
    { login: "18 Nov, 7:09 pm", logout: "18 Nov, 7:19 pm", duration: "10 minutos" },
    { login: "4 Nov, 3:10 pm", logout: "4 Nov, 3:20 pm", duration: "10 minutos" },

    // Sesiones originales
    { login: "23 Sep, 7:07 pm", logout: "23 Sep, 7:17 pm", duration: "10 minutos" },
    { login: "23 Sep, 9:48 am", logout: "23 Sep, 10:06 am", duration: "18 minutos" },
    { login: "26 Ago, 3:24 pm", logout: "26 Ago, 3:34 pm", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "professor"
}
,
 {
  name: "Paola Adriana Benitez Moreno",
  program: "Especialidad en Logística y Mercadotecnia Estratégica",
  sessions: [
    // Nuevos registros
    { login: "11:06 am", logout: "-", duration: "-", ip: "187.188.114.211" },
    { login: "11 Nov, 11:27 am", logout: "11 Nov, 11:37 am", duration: "10 minutos", ip: "187.191.38.194" },
    { login: "5 Nov, 11:09 am", logout: "5 Nov, 11:19 am", duration: "10 minutos", ip: "187.188.114.199" },

    // Sesiones originales
    { login: "17 Sep, 11:33 am", logout: "17 Sep, 11:43 am", duration: "10 minutos" },
    { login: "11 Sep, 1:11 pm", logout: "11 Sep, 1:21 pm", duration: "10 minutos" },
    { login: "7 Sep, 6:02 pm", logout: "7 Sep, 6:12 pm", duration: "10 minutos" },
    { login: "5 Sep, 7:42 pm", logout: "5 Sep, 7:52 pm", duration: "10 minutos" },
    { login: "2 Sep, 4:28 pm", logout: "2 Sep, 4:38 pm", duration: "10 minutos" },
    { login: "1 Sep, 8:03 pm", logout: "1 Sep, 8:13 pm", duration: "10 minutos" },
    { login: "25 Ago, 1:21 pm", logout: "25 Ago, 1:31 pm", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "professor"
},
  {
    name: "Claudia Valeria Guarella Medina",
    program: "Especialidad en Gestión Educativa y Talento Humano",
    sessions: [
      { login: "21 Sep, 1:33 pm", logout: "21 Sep, 1:43 pm", duration: "10 minutos" },
      { login: "19 Sep, 1:19 pm", logout: "19 Sep, 1:29 pm", duration: "10 minutos" },
      { login: "15 Sep, 2:17 pm", logout: "15 Sep, 2:27 pm", duration: "10 minutos" },
      { login: "14 Sep, 9:45 am", logout: "14 Sep, 9:55 am", duration: "10 minutos" },
      { login: "12 Sep, 10:44 am", logout: "12 Sep, 10:54 am", duration: "10 minutos" },
      { login: "10 Sep, 9:40 am", logout: "10 Sep, 9:50 am", duration: "10 minutos" },
      { login: "10 Sep, 9:14 am", logout: "10 Sep, 9:24 am", duration: "10 minutos" },
      { login: "8 Sep, 7:27 pm", logout: "8 Sep, 7:37 pm", duration: "10 minutos" },
      { login: "8 Sep, 2:30 pm", logout: "8 Sep, 2:40 pm", duration: "10 minutos" },
      { login: "8 Sep, 11:30 am", logout: "8 Sep, 11:40 am", duration: "10 minutos" },
      { login: "4 Sep, 4:25 pm", logout: "4 Sep, 4:35 pm", duration: "10 minutos" },
      { login: "1 Sep, 4:21 pm", logout: "1 Sep, 4:31 pm", duration: "10 minutos" },
      { login: "31 Ago, 11:26 am", logout: "31 Ago, 11:36 am", duration: "10 minutos" },
      { login: "28 Ago, 5:28 pm", logout: "28 Ago, 5:38 pm", duration: "10 minutos" },
      { login: "26 Ago, 7:03 pm", logout: "26 Ago, 7:13 pm", duration: "10 minutos" }
    ],
    img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
    role: "professor"
  },
{
  name: "María Esther Chamosa Sandoval",
  program: "Doctorado en Comunicación Audiovisual Estratégica",
  sessions: [
    // Nuevos registros
    { login: "26 Nov, 10:02 am", logout: "26 Nov, 10:12 am", duration: "10 minutos", ip: "189.226.87.182" },
    { login: "20 Nov, 9:50 am", logout: "20 Nov, 10:00 am", duration: "10 minutos", ip: "189.226.92.237" },
    { login: "13 Nov, 11:37 am", logout: "13 Nov, 11:47 am", duration: "10 minutos", ip: "201.110.180.187" },
    { login: "5 Nov, 8:56 am", logout: "5 Nov, 9:06 am", duration: "10 minutos", ip: "189.144.224.223" },

    // Sesiones originales
    { login: "22 Sep, 9:25 am", logout: "22 Sep, 9:35 am", duration: "10 minutos" },
    { login: "17 Sep, 8:45 am", logout: "17 Sep, 8:55 am", duration: "10 minutos" },
    { login: "16 Sep, 1:48 pm", logout: "16 Sep, 1:58 pm", duration: "10 minutos" },
    { login: "10 Sep, 8:59 am", logout: "10 Sep, 9:09 am", duration: "10 minutos" },
    { login: "3 Sep, 1:54 pm", logout: "3 Sep, 2:04 pm", duration: "10 minutos" },
    { login: "29 Ago, 1:30 pm", logout: "29 Ago, 1:40 pm", duration: "10 minutos" },
    { login: "26 Ago, 4:28 pm", logout: "26 Ago, 4:38 pm", duration: "10 minutos" },
    { login: "26 Ago, 1:30 pm", logout: "26 Ago, 1:40 pm", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "professor"
},
 {
  name: "Laura Georgina Ortega Luna",
  program: "Doctorado en Comunicación Audiovisual Estratégica",
  sessions: [
    // Nuevos registros
    { login: "29 Nov, 9:39 am", logout: "29 Nov, 9:49 am", duration: "10 minutos", ip: "189.203.27.144" },
    { login: "19 Nov, 5:51 pm", logout: "19 Nov, 6:01 pm", duration: "10 minutos", ip: "201.116.48.66" },
    { login: "18 Nov, 12:44 pm", logout: "18 Nov, 12:54 pm", duration: "10 minutos", ip: "201.116.48.66" },

    // Sesiones originales
    { login: "21 Sep, 8:31 pm", logout: "21 Sep, 8:41 pm", duration: "10 minutos" },
    { login: "20 Sep, 7:47 am", logout: "20 Sep, 7:57 am", duration: "10 minutos" },
    { login: "19 Sep, 7:09 pm", logout: "19 Sep, 7:19 pm", duration: "10 minutos" },
    { login: "19 Sep, 2:46 pm", logout: "19 Sep, 2:56 pm", duration: "10 minutos" },
    { login: "13 Sep, 7:47 am", logout: "13 Sep, 7:57 am", duration: "10 minutos" },
    { login: "12 Sep, 7:58 pm", logout: "12 Sep, 8:08 pm", duration: "10 minutos" },
    { login: "9 Sep, 12:19 pm", logout: "9 Sep, 12:29 pm", duration: "10 minutos" },
    { login: "6 Sep, 7:43 am", logout: "6 Sep, 7:53 am", duration: "10 minutos" },
    { login: "5 Sep, 6:37 pm", logout: "5 Sep, 6:47 pm", duration: "10 minutos" },
    { login: "29 Ago, 6:05 pm", logout: "29 Ago, 6:15 pm", duration: "10 minutos" },
    { login: "29 Ago, 4:03 pm", logout: "29 Ago, 4:13 pm", duration: "10 minutos" },
    { login: "29 Ago, 12:11 pm", logout: "29 Ago, 12:21 pm", duration: "10 minutos" },
    { login: "25 Ago, 8:36 pm", logout: "25 Ago, 8:46 pm", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "professor"
},
{
  name: "Tanya Gabriela Garciarivas y Reyes",
  program: "Doctorado en Comunicación Audiovisual Estratégica",
  sessions: [
    // Nuevos registros
    { login: "22 Nov, 7:57 am", logout: "22 Nov, 8:07 am", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "21 Nov, 5:17 pm", logout: "21 Nov, 5:27 pm", duration: "10 minutos", ip: "187.190.39.209" },
    { login: "14 Nov, 7:34 pm", logout: "14 Nov, 7:44 pm", duration: "10 minutos", ip: "187.190.39.209" },
    { login: "10 Nov, 8:55 am", logout: "10 Nov, 9:05 am", duration: "10 minutos", ip: "187.251.245.162" },
    { login: "8 Nov, 7:47 am", logout: "8 Nov, 7:57 am", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "7 Nov, 10:17 pm", logout: "7 Nov, 10:27 pm", duration: "10 minutos", ip: "187.190.39.209" },
    { login: "4 Nov, 1:08 pm", logout: "4 Nov, 1:18 pm", duration: "10 minutos", ip: "187.190.39.209" },

    // Sesiones originales
    { login: "21 Sep, 8:31 pm", logout: "21 Sep, 8:41 pm", duration: "10 minutos" },
    { login: "20 Sep, 7:47 am", logout: "20 Sep, 7:57 am", duration: "10 minutos" },
    { login: "19 Sep, 7:09 pm", logout: "19 Sep, 7:19 pm", duration: "10 minutos" },
    { login: "19 Sep, 2:46 pm", logout: "19 Sep, 2:56 pm", duration: "10 minutos" },
    { login: "13 Sep, 7:47 am", logout: "13 Sep, 7:57 am", duration: "10 minutos" },
    { login: "12 Sep, 7:58 pm", logout: "12 Sep, 8:08 pm", duration: "10 minutos" },
    { login: "9 Sep, 12:19 pm", logout: "9 Sep, 12:29 pm", duration: "10 minutos" },
    { login: "6 Sep, 7:43 am", logout: "6 Sep, 7:53 am", duration: "10 minutos" },
    { login: "5 Sep, 6:37 pm", logout: "5 Sep, 6:47 pm", duration: "10 minutos" },
    { login: "29 Ago, 6:05 pm", logout: "29 Ago, 6:15 pm", duration: "10 minutos" },
    { login: "29 Ago, 4:03 pm", logout: "29 Ago, 4:13 pm", duration: "10 minutos" },
    { login: "29 Ago, 12:11 pm", logout: "29 Ago, 12:21 pm", duration: "10 minutos" },
    { login: "25 Ago, 8:36 pm", logout: "25 Ago, 8:46 pm", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "professor"
},
{
  name: "José Gabriel Gil Velázquez",
  program: "Especialidad en Gestión Educativa y Talento Humano",
  sessions: [
    { login: "1 Dic, 7:28 pm", logout: "1 Dic, 7:38 pm", duration: "10 minutos", ip: "189.202.182.106" },
    { login: "28 Nov, 8:56 pm", logout: "28 Nov, 9:06 pm", duration: "10 minutos", ip: "189.202.182.106" },
    { login: "28 Nov, 8:09 pm", logout: "28 Nov, 8:19 pm", duration: "10 minutos", ip: "189.125.229.106" },
    { login: "21 Nov, 7:35 pm", logout: "21 Nov, 7:45 pm", duration: "10 minutos", ip: "189.202.182.106" },
    { login: "13 Nov, 9:53 pm", logout: "13 Nov, 10:03 pm", duration: "10 minutos", ip: "189.202.182.106" },
    { login: "11 Nov, 7:47 pm", logout: "11 Nov, 7:57 pm", duration: "10 minutos", ip: "189.125.229.106" },
    { login: "10 Nov, 9:43 pm", logout: "10 Nov, 9:53 pm", duration: "10 minutos", ip: "189.202.182.106" },
    { login: "10 Nov, 7:28 pm", logout: "10 Nov, 7:38 pm", duration: "10 minutos", ip: "189.125.229.106" },
    { login: "6 Nov, 8:48 pm", logout: "6 Nov, 8:58 pm", duration: "10 minutos", ip: "189.125.229.106" },
    { login: "5 Nov, 9:52 pm", logout: "5 Nov, 10:02 pm", duration: "10 minutos", ip: "189.202.182.106" },
    { login: "3 Nov, 7:25 pm", logout: "3 Nov, 7:35 pm", duration: "10 minutos", ip: "189.125.229.106" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "professor"
},

  // Coordinadores
{
  name: "Eduardo Fernando Aguado Cruz",
  program: "Doctorado en Comunicación Audiovisual Estratégica",
  sessions: [
    // Nuevos registros
    { login: "29 Nov, 8:37 am", logout: "29 Nov, 8:47 am", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "21 Nov, 6:27 pm", logout: "21 Nov, 6:37 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "19 Nov, 3:37 pm", logout: "19 Nov, 3:47 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "15 Nov, 9:54 am", logout: "15 Nov, 10:04 am", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "14 Nov, 5:14 pm", logout: "14 Nov, 5:24 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "11 Nov, 6:28 pm", logout: "11 Nov, 6:38 pm", duration: "10 minutos", ip: "187.188.114.199" },

    // Sesión original
    { login: "30 Ago, 1:12 pm", logout: "30 Ago, 1:22 pm", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "coordinator"
},
{
  name: "José Miguel Ramírez Ramos",
  program: "Especialidad en Logística y Mercadotecnia Estratégica",
  sessions: [
    // Nuevos registros
    { login: "29 Nov, 1:56 pm", logout: "29 Nov, 2:06 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "25 Nov, 7:08 pm", logout: "25 Nov, 7:18 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "22 Nov, 8:53 am", logout: "22 Nov, 9:03 am", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "21 Nov, 8:02 pm", logout: "21 Nov, 8:12 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "19 Nov, 8:22 pm", logout: "19 Nov, 8:32 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "19 Nov, 11:57 am", logout: "19 Nov, 12:07 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "15 Nov, 1:48 pm", logout: "15 Nov, 1:58 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "12 Nov, 6:06 pm", logout: "12 Nov, 6:16 pm", duration: "10 minutos", ip: "187.188.114.199" },

    // Sesiones anteriores
    { login: "22 Sep, 7:24 pm", logout: "22 Sep, 7:34 pm", duration: "10 minutos" },
    { login: "20 Sep, 2:50 pm", logout: "20 Sep, 3:00 pm", duration: "10 minutos" },
    { login: "17 Sep, 1:14 pm", logout: "17 Sep, 1:24 pm", duration: "10 minutos" },
    { login: "17 Sep, 11:33 am", logout: "17 Sep, 11:43 am", duration: "10 minutos" },
    { login: "10 Sep, 8:21 pm", logout: "10 Sep, 8:31 pm", duration: "10 minutos" },
    { login: "5 Sep, 2:57 pm", logout: "5 Sep, 3:07 pm", duration: "10 minutos" },
    { login: "3 Sep, 10:26 am", logout: "3 Sep, 10:36 am", duration: "10 minutos" },
    { login: "30 Ago, 3:03 pm", logout: "30 Ago, 3:13 pm", duration: "10 minutos" },
    { login: "27 Ago, 7:15 pm", logout: "27 Ago, 7:25 pm", duration: "10 minutos" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "coordinator"
},
{
  name: "Jorge Díaz Vázquez",
  program: "Especialidad en Gestión Educativa y Talento Humano",
  sessions: [
    // Nuevos registros
    { login: "11:17 am", logout: "-", duration: "-", ip: "187.188.114.199" },
    { login: "1 Dic, 7:34 pm", logout: "1 Dic, 7:44 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "25 Nov, 11:35 am", logout: "25 Nov, 11:45 am", duration: "10 minutos", ip: "187.188.114.211" },
    { login: "24 Nov, 8:18 pm", logout: "24 Nov, 8:18 pm", duration: "menos de un minuto", ip: "187.188.114.199" },
    { login: "20 Nov, 1:47 pm", logout: "20 Nov, 1:57 pm", duration: "10 minutos", ip: "200.68.183.54" },
    { login: "19 Nov, 7:42 pm", logout: "19 Nov, 7:52 pm", duration: "10 minutos", ip: "200.68.173.142" },
    { login: "19 Nov, 1:07 pm", logout: "19 Nov, 1:17 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "18 Nov, 7:40 pm", logout: "18 Nov, 7:50 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "12 Nov, 11:21 am", logout: "12 Nov, 8:44 pm", duration: "9 horas", ip: "187.188.114.199" },
    { login: "10 Nov, 8:38 am", logout: "10 Nov, 8:48 am", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "5 Nov, 12:17 pm", logout: "5 Nov, 12:27 pm", duration: "10 minutos", ip: "187.188.114.199" },
    { login: "4 Nov, 11:43 am", logout: "4 Nov, 8:21 pm", duration: "9 horas", ip: "187.188.114.199" },

    // Sesiones previas
    { login: "6:57 am", logout: "-", duration: "-" },
    { login: "23 Sep, 12:15 pm", logout: "23 Sep, 12:25 pm", duration: "10 minutos" },
    { login: "23 Sep, 12:06 pm", logout: "23 Sep, 12:14 pm", duration: "8 minutos" },
    { login: "20 Sep, 1:39 pm", logout: "22 Sep, 8:17 pm", duration: "2 días" }
  ],
  img: "https://via.placeholder.com/100/cccccc/ffffff?text=Avatar",
  role: "coordinator"
}

];

// === Elementos DOM ===
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");
const profList = document.getElementById("profList");
const coordList = document.getElementById("coordList");
const profDetail = document.getElementById("profDetail");

const detailImg = document.getElementById("detailImg");
const detailName = document.getElementById("detailName");
const detailPrograma = document.getElementById("detailPrograma");
const sessionTable = document.querySelector("#sessionTable tbody");

const logoutBtn = document.getElementById("logoutBtn");
const backBtn = document.getElementById("backBtn");

// === Función para mostrar vistas ===
function showView(view) {
  loginPage.classList.add("hidden");
  dashboard.classList.add("hidden");
  profDetail.classList.add("hidden");

  document.body.classList.remove("login-view", "dashboard-view", "detail-view");

  if(view === "login") {
    loginPage.classList.remove("hidden");
    document.body.classList.add("login-view");
  } else if(view === "dashboard") {
    dashboard.classList.remove("hidden");
    document.body.classList.add("dashboard-view");
  } else if(view === "detail") {
    profDetail.classList.remove("hidden");
    document.body.classList.add("detail-view");
  }
}

// === Renderizar lista de profesores y coordinadores ===
function renderProfesores() {
  profList.innerHTML = "";
  coordList.innerHTML = "";

  professors.forEach(prof => {
    const card = document.createElement("div");
    card.className = "prof-card";
    card.innerHTML = `
      <img src="${prof.img}" alt="Foto de ${prof.name}">
      <div>
        <h3>${prof.name}</h3>
        <p>${prof.program}</p>
      </div>
    `;
    card.addEventListener("click", () => showDetail(prof));

    if(prof.role === "coordinator"){
      coordList.appendChild(card);
    } else {
      profList.appendChild(card);
    }
  });
}

// === Mostrar detalle profesor/coordinador ===
function showDetail(prof) {
  detailImg.src = prof.img;
  detailName.textContent = prof.name;
  detailPrograma.textContent = prof.program;

  sessionTable.innerHTML = "";
  prof.sessions.forEach((s, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${s.login}</td>
      <td>${s.logout}</td>
      <td>${s.duration}</td>
    `;
    sessionTable.appendChild(tr);
  });

  showView("detail");
}

// === Eventos ===
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  renderProfesores();
  showView("dashboard");
});

backBtn.addEventListener("click", () => showView("dashboard"));

logoutBtn.addEventListener("click", () => {
  loginForm.reset();
  showView("login");
});

// === Inicializar vista login ===
showView("login");

const navbar = document.getElementById("navbar");

// Usuario simulado (después de login)
let currentUser = null;

function renderNavbar(view) {
  navbar.innerHTML = ""; // Limpiamos contenido

  if(view === "login") {
    navbar.innerHTML = `<div class="nav-logo">Portal Profesores</div>`;
  } else if(view === "dashboard" || view === "detail") {
    navbar.innerHTML = `
      <div class="nav-logo">Portal Profesores</div>
      <div class="nav-user">
        <span>${currentUser.name}</span>
        <img src="${currentUser.img}" alt="Usuario">
      </div>
    `;
  }
}
