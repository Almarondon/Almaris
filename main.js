const question1 = "Conoces tu tipo de piel (si/no)?";
const question2 = "¿Tienes una rutina de Skincare (si/no)?";

const questions = [question1, question2];

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

    for (question of questions) {
        while (true) {
            const answer = prompt(question);
            const answerQuestion = mapToBooleanValue(answer);
    
            if (answerQuestion === null) {
                continueWithQuestions = false;
                break;
            }
    
            else if (answerQuestion !== undefined) {
                if (answerQuestion === false) {
                    requireContact = true;
                }
                break;
            }
            else {
                alert("Debe ingresar 'si' o 'no'");
            }
        }


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

simulator();
