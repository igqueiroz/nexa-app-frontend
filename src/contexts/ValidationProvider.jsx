import React, {useState, useContext, useEffect } from 'react';
import { evaluateField } from "../utils/validation_handlers"
import { LeadDataContext } from "./LeadDataProvider"

let ValidationContext
const { Provider, Consumer } = ValidationContext = React.createContext()

function ValidationProvider(props) {
    const [fields, setfields] = useState({})
    const {leadData, leadHasData} = useContext(LeadDataContext)
    const { children } = props
    
    useEffect(() => {
        getFieldsForValidation()
    })

    function validateField({ name, value }) {
        const validation = evaluateField(name, value, leadData)
        setfields({ ...fields, [name]: validation })
    }

    
    function getFieldsForValidation() {
        const initialValidationState = {
            hasError: false,
            errorMsg: "",
            renderErrorMsg: false
        }
       	return fields 
    }


    function shouldRenderErrorMsg(name) {
        return fields[name] && fields[name].renderErrorMsg
    }

 
    function getValidationStatus(name) {
        return fields[name] ? fields[name] : false
    }

    /** Retorna a mensagem de erro para determinado input. */
    function getErrorMsg(name) {
        return fields[name] && fields[name].errorMessage
    }

    function toggleRenderErrorMsg(name) {
        fields[name].hasError
            && setfields({ ...fields, [name]: { ...fields[name], renderErrorMsg: true }})
    }

    return (
        <Provider 
            value={{
                validateField,
                fields
            }}
        >
            { children }
        </Provider>
    );
}

export { ValidationProvider, Consumer as ValidationConsumer, ValidationContext }