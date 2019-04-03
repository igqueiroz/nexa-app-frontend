export function evaluateField( fieldName, fieldValue, leadData ) {
    const validationSuccess = {
        hasError: false,
        message: "",
        renderErrorMsg: false
    }
    const validationError = {
        hasError: true,
        message: "",
        renderErrorMsg: false
    }
    const evaluation = validationHandlers(fieldName, fieldValue, leadData)
    return evaluation.hasError ? { ...validationError, ...evaluation } : validationSuccess
}

function validationHandlers(fieldName, fieldValue, leadData) {
    const noError = { hasError: false }
    const emptyFieldMessage = "Este campo é obrigatório."
    const handlers = {
        Nome() {
            const nome = fieldValue.trim()
            if( nome.length === 0 ) {
                return { hasError: true, errorMessage: emptyFieldMessage }
            }
            else if( !nome.includes(" ")) {
                return { hasError: true, errorMessage: "Insira nome e sobrenome." }
            }
            return noError
        },
        Email() {
            const email = fieldValue
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const isValid = emailRegex.test(email)
            if( !email ) {
                return { hasError: true, errorMessage: emptyFieldMessage }
            }
            else if( !isValid ) {
                return { hasError: true, errorMessage: "Email inválido" }
            }
            return noError
         }
    }

    const output = handlers[fieldName]()
    if( !output ) {
        throw new Error(`Elemento ${fieldName} está marcado como obrigatório mas não possui função de validação implementada.`)
    }
    return output
}