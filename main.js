const question1 = "Conoces tu tipo de piel (si/no)?";
const question2 = "¿Tienes una rutina de Skincare (si/no)?";

const questions = [question1, question2];

//va a recibir la respuesta y si es un si devuelve true, si es un no un false si es un null un null 
//y si es cualquier otra cosa (sip, nop, nones) devuelve undefined
function mapToBooleanValue(answer) {
    switch (answer) {
        case "si":
            return true;
        case "no":
            return false;
        case null:
            return null;
        default:
            return undefined;
    }
}


function simulator() {
    let continueWithQuestions = true;
    let requireContact = false;

    //aqui recorre las dos preguntas 👇🏻 
    for (question of questions) {
        //esto es para que si o si responda si o no si aprieta cancelar se sale
        while (true) {
            //aqui se pregunta 
            const answer = prompt(question);
            //la respuesta mapeada por la funcion
            const answerQuestion = mapToBooleanValue(answer);
            // si es null significa que el usuario apreto cancelar
            if (answerQuestion === null) {
                continueWithQuestions = false;
                break;
            }
            //aqui significa que el usuario respondio que si o que no
            else if (answerQuestion !== undefined) {
                //si es false guardo que la contactemos
                if (answerQuestion === false) {
                    requireContact = true;
                }
                break;
            }
            else {
                alert("Debe ingresar 'si' o 'no'");
            }
        }

        //esto es para ver si me salgo o me quedo en el flujo, es decir si apreto cancelar o no
        if (continueWithQuestions) {
            continue;
        }
        else {
            break;
        }
    }

    if (continueWithQuestions) {
        if (requireContact) {
            alert("Nosotros te podemos ayudar, contactanos");
        } else {
            alert("Gracias, suscribete a nuestro boletin");
        }
    }
    else {
        alert("Cancelado por el usuario");
    }
}

//Arranque del simulador
simulator();

