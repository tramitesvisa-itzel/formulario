// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// // Tu configuración de Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyB2YHOPydtFOFn5Sr3PXNp6H-6TM0p3Urc",
//   authDomain: "tramitesvisa-itzel.firebaseapp.com",
//   projectId: "tramitesvisa-itzel",
//   storageBucket: "tramitesvisa-itzel.appspot.com",
//   messagingSenderId: "356859229057",
//   appId: "1:356859229057:web:ab3b905aaacfa2d2b86e80"
// };

// // Inicializa Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);



document.addEventListener("DOMContentLoaded", function() {
    const btnContinuar = document.getElementById("btn-continuar");
    const instrucciones = document.getElementById("instrucciones");
    const seleccionTipo = document.getElementById("seleccion-tipo");
    const tipoSolicitud = document.getElementById("tipo-solicitud");
    const formularioPrimeraVez = document.getElementById("formulario-primera-vez");
    const btnSeleccion = document.getElementById("btn-seleccion");
    const seccionRenovacion = document.getElementById("seccion-renovacion");
    const formPrimeraVez = document.getElementById("dataForm");

    btnContinuar.addEventListener("click", function() {
        instrucciones.style.display = "none";
        seleccionTipo.style.display = "block";
    });

    btnSeleccion.addEventListener("click", function() {
        const tipo = tipoSolicitud.value;
        seleccionTipo.style.display = "none";
        if (tipo === "primera_vez") {
            formularioPrimeraVez.style.display = "block";
        } else if (tipo === "renovacion") {
            formularioPrimeraVez.style.display = "block";
            seccionRenovacion.style.display = "block";
        }
    });

    formPrimeraVez.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(formPrimeraVez);

        // Construye el objeto de datos para enviar a Firebase
        const data = {
            id_unico: formData.get("id_unico") || null,
            tipo_solicitud: formData.get("tipo_solicitud"),
            numero_telefonico: formData.get("numero_telefonico"),
            correo_electronico: formData.get("correo_electronico"),
            fecha_ultima_visita: new Date(formData.get("fecha_ultimavisit_USA")),
            duracion_en_usa: formData.get("duracionEnUSA"),
            cantidad_dias_meses: formData.get("cantidad_dias_meses"),
            apellido_paterno: formData.get("apellido_paterno"),
            apellido_materno: formData.get("apellido_materno"),
            nombres: formData.get("nombres"),
            fecha_nacimiento: new Date(formData.get("fecha_nacimiento")),
            lugar_nacimiento: formData.get("lugar_nacimiento"),
            estado_civil: formData.get("estado_civil"),
            nombre_completo_conyuge: formData.get("nombre_completo_conyuge"),
            fecha_nacimiento_conyuge: new Date(formData.get("fecha_nacimiento_conyuge")),
            lugar_nacimiento_conyuge: formData.get("lugar_nacimiento_conyuge"),
            nombre_escuela: formData.get("nombre_escuela"),
            direccion_escuela: formData.get("direccion_escuela"),
            fecha_inicio_escuela: new Date(formData.get("fecha_inicio_escuela")),
            fecha_final_escuela: new Date(formData.get("fecha_final_escuela")),
            ocupacion_actual: formData.get("ocupacion_actual"),
            nombre_empresa_actual: formData.get("nombre_empresa_actual"),
            domicilio_empresas_actual: formData.get("domicilio_empresas_actual"),
            fecha_inicio_empleo_actual: new Date(formData.get("fecha_inicio_empleo_actual")),
            telefono_empres_actual: formData.get("telefono_empres_actual"),
            salario_ensual_empleo_actual: formData.get("salario_ensual_empleo_actual")
        };

        try {
            await addDoc(collection(db, "datos-formulario"), data);
            alert("Datos enviados exitosamente");
            formPrimeraVez.reset();
        } catch (e) {
            console.error("Error añadiendo documento: ", e);
            alert("Error al enviar los datos.");
        }
    });
});



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2YHOPydtFOFn5Sr3PXNp6H-6TM0p3Urc",
  authDomain: "tramitesvisa-itzel.firebaseapp.com",
  projectId: "tramitesvisa-itzel",
  storageBucket: "tramitesvisa-itzel.appspot.com",
  messagingSenderId: "356859229057",
  appId: "1:356859229057:web:ab3b905aaacfa2d2b86e80"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Maneja el envío del formulario
document.getElementById('dataForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const id_unico = form.id_unico ? form.id_unico.value : null;
  const tipo_solicitud = form.tipo_solicitud.value;
  const numero_telefonico = form.numero_telefonico.value;
  const correo_electronico = form.correo_electronico.value;
  const fecha_ultima_visita = new Date(form.fecha_ultimavisit_USA.value);
  const duracion_en_usa = form.duracionEnUSA.value;
  const cantidad_dias_meses = form.cantidad_dias_meses.value;
  const apellido_paterno = form.apellido_paterno.value;
  const apellido_materno = form.apellido_materno.value;
  const nombres = form.nombres.value;
  const fecha_nacimiento = new Date(form.fecha_nacimiento.value);
  const lugar_nacimiento = form.lugar_nacimiento.value;
  const estado_civil = form.estado_civil.value;
  const nombre_completo_conyuge = form.nombre_completo_conyuge.value;
  const fecha_nacimiento_conyuge = new Date(form.fecha_nacimiento_conyuge.value);
  const lugar_nacimiento_conyuge = form.lugar_nacimiento_conyuge.value;
  const nombre_escuela = form.nombre_escuela.value;
  const direccion_escuela = form.direccion_escuela.value;
  const fecha_inicio_escuela = new Date(form.fecha_inicio_escuela.value);
  const fecha_final_escuela = new Date(form.fecha_final_escuela.value);
  const ocupacion_actual = form.ocupacion_actual.value;
  const nombre_empresa_actual = form.nombre_empresa_actual.value;
  const domicilio_empresas_actual = form.domicilio_empresas_actual.value;
  const fecha_inicio_empleo_actual = new Date(form.fecha_inicio_empleo_actual.value);
  const telefono_empres_actual = form.telefono_empres_actual.value;
  const salario_ensual_empleo_actual = form.salario_ensual_empleo_actual.value;

  console.log({
    id_unico,
    tipo_solicitud,
    numero_telefonico,
    correo_electronico,
    fecha_ultima_visita,
    duracion_en_usa,
    cantidad_dias_meses,
    apellido_paterno,
    apellido_materno,
    nombres,
    fecha_nacimiento,
    lugar_nacimiento,
    estado_civil,
    nombre_completo_conyuge,
    fecha_nacimiento_conyuge,
    lugar_nacimiento_conyuge,
    nombre_escuela,
    direccion_escuela,
    fecha_inicio_escuela,
    fecha_final_escuela,
    ocupacion_actual,
    nombre_empresa_actual,
    domicilio_empresas_actual,
    fecha_inicio_empleo_actual,
    telefono_empres_actual,
    salario_ensual_empleo_actual
  });

  try {
    await addDoc(collection(db, "datos-formulario"), {
      id_unico,
      tipo_solicitud,
      numero_telefonico,
      correo_electronico,
      fecha_ultima_visita,
      duracion_en_usa,
      cantidad_dias_meses,
      apellido_paterno,
      apellido_materno,
      nombres,
      fecha_nacimiento,
      lugar_nacimiento,
      estado_civil,
      nombre_completo_conyuge,
      fecha_nacimiento_conyuge,
      lugar_nacimiento_conyuge,
      nombre_escuela,
      direccion_escuela,
      fecha_inicio_escuela,
      fecha_final_escuela,
      ocupacion_actual,
      nombre_empresa_actual,
      domicilio_empresas_actual,
      fecha_inicio_empleo_actual,
      telefono_empres_actual,
      salario_ensual_empleo_actual
    });
    alert('Datos enviados exitosamente');
    form.reset();
  } catch (e) {
    console.error('Error añadiendo documento: ', e);
    alert('Error al enviar los datos.');
  }
});
