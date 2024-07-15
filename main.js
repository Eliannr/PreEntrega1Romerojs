
const objetivos = ["perder peso", "ganar masa muscular", "recomposición corporal"];


function calcularCalorias() {
    
    let objetivo = prompt("¿Cuál es tu objetivo? (perder peso, ganar masa muscular, recomposición corporal)");
    
    
    if (!objetivos.includes(objetivo)) {
        alert("Objetivo no válido. Por favor, elige entre: perder peso, ganar masa muscular o recomposición corporal.");
        return;
    }

    
    let caloriasMantenimiento = prompt("Ingresa tus calorías de mantenimiento:");

    
    if (caloriasMantenimiento === "" || caloriasMantenimiento <= 0) {
        alert("Por favor, ingresa un número válido para las calorías.");
        return;
    }

    caloriasMantenimiento = parseInt(caloriasMantenimiento);

    let caloriasRecomendadas;

    
    switch (objetivo) {
        case "perder peso":
            caloriasRecomendadas = caloriasMantenimiento * 0.8;
            break;
        case "ganar masa muscular":
            caloriasRecomendadas = caloriasMantenimiento * 1.2;
            break;
        case "recomposición corporal":
            caloriasRecomendadas = caloriasMantenimiento;
            break;
        default:
            alert("Objetivo no válido.");
            return;
    }

    
    alert("Tus calorías recomendadas son: " + caloriasRecomendadas);
}


calcularCalorias()
