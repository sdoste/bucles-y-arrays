function veintealcinco(){
    for (let i = 20; i > 4; i--){
    console.log(i);
    }
}

function tresaltreintatres(){
    for (let i = 3; i < 34; i++){
    console.log(i*i);
    }
}

function tiempo(){
    console.log("El " + prompt("Dime el día de la semana") + " habrá " + prompt("Dime el tiempo") + "."); 
}

function recetas(){
    const recetas = [
        "Gazpacho",
        "Marmitako",
        "Paella Catalana",
        "Pulpo a la Gallega",
        "Fabada Asturiana",
        "Tortilla Española",
        "Salmorejo Cordobés",
        "Arroz a la Marinera",
        "Cochinillo Segoviano",
        "Caldereta de Langosta"
      ];
    recetas.forEach(receta => {
        console.log(receta)
    });
}

function programming(){
    const programmingLanguages = [
        "C#",
        "C++",
        "Go",
        "Java",
        "JavaScript",
        "PHP",
        "Python",
        "Ruby",
        "Rust",
        "Swift"
      ];

    let userPick = parseInt(prompt("¿Número de orden? Pulsa 0 para salir"));
    while (userPick !== 0){
        if ((userPick < 0) || (userPick > programmingLanguages.length + 1)){
            window.alert("No hay ningún lenguaje en ese orden");
        } else{
            programmingLanguages.forEach(language => {
                if ((programmingLanguages.indexOf(language) + 1) == userPick){
                    window.alert(language);
                }
            });
        }
        userPick = parseInt(prompt("¿Número de orden? Pulsa 0 para salir"));
    }

}

function papaNoel(){
    let cantidadInicial = prompt("Dime la cantidad inicial de regalos");
    if (cantidadInicial < 101){
        window.alert("Debe ser mayor a 100.");
    } else{
        while (cantidadInicial > 0){
            let resta = parseInt(prompt("¿Cuántos regalos has repartido hoy?"));
            if ((cantidadInicial - resta)< 0){
                cantidadInicial = 0;
            } else{
                cantidadInicial -= resta;
            }
            if (cantidadInicial == 0){
                window.alert("Misión cumplida. Hasta el año que viene!");
            } else if (cantidadInicial < 100){
                window.alert("¡Ojo, quedan menos de 100 regalos!" + " Número de regalos: " + cantidadInicial);
            } else{
                window.alert("Quedan " + cantidadInicial + " regalos.");
            }
        }
        }   
}