// Declaración de variables y constantes
const objetivos = ["perder peso", "ganar masa muscular", "recomposición corporal"];

// Función principal para calcular las calorías
function calcularCalorias() {
    // Solicitar el objetivo del usuario
    let objetivo = prompt("¿Cuál es tu objetivo? (perder peso, ganar masa muscular, recomposición corporal)");
    
    // Validar si el objetivo es correcto
    if (!objetivos.includes(objetivo)) {
        alert("Objetivo no válido. Por favor, elige entre: perder peso, ganar masa muscular o recomposición corporal.");
        return;
    }

    // Solicitar las calorías de mantenimiento
    let caloriasMantenimiento = prompt("Ingresa tus calorías de mantenimiento:");

    // Validar las calorías
    if (caloriasMantenimiento === "" || caloriasMantenimiento <= 0) {
        alert("Por favor, ingresa un número válido para las calorías.");
        return;
    }

    caloriasMantenimiento = parseInt(caloriasMantenimiento);

    let caloriasRecomendadas;

    // Cálculo de calorías según el objetivo
    if (objetivo === "perder peso") {
        caloriasRecomendadas = caloriasMantenimiento * 0.8; // 20% menos
    } else if (objetivo === "ganar masa muscular") {
        caloriasRecomendadas = caloriasMantenimiento * 1.1; // 10% más
    } else if (objetivo === "recomposición corporal") {
        caloriasRecomendadas = caloriasMantenimiento; // Mantenimiento
    }

    // Mostrar el resultado
    alert("Tus calorías recomendadas son: " + caloriasRecomendadas);
}

// Llamar a la función para iniciar la interacción
calcularCalorias();
